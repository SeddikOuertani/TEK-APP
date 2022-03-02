import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { MainComponent } from './home-container/main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatListComponent } from './home-container/chat-list/chat-list.component';
import { EventsListComponent } from './home-container/events-list/events-list.component';
import { FeatsListComponent } from './home-container/feats-list/feats-list.component';
import { ClubsListComponent } from './home-container/clubs-list/clubs-list.component';
import { GroupsListComponent } from './home-container/groups-list/groups-list.component';

const routes: Routes = [
    { path: 'authentication', component: AuthComponent },
    { path: '',   redirectTo: '/authentication', pathMatch: 'full'},
    { 
        path : 'home', 
        component : HomeContainerComponent,
        children : [
            {
                path : '',
                redirectTo: '/home/main',
                pathMatch : 'full'
            },
            {
                path : 'main',
                component : MainComponent,
            },
            {
                path : 'events',
                component : EventsListComponent
            },
            {
                path : 'feats',
                component : FeatsListComponent
            },
            {
                path : 'clubs',
                component : ClubsListComponent
            },
            {
                path : 'groups',
                component : GroupsListComponent
            }
        ]},  
    { path : 'profile', component : ProfileComponent},
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
})
export class AppRoutingModule {}