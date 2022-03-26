import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl:string = 'http://localhost:4000/api/comments'; 
  headers = new HttpHeaders({Accept: 'application/json'})

  constructor(private http : HttpClient) { }

  getCommentsByParentId(idParent : any){
    return  this.http.get(`${this.baseUrl}/read/byParentId/${idParent}`, {headers : this.headers});
  }

  postComment(commentBody : any){
    return  this.http.post(`${this.baseUrl}/create`, commentBody);
  }
  
}
