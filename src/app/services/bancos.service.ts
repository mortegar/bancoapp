import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BancosService {
  constructor(private http: HttpClient) { }
  getBancos(url: string) {
    return this.http.get(url);
  }
}
