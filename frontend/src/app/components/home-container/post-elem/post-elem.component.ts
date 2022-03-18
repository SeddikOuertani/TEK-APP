import { Component, Input, OnInit } from '@angular/core';
import { faUser, faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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

  @Input() postId !: any;
  @Input() postUserPfp ?: string;
  @Input() postUserName ? : string;
  @Input() postUserId !: any;

  user ? : any;
  post ? : any;
  media ? : any;
  
  constructor(
    private postService : PostService,
    private userService : UserService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit() : void {
    this.getPostUser(this.postUserId);
    this.getPost(this.postId);
  }

  getPost(postId : any){
 
    //getting post
    this.postService.getPost(postId).subscribe({
      next : async (res) => {

        //loading post body from res
        this.post = res

        //loading media if it exists
        this.media = await res?.media? this.base64ToPic(res?.media) : undefined;
      },
      error : (err) => {
        console.log("Error getting Post !"+this.postId)
        console.log(err)
      }
    })
  }

  //getting user data with userId passed in properties
  getPostUser(userId : any){
    this.userService.getUser(userId).subscribe({
      next : (res) => {
        this.user = res
      },
      error : (err) => {
        console.log("Error getting user for post : "+this.postId)
        console.log(err)
      }
    })
  }


  //converting pic buffer data into base64 string
  bufferToBase64(arr : any) {
    
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
       arr.reduce((data : any, byte : any) => data + String.fromCharCode(byte), '')
    );
  }

  //converting base64 strings of the pics buffer data into pics data
  base64ToPic(media: any){
    return `data:${media.mimetype};base64,${this.bufferToBase64(media.buffer.data)}`;
  }


}
