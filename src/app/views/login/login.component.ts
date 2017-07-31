import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login-view',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  email: String;
  pass: String;

  constructor(private loginService: LoginService) { }

  private loginSuccess = (result) => {
    console.log(result.data);
  };

  private loginFailure = (result) => {
    console.log(result);
  };

  doLogin() {
    this.loginService.doLogin(this.email, this.pass).then(this.loginSuccess, this.loginFailure);
  }

}
