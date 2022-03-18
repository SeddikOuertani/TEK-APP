import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnChanges {

  @Input() refresh = "";
  @Output() resetRefresh = new EventEmitter()

  posts : any;
  user : any;

  constructor(
    private postService : PostService,
    private sharingService : SharingService  ) {
     }

  ngOnInit(): void {
    this.user = this.sharingService.getUserSettings();
    this.readPosts();
  }

  ngOnChanges(changes: SimpleChanges ): void {
    let refreshChange: SimpleChange = changes['refresh']; 
    if(refreshChange.currentValue != refreshChange.previousValue){
      this.readPosts();
      this.refresh = ""
    }
  }
  
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

  resRef(){
    this.resetRefresh.emit(true);
  }


}
