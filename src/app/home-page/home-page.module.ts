import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedPostsModule } from '../shared-posts/shared-posts.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedPostsModule
  ]
})
export class HomePageModule { }
