# Chat AI - Projeto de Integração com GPT-3.5

Este é um projeto simples de integração com a API da OpenAI para criar um chat interativo utilizando o modelo GPT-3.5. O projeto permite que os usuários enviem mensagens e recebam respostas do modelo GPT-3.5, tudo via uma interface de chat simples.

## Funcionalidades

- Interface de chat simples e interativa.
- Envio de mensagens para o servidor.
- Comunicação com a API da OpenAI (GPT-3.5).
- Respostas em tempo real do modelo GPT-3.5.
- Funcionalidade de exibição de mensagens tanto do usuário quanto do bot.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **API**: OpenAI (GPT-3.5)
- **Ambiente**: `.env` para variáveis sensíveis

## Como Rodar o Projeto Localmente

### Pré-requisitos

Antes de começar, você precisa ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo 1: Clonar o Repositório

Clone o repositório para o seu ambiente local:
```bash
git clone https://github.com/SEU_USUARIO/chat-ai.git
```

### Passo 2: Instalar Dependências

Acesse o diretório do projeto e instale as dependências:
´´´bash
cd chat-ai
npm install
´´´

### Passo 3: Criar o Arquivo .env

Crie um arquivo .env na raiz do projeto com a chave de API da OpenAI:
´´´bash
OPENAI_API_KEY=YOUR_API_KEY
´´´

### Passo 4: Rodar o Servidor

Após configurar o arquivo .env, você pode rodar o servidor com o comando:
´´´bash
npm start
´´´
Isso iniciará o servidor na porta 5000. Acesse http://localhost:5000 no seu navegador para interagir com o chat.

## Estrutura de Arquivos

A estrutura do projeto é a seguinte:

```bash
chat-ai/
│
├── .env                # Contém a chave de API da OpenAI
├── index.html          # HTML para a interface do chat
├── script.js           # Lógica do frontend para interação com o chat
├── style.css           # Estilos para a interface do chat
├── server.js           # Servidor Express que lida com a API OpenAI
├── package.json        # Dependências e scripts do projeto
├── .gitignore          # Arquivo para ignorar arquivos como o .env
```

## Contactos

**Name:** Rodrigo Pita
**Email:** rodrigomcpita@gmail.com