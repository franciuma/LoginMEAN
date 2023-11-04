import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent {
  constructor(private router: Router) {}

  redirectLogin() {
    this.router.navigate(['/login']);
  }
}
