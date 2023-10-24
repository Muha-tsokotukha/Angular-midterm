import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { FeedComponent } from './feed/feed.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PostComponent,
    FeedComponent,
    AboutUsComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'feed', component: FeedComponent },
      { path: 'about-us', component: AboutUsComponent },
    ]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
