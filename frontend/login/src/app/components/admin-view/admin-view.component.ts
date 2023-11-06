import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
})
export class AdminViewComponent {
  users: User[];

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.users = [];
  }

  ngOnInit() {
    this.userService.list().subscribe({
      next: (res: any) => {
        this.users = res;
      },
      error: (err: any) => {},
    });
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }

  deleteUser(user: User) {
    this.userService.delete(user).subscribe({
      next: (res: any) => {
        this.snackBar.open('Usuario eliminado con éxito', 'Cerrar', {
          duration: 2000,
        });
        window.location.reload();
      },
      error: (err: any) => {
        if (err.status === 401) {
          const errorMessage = err.error.message;
          this.snackBar.open(errorMessage, 'Cerrar', {
            duration: 2000,
          });
        }
      },
    });
  }

  redirectEditView(user: User) {
    this.router.navigate(['/editar', user._id]);
  }
}
