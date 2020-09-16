import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public generatorCatpcha(id){
    let url = "http://localhost:3000/api/captcha";
    return this.httpClient.get(url+'/'+id);
  }
}