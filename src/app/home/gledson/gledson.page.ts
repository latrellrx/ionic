import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GerenciadorSessao } from 'src/app/objetos/entidades/GerenciadorSessao';
import { Pessoa } from 'src/app/objetos/interfaces/Pessoa';
import { Endereco } from 'src/app/objetos/interfaces/Endereco';

@Component({
  selector: 'app-gledson',
  templateUrl: './gledson.page.html',
  styleUrls: ['./gledson.page.scss'],
})
export class GledsonPage implements OnInit {
  pessoas: Pessoa[] = [];
  person: Pessoa;
  passos: string[] = ['dadosPessoais', 'endereco', 'contato'];
  passoAtual: number = 0;
  indice: number = 0
  validar: boolean = false;

  constructor(
    public router: Router, 
    public sessao: GerenciadorSessao
    ) { }

  ngOnInit() {
    this.person = {
      nome: '',
      nascimento: new Date(),
      sexo: false,
      endereco: new Endereco(),
      contato: {nome: 'Gledson', email: 'teste', telefone: 32131232}
    }
  }

  voltar() {
    if (this.passoAtual > 0) {
        this.passoAtual--;
        this.indice--;
        this.isValid();
    }
    console.log("this.passoAtual:: ", this.passoAtual);
    console.log("this.indice:: ", this.indice);
    console.log("this.validar:: ", this.validar);
    
  }

  avancar() {
    if (this.passoAtual + 1 < this.passos.length) {
      this.passoAtual++;
      this.indice++;
      this.isValid();
    } else {
      this.salvar();
    }

    console.log("this.passoAtual:: ", this.passoAtual);
    console.log("this.indice:: ", this.indice);
    console.log("this.validar:: ", this.validar);
    
  }

  salvar() {
    this.pessoas.push(this.person);
    this.sessao.pessoa = this.pessoas;
    this.router.navigate(['gledson/grid']);
  }

  isValid() {
    this.validar = !(this.passoAtual + 1 < this.passos.length);
    return this.validar; 
  }
}
