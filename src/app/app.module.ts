import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service';
import { PostsComponent } from './components/posts/posts.component';
import { DataShareService } from './service/data-share.service';
import { EditPostComponentComponent } from './components/edit-post-component/edit-post-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostsComponent,
    EditPostComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents:[EditPostComponentComponent],
  providers: [HttpService,
  DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
