import { Component, OnInit } from '@angular/core';
import { Observable, toArray } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts : any;

  constructor(private postService : PostService) { }

  readPosts(){
    this.postService.getPosts().subscribe(
      {
        next: (res)=>{
          this.posts = res
        },
        error: (err)=>{

        }
      }
    )
  }

  ngOnInit(): void {
    this.readPosts();
  }
}
