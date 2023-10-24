import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  newPost = {
    title: '',
    description: '',
  };
  isAddOpen: boolean = false;
  myPosts = [
    {
      id: 1,
      title: 'Angular VS React VS Vue',
      description: 'lorum lorumlorumlorumlorumlorum lorum',
      comments: ['React is best', 'its alright'],
      likes: 0,
    },
    {
      id: 2,
      title: 'redux toolkit guide',
      description: 'lorum lorumlorumlorumlorumlorum lorum to this that',
      comments: ['use react-query '],
      likes: 0,
    },
  ];

  onSave() {
    if (this.newPost.title && this.newPost.description) {
      const newPostId = this.myPosts.length + 1;

      const post = {
        id: newPostId,
        title: this.newPost.title,
        description: this.newPost.description,
        comments: [],
        likes: 0,
      };
      this.myPosts.push(post);

      this.newPost.title = '';
      this.newPost.description = '';
      this.isAddOpen = false;
    }
  }

  onToggle() {
    this.isAddOpen = !this.isAddOpen;
  }
}
