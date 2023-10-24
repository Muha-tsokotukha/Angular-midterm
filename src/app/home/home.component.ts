import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  myPosts = [
    {
      id: 1,
      title: 'Angular VS React VS Vue',
      description: 'lorum lorumlorumlorumlorumlorum lorum',
      comments: ['React is best', 'its alright'],
    },
    {
      id: 2,
      title: 'redux toolkit guide',
      description: 'lorum lorumlorumlorumlorumlorum lorum to this that',
      comments: ['use react-query '],
    },
  ];
}
