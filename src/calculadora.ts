// Importando as funções de operações
import { adicionar } from './operacoes/adicao';
import { subtrair } from './operacoes/subtracao';
import { multiplicar } from './operacoes/multiplicacao';
import { dividir } from './operacoes/divisao';

class Calculadora {
  adicionar(a: number, b: number): number {
    return adicionar(a, b);
  }

  subtrair(a: number, b: number): number {
    return subtrair(a, b);
  }

  multiplicar(a: number, b: number): number {
    return multiplicar(a, b);
  }

  dividir(a: number, b: number): number {
    return dividir(a, b);
  }
}

export default Calculadora;