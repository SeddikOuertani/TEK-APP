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

  constructor() { }

  ngOnInit(): void {
  }

}
