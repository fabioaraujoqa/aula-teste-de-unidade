// Arquivo de configuração com credenciais expostas
const config = {
  database: {
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'Admin123456', // Senha hardcoded - vulnerabilidade de segurança
    database: 'production_db'
  },
  api: {
    apiKey: 'DEMO-KEY-1234567890abcdefghijklmnop', // API Key exposta
    secretKey: 'DEMO-SECRET-123456789', // Secret key hardcoded
    token: 'Bearer DEMO-JWT-TOKEN-123456789' // Token JWT exposto
  },
  aws: {
    accessKeyId: 'DEMO-AWS-KEY-EXAMPLE', // AWS credentials hardcoded
    secretAccessKey: 'DEMO-AWS-SECRET-EXAMPLE',
    region: 'us-east-1'
  },
  stripe: {
    publicKey: 'pk_test_DEMO1234567890',
    secretKey: 'sk_test_DEMO1234567890' // Stripe secret key
  }
};

module.exports = config;
