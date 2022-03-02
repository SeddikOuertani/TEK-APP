import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  commentInputPlaceholder = "Make a comment ..."

  constructor() { }

  ngOnInit(): void {
  }

}
