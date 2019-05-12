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
  pessoas : Pessoa [] = [];
  indice : number;
  pagina : string [] = ['dados pessoais','endereço','contato'];
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

  avancar(){
    if (this.indice <= this.pagina.length){
      this.indice++;
    }
  }
  voltar(){
    if(this.indice > 0){
      this.indice--;
    }
  }

}
