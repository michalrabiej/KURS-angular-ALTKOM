import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedPostsModule } from '../shared-posts/shared-posts.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    SharedPostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
