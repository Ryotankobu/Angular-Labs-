import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  ngOnInit(): void {
    const userData = sessionStorage.getItem('current_user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      window.location.href = '/login';
    }
  }

  saveProfile() {
    sessionStorage.setItem('currentUser', JSON.stringify(this.user));
    alert('Profile updated successfully!');
  }
}
