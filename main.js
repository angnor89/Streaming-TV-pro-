console.log('Hello World!');

// Initialisation de l'API Telegram
let tg = window.Telegram.WebApp;
tg.expand(); // Agrandir la WebView

// Afficher le nom de l'utilisateur
document.getElementById("user-info").innerText =
    `Bonjour, ${tg.initDataUnsafe?.user?.first_name || "Utilisateur"} !`;

// Fonction pour envoyer un message au bot
document.getElementById("send-message").addEventListener("click", function() {
    fetch(`https://api.telegram.org/bot7748382869:AAHLM0FFS3mYcA9RGlrSe35s2D3xjUvH4cQ/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: tg.initDataUnsafe?.user?.id,
            text: "Hello depuis la Web App !"
        })
    }).then(response => response.json())
      .then(data => console.log("Message envoyé :", data))
      .catch(error => console.error("Erreur :", error));
});
              
