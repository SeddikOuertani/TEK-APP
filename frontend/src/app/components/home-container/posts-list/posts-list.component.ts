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
  currentUser : any;

  constructor(
    private postService : PostService,
    private sharingService : SharingService  ) {
     }

  ngOnInit(): void {
    this.currentUser = this.sharingService.getUserSettings();
    this.readPosts();
  }

  ngOnChanges(changes: SimpleChanges ): void {
    let refreshChange: SimpleChange = changes['refresh']; 
    if(refreshChange.currentValue != refreshChange.previousValue){
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
