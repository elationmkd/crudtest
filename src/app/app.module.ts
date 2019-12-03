import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { RouterModule, Routes } from '@angular/router';
import { ViewMoreComponent } from './view-more/view-more.component';
import { ViewmoreDetailComponent } from './viewmore-detail/viewmore-detail.component';
import { PostService } from './services/post.service';
import {  Location  } from '@angular/common';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewMoreComponent,
    ViewmoreDetailComponent,
    UploadPictureComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
