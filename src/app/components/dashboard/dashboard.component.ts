import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/service/data-share.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText: string="";

  constructor(
    changeDetectorRef: ChangeDetectorRef,
     media: MediaMatcher,
     private snackBar: MatSnackBar, 
     private router: Router,
     private dataService:DataShareService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener); }

  ngOnInit(): void {
  }

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  onSearchChange(searchValue: string): void {
    this.searchText=searchValue;
    console.log(searchValue)
    this.dataService.updateSearchText(searchValue);
  }
}
