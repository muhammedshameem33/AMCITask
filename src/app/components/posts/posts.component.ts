import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Post } from 'src/app/Models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
dataSource:MatTableDataSource<any>;
displayedColumns:string[]=['id','userId','title','body','actions','delete']
  constructor(private http:HttpService,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllPosts();
    
  }

  private getAllPosts() {
    this.spinner.show();
    this.http.get('posts').subscribe(
      res => {
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.spinner.hide();
        this.openSnackBar("Successfully get all posts","Dismiss");
      },
      error => {
        this.spinner.hide();
        this.openSnackBar("Failed During fetching","Dismiss");
      }
    );
  }

  Delete(id){
    this.spinner.show();
    this.http.delete('posts/'+id).subscribe(
      res=>{
        this.spinner.hide();
        this.openSnackBar("Successfully Deleted","Dismiss");
      },
      error=>{
        this.spinner.hide();
        this.openSnackBar("Failed","Dismiss");
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
