import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  public get(url:string){
    return this.http.get(environment.baseUrl+url);
  }

  public post(url:string,data){
    return this.http.post(environment.baseUrl+url,data);
  }
  
  public delete(url:string){
    return this.http.delete(environment.baseUrl+url);
  }
  public put(url:string,data){
    return this.http.put(environment.baseUrl+url,data);
  }


}
