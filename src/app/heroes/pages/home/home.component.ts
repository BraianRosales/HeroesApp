import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private _authService: AuthService) {}

  public userName: string = this._authService.getUser().usuario


  logout() {
    sessionStorage.clear()
    this.router.navigate(['/auth']);
  }
}
