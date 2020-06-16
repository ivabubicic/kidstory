import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { StoryComponent } from './pages/story/story.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'story-component', component: StoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
