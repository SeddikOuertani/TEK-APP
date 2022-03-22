import { Component, OnInit } from '@angular/core';
import { faTrophy, faEdit, faPlusCircle, faTasks, faUsers, faChessRook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  editIcon = faEdit;
  addIcon = faPlusCircle;
  featIcon = faTrophy;
  eventIcon = faTasks;
  groupIcon = faUsers;
  clubIcon = faChessRook;
  
  friendsNumber = 300;  

  pfp : any;
  pfpChosen = false;
  pfpSumbitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  choosePfp(event : any){
    if(event.target.value){
      this.pfp = <File>event.target.files[0];
      this.pfpChosen = true
    }
  }

  submitPfp(){
    let fd = new FormData()
    this.pfpSumbitted = true;
    if(this.pfp){
      fd.append("pfp", this.pfp, this.pfp.name)
    }
  }

}
