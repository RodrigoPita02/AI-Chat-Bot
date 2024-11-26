// Obtém elementos da página
const sendButton = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// Função para enviar mensagem do usuário
function sendMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Rola para a última mensagem
}

// Função para enviar a mensagem do usuário e chamar a API do servidor
async function handleUserMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    // Exibe a mensagem do usuário
    sendMessage(userMessage, 'user');
    userInput.value = ''; // Limpa o campo de entrada

    // Exibe a resposta do bot (simulada ou real, se tiver integração)
    sendMessage('Carregando...', 'bot');

    try {
      const response = await fetch('/chat', { // Alterei de /api/chat para /chat
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }), // A chave foi alterada de 'prompt' para 'message' para coincidir com o que o backend espera
      });
      const data = await response.json();

      // Atualiza a resposta do bot
      const botMessage = data.response || 'Desculpe, não consegui entender.';
      sendMessage(botMessage, 'bot');
    } catch (error) {
      console.error('Erro ao comunicar com o servidor:', error);
      sendMessage('Erro ao processar a resposta. Tente novamente!', 'bot');
    }
  }
}

// Evento para capturar o envio de mensagem
sendButton.addEventListener('click', handleUserMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleUserMessage();
  }
});
