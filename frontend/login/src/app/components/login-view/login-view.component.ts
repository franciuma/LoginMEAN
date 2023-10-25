import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
//Form field angular material
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent {
  usernameControl = new FormControl();
  passwordControl = new FormControl();

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const user = {
      username: this.usernameControl.value,
      password: this.passwordControl.value,
    };

    this.authService.login(user).subscribe({
      next: (res) => {
        console.log(res);
        //,
        //this.router.navigate(['/exito'])
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
