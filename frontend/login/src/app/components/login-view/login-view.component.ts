import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/userInterface';
//Form field angular material
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent {
  usernameControl = new FormControl();
  passwordControl = new FormControl();

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login() {
    const user: User = {
      username: this.usernameControl.value,
      password: this.passwordControl.value,
    };

    this.authService.login(user).subscribe({
      next: (res: any) => {
        const role = res.role;

        if (role === 'defaultUser') {
          this.router.navigate(['/principal']);
        } else {
          this.router.navigate(['/admin']);
        }
      },
      error: (err) => {
        if (err.status === 401) {
          const errorMessage = err.error.message;
          this.snackBar.open(errorMessage, 'Cerrar', {
            duration: 2000,
          });
        }
      },
    });
  }

  navigateToRegisterView() {
    this.router.navigate(['/registro']);
  }
}
