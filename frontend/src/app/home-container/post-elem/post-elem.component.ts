import { Component, Input, OnInit } from '@angular/core';
import { faUser, faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-elem',
  templateUrl: './post-elem.component.html',
  styleUrls: ['./post-elem.component.css']
})
export class PostElemComponent implements OnInit {

  likeIcon = faThumbsUp;
  commentIcon = faComment;
  shareIcon = faShare;

  personIcon = faUser;

  @Input() postText ?: string;
  @Input() postTime !: Date;
  @Input() postUserName ?: string;
  @Input() postUserPfp ?: string;

  constructor(
    private postService : PostService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

}
