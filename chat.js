function sendMessage() {
    var input = document.getElementById('chat-input');
    var messageContainer = document.getElementById('chat-messages');
    var message = input.value.trim();

    if (message) {
        var messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.className = 'message'; // Apply any necessary styles
        messageContainer.appendChild(messageDiv);
        input.value = '';
        messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll to the bottom
    }
}

document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
function toggleChat() {
    var chatBox = document.querySelector('.chat-box');
    var messages = document.getElementById('chat-messages');
    var inputBox = document.querySelector('.chat-input');
    var toggleButton = document.querySelector('.chat-toggle');

    if (chatBox.classList.contains('minimized')) {
        chatBox.classList.remove('minimized');
        messages.style.maxHeight = '200px'; // Set max height for messages box
        inputBox.style.maxHeight = '50px'; // Set max height for input box
        toggleButton.textContent = '-';
    } else {
        chatBox.classList.add('minimized');
        messages.style.maxHeight = '0';
        inputBox.style.maxHeight = '0';
        toggleButton.textContent = '+';
    }
}
