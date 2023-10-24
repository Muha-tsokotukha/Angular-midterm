import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, PostComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'home', component: HomeComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
