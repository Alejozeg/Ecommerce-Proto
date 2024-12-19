import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {
  private appUrl = environment.apiUrl
  private http = inject(HttpClient)
  constructor() { }

  login(data:any) {
    return this.http.post(this.appUrl+"/user/login",data)
  }
}
