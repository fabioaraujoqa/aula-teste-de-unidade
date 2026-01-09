const calculadora = require('../src/calculadora')

test('Deve somar 2 + 2 e o resultado deve ser 4', () =>{
    expect(calculadora.somar(2,2)).toBe(4)
})

test('Deve somar -10 + 20 e o resultado deve ser 10', () => {
    expect(calculadora.somar(-10,20)).toBe(10)
});

test('Deve dividir 20 por 5 e o resultado deve ser 4', () => {
    expect(calculadora.dividir(20,5)).toBe(4)
});

test('Deve diviridir por zero e dar uma mensagem de erro', () => {
    expect(calculadora.dividir(10,0)).toBe('Divisão por zero não é permitida')
});