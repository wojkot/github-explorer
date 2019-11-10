import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReposListComponent } from './repos-list/repos-list.component';
import { ReposListItemComponent } from './repos-list/repos-list-item/repos-list-item.component';
import {MatCardModule} from '@angular/material/card';
import { CommentItemComponent } from './repos-list/repos-list-item/comment-item/comment-item.component';
import { BranchItemComponent } from './repos-list/repos-list-item/branch-item/branch-item.component';
import { CommitItemComponent } from './repos-list/repos-list-item/commit-item/commit-item.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    ReposListComponent,
    ReposListItemComponent,
    CommentItemComponent,
    BranchItemComponent,
    CommitItemComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
