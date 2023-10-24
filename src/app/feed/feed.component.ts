import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent {
  feedPosts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.feedPosts = this.postService.getPosts();
  }

  likePost(post: any) {
    post.likes += 1;
  }
}
