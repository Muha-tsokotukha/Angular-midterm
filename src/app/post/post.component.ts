import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post: any;
  newComment = '';

  onLike() {
    this.post.likes += 1;
  }

  onAddComment() {
    if (this.newComment.trim() !== '') {
      this.post.comments.push(this.newComment);
      this.newComment = ''; // Reset the input field
    }
  }
}
