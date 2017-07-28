import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  doLogin(email: String, pass: String) {
    let params = {
      operacao: "008",
      chaveSistema: '1b6453892473a467d07372d45eb05abc2031647a',
      login: email,
      senha: pass
    };
    return this.http.post('http://plurieducacional.com.br/homologacao/pluriidapi/webservice.php', params).toPromise();
  }

}
