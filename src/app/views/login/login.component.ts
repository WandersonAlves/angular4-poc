import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login-view',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  // NOTE: Private props
  email: String;
  pass: String;

  constructor(private loginService: LoginService, private router: Router) { }

  private loginSuccess = (result) => {
    console.log(result.data);
    this.router.navigate(['main']);
  };

  private loginFailure = (result) => {
    console.log(result);
  };

  // NOTE: Form Submit function
  doLogin() {
    this.loginService.doLogin(this.email, this.pass).then(this.loginSuccess, this.loginFailure);
  }

}
