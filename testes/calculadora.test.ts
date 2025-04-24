import  Calculadora  from '../src/calculadora';
import  {adicionar}  from '../src/operacoes/adicao';
import  {subtrair}  from '../src/operacoes/subtracao';
import  {multiplicar}  from '../src/operacoes/multiplicacao';
import  {dividir}  from '../src/operacoes/divisao';

// Testes unitários para a calculadora
describe('Calculadora', () => {
  let calculadora: Calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  it('deve adicionar dois números corretamente', () => {
    const resultado = adicionar(2, 3);
    expect(resultado).toBe(5);
  });

  it('deve subtrair dois números corretamente', () => {
    const resultado = subtrair(5, 3);
    expect(resultado).toBe(2);
  });

  it('deve multiplicar dois números corretamente', () => {
    const resultado = multiplicar(4, 2);
    expect(resultado).toBe(8);
  });

  it('deve dividir dois números corretamente', () => {
    const resultado = dividir(10, 2);
    expect(resultado).toBe(5);
  });

  it('deve lançar um erro ao dividir por zero', () => {
    expect(() => {
      dividir(10, 0);
    }).toThrow('Não é possível dividir por zero');
  });
});


