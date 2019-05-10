import { Endereco } from './Endereco';
import { Contato } from './Contato';

export interface Pessoa {
    nome: string;
    nascimento: Date;
    sexo: boolean;
    endereco: Endereco;
    contato: Contato;

}