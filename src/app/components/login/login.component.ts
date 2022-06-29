import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../services/banco.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private BancoService: BancoService) { }

  ngOnInit(): void { 
  }

  async loginGestor(
    usuarioInput: HTMLInputElement,
    passwordInput: HTMLInputElement) {

      const usuario = usuarioInput.value;
      const password = passwordInput.value;


    const ok =  await this.BancoService.loginGestor('usuario', 'assword');
    
    //si ok es true, entonces la autenticacion ha sido correcta
    // if(ok) {
    //   alert('Autenticacion correcta');
    // } else{
    //   alert('Autenticacion incorrecta');
    // }

    const msg = (ok) ?
      'Autenticación correcta' : 'Autenticación incorrecta';

    alert(msg);
    
  }

}
