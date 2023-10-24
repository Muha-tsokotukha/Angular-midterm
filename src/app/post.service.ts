import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private generateRandomPosts() {
    const mockPosts = [
      {
        id: 1,
        title: 'Post 1',
        description: 'This is the first post.',
        likes: 15,
      },
      {
        id: 2,
        title: 'Post 2',
        description: 'This is the second post.',
        likes: 30,
      },
    ];

    for (let i = 1; i <= 10; i++) {
      const post = {
        id: i,
        title: `Post ${i}`,
        description: `This is a randomly generated post with ID ${i}`,
        comments: [],
        likes: Math.floor(Math.random() * 100), // Random likes count
      };
      mockPosts.push(post);
    }

    return mockPosts;
  }

  getPosts() {
    return this.generateRandomPosts();
  }
}
