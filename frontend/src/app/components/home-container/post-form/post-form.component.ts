import { Component, OnInit, NgZone } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postText = ""
  userId : any;
  postImage : any;

  constructor(
    private postService: PostService,
    private router : Router,
    private sharingService : SharingService,
    private ngZone : NgZone) { }

  ngOnInit(): void {
    console.log("ngOnInit post-Form")

    console.log(new Date())
  }

  addPost(){
    const post = this.constructPost();

    this.postService.createPost(post).subscribe(
      {
        next : (res) => {
          console.log('Post successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/home'))
        },
        error : (error) => {
          console.log(error);
        }
    });
  }

  private constructPost(){
    let user= this.sharingService.getUserSettings()
    let newDate : Date  = new Date();
    let post = {
      text : this.postText, 
      idUser : user._id, 
      creationDate : newDate,
      userName : user.name+" "+user.lastName,
      userPfp : user.imgUrl,
      media : this.postImage
    }
    return post;
  }
}
