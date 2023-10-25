import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {

  profile = {
    username: '',
    password: ''
  }

  constructor(private authService: AuthService,
              private router: Router
              ) {}

  login() {
    this.authService.login(this.profile)
      .subscribe({
        next: (res) => {
          console.log(res)
          //,
          //this.router.navigate(['/exito'])
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

}
