import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { VideosComponent } from './components/videos/videos.component';
import { BooksComponent } from './components/books/books.component';
import { PhotoComponent } from './components/photo/photo.component';
import {DocumentComponent} from './components/document/document.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPanelComponent,
    LoginPageComponent,
    AllItemsComponent,
    VideosComponent,
    BooksComponent,
    PhotoComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
