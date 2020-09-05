import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DataShareService } from 'src/app/service/data-share.service';
import { EditPostComponentComponent } from 'src/app/components/edit-post-component/edit-post-component.component'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchText:string="";
dataSource:MatTableDataSource<any>;

displayedColumns:string[]=['id','userId','title','body','actions','delete']
  dialogeValue: any;
  constructor(private http:HttpService,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar,
    private dataService:DataShareService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllPosts();
    this.dataService.shareSearchText.subscribe(x=>{
      this.searchText=x;
      this.applyFilter()
    });
  }

  private getAllPosts() {
    this.spinner.show();
    this.http.get('posts').subscribe(
      res => {
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.spinner.hide();
        this.openSnackBar("Successfully get all posts","Dismiss");
      },
      error => {
        this.spinner.hide();
        this.openSnackBar("Failed During fetching","Dismiss");
      }
    );
  }

  applyFilter() {
    
    const filterValue = this.searchText;
    if (!!filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
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

  openEditDialogue(post) {
    const dialogRef = this.dialog.open(EditPostComponentComponent, {
      width: '50%',
      height: 'auto',
      data: { pageValue: post }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogeValue = result;
      console.log('The dialog was closed', result);
    });
  }
}
