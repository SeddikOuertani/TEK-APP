import { Component, OnInit } from '@angular/core';
import { faComment, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-reaction-row',
  templateUrl: './post-reaction-row.component.html',
  styleUrls: ['./post-reaction-row.component.css']
})
export class PostReactionRowComponent implements OnInit {


  likeIcon = faThumbsUp;
  commentIcon = faComment;
  shareIcon = faShare;

  constructor() { }

  ngOnInit(): void {
  }

}
