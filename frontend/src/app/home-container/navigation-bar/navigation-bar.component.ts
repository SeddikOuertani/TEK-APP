import { Component, OnInit } from '@angular/core';
import { faBars, faSearch, faBell, faUser, faComment} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  menuIconSize = 50;

  searchIcon = faSearch
  menuIcon = faBars;
  profileIcon = faUser;
  notificationIcon = faBell;
  chatsIcon = faComment;

  searchPalceholder = "Search something ..."

  constructor() { }

  ngOnInit(): void {
  }

}
