import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:3033/api';

@Injectable({
  providedIn: 'root'
})
export class PosesService {
  
  constructor(private http: HttpClient) { }

  getPoses(): Observable<any> {
    return this.http.get(API_URL + '/poses', { responseType: 'json' });
  }
  getPosesById(id:any): Observable<any> {
    return this.http.get(API_URL+'/poses'+ id, { responseType: 'json' });
  }


}
