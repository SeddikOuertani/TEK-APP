import { Component, Input, OnInit } from '@angular/core';
import { faUser, faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LikeService } from 'src/app/services/like.service';
import { SharingService } from 'src/app/services/sharing.service';
import { Like } from 'src/models/like';
import { toArray } from 'rxjs';

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

  @Input() idPost !: any;
  @Input() postUserPfp ?: string;
  @Input() postUserName ? : string;
  @Input() postUserId !: any;

  currentUser : any;
  user ? : any;
  post ? : any;
  media ? : any;
  likes : Like[] = [];
  
  likesCount !: number;

  currentUserLikeFound = false;
  
  constructor(
    private postService : PostService,
    private userService : UserService,
    private likeService : LikeService,
    private sharingService : SharingService) { }

  ngOnInit() : void  {

    //get Current user ID
    this.currentUser = this.sharingService.getUserSettings()
    console.log(this.currentUser)
    console.log(this.idPost)

    //get post Creator info
    this.getPostUser()
    
    //get post info
    this.getPost();
    
    //get post likes
    this.getLikes()
  }

  getPost(){
 
    //getting post
    this.postService.getPost(this.idPost).subscribe({
      next : (res) => {

        //loading post body from res
        this.post = res

        //loading media if it exists
        this.media = res?.media? this.base64ToPic(res?.media) : undefined;
      },
      error : (err) => {
        console.log("Error getting Post !"+this.idPost)
        console.log(err)
      }
    })
  }

  //getting user data with userId passed in properties
  getPostUser(){
    this.userService.getUser(this.postUserId).subscribe({
      next : (res) => {
        this.user = res
      },
      error : (err) => {
        console.log("Error getting user for post : "+this.idPost)
        console.log(err)
      }
    })
  }

  getLikes(){
    this.likes = []
    this.likeService.getLikesByParentId(this.idPost).subscribe({
      next : (res) => {
        let likes = res
        Object.values(likes).forEach((like : any) => this.likes.push(new Like(like._id,like.userId,like.parentId)))
        console.log(this.likes)
        this.likesCount = this.likes.length
      },
      error : (err) => {
        console.log(err)
      }
    })
  }

  addOrDeleteLike(event : any){
    console.log("like pressed")
    this.likeService.createOrDeleteLike(this.currentUser._id, this.idPost).subscribe({
      next : (res) => {
        console.log("like added successfully")
        this.getLikes()
      },
      error : (err) => {
        console.log("error with adding like")
      }
    })
  }
  
  addComment(event : any){
    // this.likeService.createLike(this.currentUser._id, this.idPost);  
    console.log("comment pressed")
  }

  addShare(event : any){
    // this.likeService.createLike(this.currentUser._id, this.idPost);  
    console.log("share pressed")
  }


  
// Utils functions

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
