import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent {
  feedPosts: any[] = [];

  constructor() {
    this.generateRandomPosts();
  }

  likePost(post: any) {
    post.likes += 1;
  }

  generateRandomPosts() {
    for (let i = 1; i <= 10; i++) {
      const post = {
        id: i,
        title: `Post ${i}`,
        description: `This is a randomly generated post with ID ${i}`,
        comments: [],
        likes: Math.floor(Math.random() * 100), // Random likes count
      };
      this.feedPosts.push(post);
    }
  }
}
