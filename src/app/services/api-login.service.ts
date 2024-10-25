import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  private http = inject(HttpClient)
  constructor() { }

  login(data:any) {
    return this.http.post("http://localhost:3000/api/user/login",data)
  }
}
