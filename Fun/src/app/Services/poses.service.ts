import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:3033/poses/';

@Injectable({
  providedIn: 'root'
})
export class PosesService {
  
  constructor(private http: HttpClient) { }

  getPoses(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'json' });
  }
  getPosesById(id:any): Observable<any> {
    return this.http.get(API_URL+id, { responseType: 'json' });
  }


}
