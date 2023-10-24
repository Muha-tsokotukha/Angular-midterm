import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private mockUsers = [
    {
      id: 1,
      name: 'Mukhit Nassyrov',
      email: 'm_nasyrov@kbtu.kz',
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user2@example.com',
    },
  ];

  getUsers() {
    return this.mockUsers;
  }
}
