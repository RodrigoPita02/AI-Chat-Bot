// Importa as dependências
const express = require('express');
const { OpenAI } = require('openai'); // Biblioteca da OpenAI
require('dotenv').config(); // Para carregar variáveis de ambiente do arquivo .env

const app = express();
const port = 5000; // Porta para o servidor

// Configuração do Express para servir arquivos estáticos (como o index.html, style.css e script.js)
app.use(express.static('public'));

// Configuração do Express para aceitar JSON
app.use(express.json());

// Criação da instância do OpenAI usando a chave da API armazenada em um arquivo .env
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Sua chave de API aqui
});

// Rota para interagir com o modelo GPT-3.5
app.post('/chat', async (req, res) => {
  const { message } = req.body; // Obtém a mensagem do corpo da requisição

  if (!message) {
    return res.status(400).send({ error: 'Mensagem não fornecida' });
  }

  try {
    // Chama a API da OpenAI com o modelo GPT-3.5
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Modelo GPT-3.5
      messages: [{ role: 'user', content: message }],
      max_tokens: 100, // Limite de tokens para a resposta
    });

    // Retorna a resposta do modelo GPT-3.5
    res.json({ response: response.choices[0].message.content });
  } catch (error) {
    console.error('Erro ao chamar a API da OpenAI:', error);
    res.status(500).send({ error: 'Erro interno ao chamar a API' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
