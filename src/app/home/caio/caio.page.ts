import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/objetos/interfaces/Pessoa';
import { Endereco } from 'src/app/objetos/interfaces/Endereco';

@Component({
  selector: 'app-caio',
  templateUrl: './caio.page.html',
  styleUrls: ['./caio.page.scss'],
})
export class CaioPage implements OnInit {
  person: Pessoa;
  constructor() { }

  ngOnInit() {
    this.person = {
      nome : '',
      nascimento : new Date(),
      sexo : false,
      endereco : new Endereco(),
      contato: { email: 'teste', telefone: 32131232,celular : 123}


    }
  }

}
