import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/userInterface';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css'],
})
export class RegisterViewComponent {
  usernameControl = new FormControl();
  passwordControl = new FormControl();
  rolControl = new FormControl();

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user: User = {
      username: this.usernameControl.value,
      password: this.passwordControl.value,
      rol: this.rolControl.value,
    };

    this.authService.register(user).subscribe({
      next: (res) => {
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
