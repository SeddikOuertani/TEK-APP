import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilePicService {

  baseUrl = 'https://localhost:4200/api/profilePic';
  headers = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type' : 'multipart/form-data',
  })

  constructor(private http : HttpClient) {}

  addProfilePic(){
    return this.http.post(this.baseUrl, {headers : this.headers});
  }

  getProfilePic(idUser : any){
    return this.http.get(`${this.baseUrl}/read/${idUser}`, {headers:this.headers});
  }

}
