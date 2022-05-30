import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  public userName: string = environment.userName;
  public userPass: string = environment.userPass;
  public userNameInput: string = '';
  public userPassInput: string = '';
  public alert: boolean = false;

  login() {
    console.log('validacion', this.validate());

    if (this.validate()) {
      this.authService.user().subscribe((user) => {
        if (user.id) {
          this.router.navigate(['heroes/listado']);
        }
      });
    } else {
      this.alert = true;
    }
  }

  validate(): boolean {
    return (
      this.userPass === this.userPassInput &&
      this.userName.toLocaleLowerCase() ===
        this.userNameInput.toLocaleLowerCase()
    );
  }
}
