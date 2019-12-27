import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from "./post/post.component";
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import { Post4Component } from "./post4/post4.component";
import { FormsModule } from "@angular/forms";
import { Post5Component } from './post5/post5.component';
import { Post6Component } from './post6/post6.component';
import { Post7Component } from './post7/post7.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Post3Component,
    Post4Component,
    Post5Component,
    Post6Component,
    Post7Component,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
