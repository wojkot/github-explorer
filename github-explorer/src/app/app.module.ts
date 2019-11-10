import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReposListComponent } from './repos-list/repos-list.component';
import { ReposListItemComponent } from './repos-list/repos-list-item/repos-list-item.component';
import { CommentItemComponent } from './repos-list/repos-list-item/comment-item/comment-item.component';
import { BranchItemComponent } from './repos-list/repos-list-item/branch-item/branch-item.component';
import { CommitItemComponent } from './repos-list/repos-list-item/commit-item/commit-item.component';
import { MaterialModule } from './common/material.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReposListComponent,
    ReposListItemComponent,
    CommentItemComponent,
    BranchItemComponent,
    CommitItemComponent,
    LandingComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
