import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { AuthComponent } from './auth/auth.component';
import { AuthFirstComponent } from './auth/auth-first/auth-first.component';
import { AuthSecondComponent } from './auth/auth-second/auth-second.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { AuthWrapperComponent } from './auth/auth-wrapper/auth-wrapper.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { NavigationBarComponent } from './home-container/navigation-bar/navigation-bar.component';
import { MainComponent } from './home-container/main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ImageInputComponent } from './UI/image-input/image-input.component';
import { AsideComponent } from './home-container/aside/aside.component';
import { PostFormComponent } from './home-container/post-form/post-form.component';
import { PostElemComponent } from './home-container/post-elem/post-elem.component';
import { ChatListComponent } from './home-container/chat-list/chat-list.component';
import { CommentFormComponent } from './home-container/comment-form/comment-form.component';
import { CommentListComponent } from './home-container/comment-list/comment-list.component';
import { CommentElemComponent } from './home-container/comment-elem/comment-elem.component';
import { PostsListComponent } from './home-container/posts-list/posts-list.component';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { HeaderComponent } from './profile/header/header.component';
import { GallerySnippetComponent } from './profile/profile-aside/gallery-snippet/gallery-snippet.component';
import { FriendsSnippetComponent } from './profile//profile-aside/friends-snippet/friends-snippet.component';
import { ProfileAsideComponent } from './profile/profile-aside/profile-aside.component';
import { GalleryService } from './services/gallery-service.service';
import { GroupsListComponent } from './home-container/groups-list/groups-list.component';
import { EventsListComponent } from './home-container/events-list/events-list.component';
import { ClubsListComponent } from './home-container/clubs-list/clubs-list.component';
import { FeatsListComponent } from './home-container/feats-list/feats-list.component';
import { GroupElemComponent } from './home-container/group-elem/group-elem.component';
import { EventElemComponent } from './home-container/event-elem/event-elem.component';
import { PostReactionRowComponent } from './post-reaction-row/post-reaction-row.component';
import { HoverDirDirective } from './directives/hover-dir.directive';
import { ClubElemComponent } from './home-container/club-elem/club-elem.component';
import { ChatElemComponent } from './home-container/chat-elem/chat-elem.component';
import { TimePipe } from './pipes/time.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    AuthComponent,
    AuthFirstComponent,
    AuthSecondComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AuthWrapperComponent,
    HomeContainerComponent,
    NavigationBarComponent,
    MainComponent,
    ProfileComponent,
    ImageInputComponent,
    AsideComponent,
    PostFormComponent,
    PostElemComponent,
    ChatListComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentElemComponent,
    PostsListComponent,
    HeaderComponent,
    GallerySnippetComponent,
    FriendsSnippetComponent,
    ProfileAsideComponent,
    GroupsListComponent,
    EventsListComponent,
    ClubsListComponent,
    FeatsListComponent,
    GroupElemComponent,
    EventElemComponent,
    PostReactionRowComponent,
    HoverDirDirective,
    ClubElemComponent,
    ChatElemComponent,
    TimePipe,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [
    PostService,
    UserService,
    GalleryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
