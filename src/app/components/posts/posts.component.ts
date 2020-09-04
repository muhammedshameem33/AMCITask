import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private http:HttpService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }


  private getAllPosts() {
    debugger
    this.spinner.show();
    this.http.get('posts').subscribe(
      res => {
        console.log(res);
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
      }
    );
  }
}
