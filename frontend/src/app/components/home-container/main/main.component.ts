import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  refresh = ""

  constructor() { }

  ngOnInit(): void {

  }

  refreshPostList(event : any){
    this.refresh = "ref"
  }

  resRef(event : any){
    this.refresh = ""
  }
}