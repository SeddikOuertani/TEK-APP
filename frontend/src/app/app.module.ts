import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthFirstComponent } from './components/auth/auth-first/auth-first.component';
import { AuthSecondComponent } from './components/auth/auth-second/auth-second.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { AuthWrapperComponent } from './components/auth/auth-wrapper/auth-wrapper.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { NavigationBarComponent } from './components/home-container/navigation-bar/navigation-bar.component';
import { MainComponent } from './components/home-container/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ImageInputComponent } from './components/UI/image-input/image-input.component';
import { AsideComponent } from './components/home-container/aside/aside.component';
import { PostFormComponent } from './components/home-container/post-form/post-form.component';
import { PostElemComponent } from './components/home-container/post-elem/post-elem.component';
import { ChatListComponent } from './components/home-container/chat-list/chat-list.component';
import { CommentFormComponent } from './components/home-container/comment-form/comment-form.component';
import { CommentListComponent } from './components/home-container/comment-list/comment-list.component';
import { CommentElemComponent } from './components/home-container/comment-elem/comment-elem.component';
import { PostsListComponent } from './components/home-container/posts-list/posts-list.component';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { HeaderComponent } from './components/profile/header/header.component';
import { GallerySnippetComponent } from './components/profile/profile-aside/gallery-snippet/gallery-snippet.component';
import { FriendsSnippetComponent } from './components/profile//profile-aside/friends-snippet/friends-snippet.component';
import { ProfileAsideComponent } from './components/profile/profile-aside/profile-aside.component';
import { GalleryService } from './services/gallery-service.service';
import { GroupsListComponent } from './components/home-container/groups-list/groups-list.component';
import { EventsListComponent } from './components/home-container/events-list/events-list.component';
import { ClubsListComponent } from './components/home-container/clubs-list/clubs-list.component';
import { FeatsListComponent } from './components/home-container/feats-list/feats-list.component';
import { GroupElemComponent } from './components/home-container/group-elem/group-elem.component';
import { EventElemComponent } from './components/home-container/event-elem/event-elem.component';
import { PostReactionRowComponent } from './components/UI/post-reaction-row/post-reaction-row.component';
import { HoverDirDirective } from './directives/hover-dir.directive';
import { ClubElemComponent } from './components/home-container/club-elem/club-elem.component';
import { ChatElemComponent } from './components/home-container/chat-elem/chat-elem.component';
import { TimePipe } from './pipes/time.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDefaultPfpPipe } from './pipes/user-default-pfp.pipe';
import { PostMediaPipe } from './pipes/post-media.pipe';
import { ChatListPipePipe } from './pipes/chat-list-pipe.pipe';

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
    UserDefaultPfpPipe,
    PostMediaPipe,
    ChatListPipePipe,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
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
