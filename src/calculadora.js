// Função de soma
function somar(a, b) {
    return a + b
}
console.log('Soma: ' + somar(10,5))

// Função de divisão

function dividir (a,b) {
    if (b === 0 ){
        return 'Divisão por zero não é permitida'
    }
    return a / b
}

module.exports = {somar, dividir }
