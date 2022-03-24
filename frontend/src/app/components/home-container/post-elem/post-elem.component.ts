import { Component, Input, OnInit } from '@angular/core';
import { faUser, faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { LikeService } from 'src/app/services/like.service';
import { SharingService } from 'src/app/services/sharing.service';
import { Like } from 'src/models/like';
import { UtilsService } from 'src/app/services/utils.service';
import { ProfilePicService } from 'src/app/services/profile-pic.service';

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

  pfpPath : any = null

  currentUserLikeFound = false;
  
  constructor(
    private postService : PostService,
    private userService : UserService,
    private likeService : LikeService,
    private sharingService : SharingService,
    private utilService : UtilsService,
    private profilePicService : ProfilePicService) { }

  ngOnInit() : void  {

    //get Current user ID
    this.currentUser = this.sharingService.getUserSettings()

    //get post Creator info
    this.getPostUser()
    
    //get post info
    this.getPost();
    
    //get post likes
    this.getLikes()

    //get post user profile pic
    this.getPostUserProfilePic()
  }

  getPost(){
 
    //getting post
    this.postService.getPost(this.idPost).subscribe({
      next : (res) => {

        //loading post body from res
        this.post = res

        //loading media if it exists
        this.media = res?.media? this.utilService.base64ToPic(res?.media) : undefined;
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

  getPostUserProfilePic(){
    this.profilePicService.getProfilePic(this.postUserId).subscribe({
      next : (res : any) =>{
        this.pfpPath = this.utilService.base64ToPic(res?.pfp)
      },
      error : (err : any) => {
        console.log("error getting profile pic in post elem")
      }
    })
  }

  getLikes(){
    this.likes = []
    this.likeService.getLikesByParentId(this.idPost).subscribe({
      next : (res) => {
        let likes = res
        Object.values(likes).forEach((like : any) => this.likes.push(new Like(like._id,like.userId,like.parentId)))
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

}
