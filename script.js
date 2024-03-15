const chatBox = document.getElementById('chat-box');
        const chatForm = document.getElementById('chat-form');
        const userInput = document.getElementById('user-input');

        chatForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const userMessage = userInput.value;
            appendMessage('user', userMessage);
            sendMessageToAI(userMessage);
            userInput.value = '';
        });

        function appendMessage(sender, message) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            if (sender === 'user') {
                messageElement.innerHTML = `<div class="user-message">${message}</div>`;
            } else {
                messageElement.innerHTML = `<div class="bot-message">${message}</div>`;
            }
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function sendMessageToAI(message) {
            const aiResponse = generateBotResponse(message);
            setTimeout(() => {
                appendMessage('bot', aiResponse);
            }, 500);
        }

        function generateBotResponse(userMessage) {
            const responses = [
                "Razumijem što si rekao.",
                "Zanimljivo. Reci mi još o tome.",
                "Imate li još pitanja?",
                "Nisam siguran kako da odgovorim na to.",
                "Što mislite o tome?",
                "Molim vas, nastavite.",
                "To je zanimljiva perspektiva.",
                "Što vas točno zanima?"
            ];
            const randomIndex = Math.floor(Math.random() * responses.length);
            return responses[randomIndex];
        }
