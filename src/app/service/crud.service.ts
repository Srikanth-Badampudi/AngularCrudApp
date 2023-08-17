import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userModel } from '../model/task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  data: any = [];
  ModelActive: boolean = false;

  serviceURL: string = 'http://localhost:3000/contacts/';
  constructor(private http: HttpClient) {}

  addUser(body: object): Observable<userModel> {
    return this.http.post<userModel>(this.serviceURL, body);
  }

  getAllUsers(): Observable<userModel> {
    return this.http.get<userModel>(this.serviceURL);
  }

  getUser(id: number): Observable<userModel> {
    return this.http.get<userModel>(this.serviceURL + id);
  }

  updateUser(id: any, user: any) {
    return this.http.put(this.serviceURL + id, user);
  }

  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(this.serviceURL + id);
  }
}
