import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class LoginService {

  doLogin(email: String, pass: String) {
    let params = {
      operacao: "008",
      chaveSistema: '1b6453892473a467d07372d45eb05abc2031647a',
      login: email,
      senha: pass
    };
    // NOTE: Axios for HTTP requests
    return axios.post('http://plurieducacional.com.br/homologacao/pluriidapi/webservice.php', params);
  }

}
