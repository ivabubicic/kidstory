import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { StoryComponent } from './pages/story/story.component';
import {NzBadgeModule, NzButtonModule, NzFormModule, NzIconModule, NzInputModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { en_US, NZ_I18N, NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzCardModule } from 'ng-zorro-antd/card';
import {PlyrModule} from 'ngx-plyr';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { RegisterComponent } from './pages/register/register.component';

import {environment} from '../environments/environment';
import {AngularFireModule} from "@angular/fire";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StoryComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    BrowserAnimationsModule,
    NzCardModule,
    HttpClientModule,
    NoopAnimationsModule,
    NzI18nModule, NzBadgeModule, PlyrModule,
    NzDividerModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule { }
