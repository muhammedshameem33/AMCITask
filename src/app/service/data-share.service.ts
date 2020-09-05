import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private searchText=new BehaviorSubject<string>('');
  public shareSearchText=this.searchText.asObservable();
  constructor() { }

  updateSearchText(value){
    this.searchText.next(value);
  }
}
