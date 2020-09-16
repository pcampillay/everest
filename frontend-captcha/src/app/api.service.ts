import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public generatorCaptcha(id){
    let url = "http://localhost:3000/api/captcha";
    return this.httpClient.get(url+'/'+id);
  }

  public validCaptcha(obj){
    let url = "http://localhost:3000/api/captcha";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.httpClient.post(url, obj, httpOptions);

  }
}