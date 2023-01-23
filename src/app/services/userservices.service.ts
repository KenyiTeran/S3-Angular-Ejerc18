import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  // Instancia de HTTPClient
  constructor(private http:HttpClient) { }
  
  // Definiendo la url de la api
  apiUser = environment.apiURL + 'todos/';

  // Métodos get para obtener datos de la ApiUsers

  getUserAll():Observable<Users[]>{
    return this.http.get<Users[]>(this.apiUser)
  }
}
