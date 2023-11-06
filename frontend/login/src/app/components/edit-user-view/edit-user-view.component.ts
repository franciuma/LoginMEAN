import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user-view',
  templateUrl: './edit-user-view.component.html',
  styleUrls: ['./edit-user-view.component.css'],
})
export class EditUserViewComponent {
  usernameControl = new FormControl();
  passwordControl = new FormControl();
  rolControl = new FormControl();
  user: User;

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.user = new User('', '');
  }

  ngOnInit() {
    let userId = '';

    this.route.params.subscribe((params) => {
      userId = params['userId'];
    });

    this.userService.get(userId).subscribe({
      next: (user: any) => {
        this.user = user;
      },
      error: (err: any) => {
        this.snackBar.open(err, 'Cerrar', {
          duration: 1500,
        });
      },
    });
  }

  editUser() {
    if (this.usernameControl.value) {
      this.user.username = this.usernameControl.value;
    }

    if (this.passwordControl.value) {
      this.user.password = this.passwordControl.value;
    }

    if (this.rolControl.value) {
      this.user.role = this.rolControl.value;
    }

    this.userService.update(this.user).subscribe({
      next: (user: any) => {
        this.router.navigate(['/admin']);
        this.snackBar.open('Usuario actualizado con éxito', 'Cerrar', {
          duration: 1500,
        });
      },
      error: (err: any) => {
        const errorStatus = err.status;
        const errorMessage = err.error.message;
        if (errorStatus === 500) {
          this.snackBar.open(errorMessage, 'Cerrar', {
            duration: 1500,
          });
        }
      },
    });
  }
}
