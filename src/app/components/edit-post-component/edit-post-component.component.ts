import { Component, OnInit, Optional, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/service/http.service';
import { Post } from 'src/app/Models/post';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-post-component',
  templateUrl: './edit-post-component.component.html',
  styleUrls: ['./edit-post-component.component.css']
})
export class EditPostComponentComponent implements OnInit {
  fromPage: Post;
  @Input() title:any;
  @Input() body:any;

  constructor(private http:HttpService, 
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditPostComponentComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.fromPage = data.pageValue;
      console.log(this.fromPage)
    }
    apiCallUpdate(){
      let data={
        title:this.title,
        body:this.body
      }
      this.http.put('posts/'+this.fromPage.id,data).subscribe(
        res=>{
          this.openSnackBar("Successfully updated","Dismiss");
          console.log(res);
        },
        error=>{
          this.openSnackBar("Update Failed","Dismiss");
          console.log(error);
        }
      )
    }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  ngOnInit(): void {
  }



}
