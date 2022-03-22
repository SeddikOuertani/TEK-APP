import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  refresh = ""
  posts = []

  constructor(
    private postService : PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  refreshPostList(event : any){
    this.refresh = "ref"
  }

  resRef(event : any){
    this.refresh = ""
  }

  getPosts(){
    this.postService.getPosts().subscribe({
      next : (res : any) => {
        this.posts = res
      },
      error : (err : any) => {
        console.log("error getting posts");
        console.log(err)
      }
    })
  }
}