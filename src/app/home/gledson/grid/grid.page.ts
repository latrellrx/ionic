import { Component, OnInit } from '@angular/core';
import { GerenciadorSessao } from 'src/app/objetos/entidades/GerenciadorSessao';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {

  constructor(public sessao: GerenciadorSessao) { }


  ngOnInit() {
  }

}
