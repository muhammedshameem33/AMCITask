import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from 'src/app/Models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
dataSource:any;
displayedColumns:string[]=['id','userId','title','body']
  constructor(private http:HttpService,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllPosts();
  }


  private getAllPosts() {
    debugger
    this.spinner.show();
    this.http.get('posts').subscribe(
      res => {
        this.dataSource=res;
        this.spinner.hide();
        this.openSnackBar("Successfully get all posts","Dismiss");
      },
      error => {
        this.spinner.hide();
        this.openSnackBar("Failed During fetching","Dismiss");
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
