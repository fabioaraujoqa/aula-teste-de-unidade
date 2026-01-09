const { podeAcessarEvento } = require('../src/acesso-evento')

describe('Teste de cobertura de condições - Pode acessar evento', () => {

    test('Deve validar acesso para maior de 18 e ingresso válido', () => {
        // A ( true) && B ( true ) = true 
        expect(podeAcessarEvento(18, true)).toBe('Acesso liberado')
    });

    test('Deve validar acesso para maior de 18 e ingresso inválido', () => {
        // A ( true) && B ( false ) = false
        expect(podeAcessarEvento(18, false)).toBe('Acesso negado')
    });

    test('Deve bloquear acesso para menor de 18 e ingresso inválido', () => {
        // A ( false) && B ( false ) = false
        expect(podeAcessarEvento(17, false)).toBe('Acesso negado')
    });

    test('Deve bloquear acesso para menor de 18 e ingresso válido', () => {
        // A ( true) && B ( false ) = false
        expect(podeAcessarEvento(17, true)).toBe('Acesso negado')
    });
    
});