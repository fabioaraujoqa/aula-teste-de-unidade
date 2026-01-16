// Arquivo com vulnerabilidades de segurança adicionais

const crypto = require('crypto');

// Senha admin hardcoded
const ADMIN_PASSWORD = 'admin123';
const ADMIN_USERNAME = 'root';

// Função de autenticação insegura usando MD5
function autenticarUsuario(username, password) {
  // MD5 é considerado inseguro
  const hash = crypto.createHash('md5').update(password).digest('hex');
  
  // Comparação direta de strings (vulnerável a timing attacks)
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return {
      sucesso: true,
      token: 'hardcoded-token-12345' // Token hardcoded
    };
  }
  
  return { sucesso: false };
}

// SQL Injection vulnerável
function buscarUsuario(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId; // SQL injection
  // executarQuery(query);
  return query;
}

// Geração de números aleatórios insegura
function gerarToken() {
  return Math.random().toString(36).substring(7); // Math.random() não é criptograficamente seguro
}

// Uso de eval (muito perigoso)
function executarComando(comando) {
  return eval(comando); // eval é extremamente perigoso
}

// Regex com risco de ReDoS
function validarEmail(email) {
  const regex = /^([a-zA-Z0-9]+)+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
  return regex.test(email);
}

module.exports = {
  autenticarUsuario,
  buscarUsuario,
  gerarToken,
  executarComando,
  validarEmail
};
