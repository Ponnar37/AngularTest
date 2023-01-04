import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ShomeService {

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  constructor(private http: HttpClient) { }
  endpoint = 'https://us-central1-app-verstrade.cloudfunctions.net/vtApiDevServer/api/v1/utilities';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

 getProducts(): Observable<any> {
  return this.http.get(this.endpoint).pipe(
    map(this.extractData));
}
  
  get(){
    console.log(this.getProducts())
  return this.getProducts();
  }


  getServerTime(): Observable<any> {
    return this.http.get(this.endpoint+"/server-time").pipe(
      map(this.extractData));
  }
    
  
}
