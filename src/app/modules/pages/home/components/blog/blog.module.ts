import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './components/start/start.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { CommentsComponent } from './components/comments/comments.component';



@NgModule({
  declarations: [StartComponent, BlogDetailsComponent, CommentsComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
