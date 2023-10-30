import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/userInterface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css'],
})
export class RegisterViewComponent {
  usernameControl = new FormControl();
  passwordControl = new FormControl();
  rolControl = new FormControl();

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  register() {
    const user: User = {
      username: this.usernameControl.value,
      password: this.passwordControl.value,
      role: this.rolControl.value,
    };

    this.authService.register(user).subscribe({
      next: (res) => {
        this.router.navigate(['login']);
        this.snackBar.open('Registrado/a con éxito', 'Cerrar', {
          duration: 1500,
        });
      },
      error: (err) => {
        const errorStatus = err.status;
        const errorMessage = err.error.message;
        if (errorStatus === 409) {
          this.snackBar.open(errorMessage, 'Cerrar', {
            duration: 1500,
          });
        }
      },
    });
  }
}
