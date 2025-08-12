function appendMessage(content, sender) {
    let chatBox = document.getElementById("chat-box");
    let msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.textContent = content;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    let input = document.getElementById("user-input");
    let text = input.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    input.value = "";

    // Simulasi AI balasan
    setTimeout(() => {
        appendMessage("Balasan AI untuk: " + text, "bot");
        new Notification("RikChatBot membalas: " + text);
    }, 1000);
}

// Izin notifikasi
if ("Notification" in window && Notification.permission !== "granted") {
    Notification.requestPermission();
}
