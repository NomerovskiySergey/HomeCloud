import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { VideosComponent } from './components/videos/videos.component';
import { BooksComponent } from './components/books/books.component';
import { PhotoComponent } from './components/photo/photo.component';
import { DocumentComponent } from './components/document/document.component';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';



const routes: Routes = [
  { path: 'allcontent', component: AllItemsComponent},
  { path: 'book', component: BooksComponent},
  { path: 'video', component: VideosComponent},
  { path: 'photo', component: PhotoComponent},
  { path: 'document', component: DocumentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
