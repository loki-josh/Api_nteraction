import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient:HttpClient) { }

  getuserdata(){
    let url = environment.apiDomain + 'api/users?page=1'
    return this.httpclient.get(url)
  }
  getuserdata2(){
    let url2 = environment.apiDomain + 'api/users?page=2'
    return this.httpclient.get(url2)
  }
}
