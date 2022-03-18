import { Component, OnInit, NgZone, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postText = ""
  idUser : any;
  postImage : any;
  imageChosen : boolean = false;
  submitted : boolean = false;

  @Output() postSumbitted = new EventEmitter<boolean>();

  postForm = new FormGroup({
    text : new FormControl(''),
  });

  constructor(
    private postService: PostService,
    private router : Router,
    private sharingService : SharingService,
    private ngZone : NgZone,) { 
    }

  ngOnInit(): void {
    this.idUser = this.sharingService.getUserSettings()._id
  }

  addPost(){

    this.submitted = true;

    let fd = new FormData();
    fd.append("text",this.postForm.controls['text'].value)
    fd.append("idUser",this.idUser);
    fd.append("creationDate",new Date().toString());

    if(this.postImage){
      fd.append("media",this.postImage,this.postImage.name);
    }
  
    this.postService.createPost(fd).subscribe(
      {
        next : (res) => {
          console.log('Post successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/home'))

          //notifying parent that post is sumbitted
          this.postSumbitted.emit(this.submitted)

          //resetting Form fields
          
          this.submitted = false;
          this.imageChosen = false;
          this.postImage = undefined;
          this.postText = "";
        },
        error : (error) => {
          console.log(error);
        }
    });
  }

  fileChosen(event : any){
    if(event.target.value){
      this.postImage = <File>event.target.files[0];
      this.imageChosen = true
    }
  }

  
}
