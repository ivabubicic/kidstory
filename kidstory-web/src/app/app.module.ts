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
import { PlyrModule } from 'ngx-plyr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StoryComponent,
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
    PlyrModule,
    NoopAnimationsModule,
    NzI18nModule, NzBadgeModule
  ],
  providers: [ { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
