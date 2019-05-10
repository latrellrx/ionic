import { Pessoa } from '../interfaces/Pessoa';
import { Injectable } from '@angular/core';

@Injectable 
(
    {
        providedIn: 'root'
    }
)

export class GerenciadorSessao {
    pessoa: Pessoa[];

    constructor() {}
}