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

function checkout() {
    CinetPay.setConfig({
        apikey: '67050856467af0f50c323e2.86955786', // YOUR APIKEY
        site_id: '105887867', // YOUR_SITE_ID
        notify_url: 'http://mondomaine.com/notify/',
        mode: 'PRODUCTION'
    });
    CinetPay.getCheckout({
        transaction_id: Math.floor(Math.random() * 100000000).toString(), // YOUR TRANSACTION ID
        amount: 1000,
        currency: 'XOF',
        channels: 'ALL',
        description: 'Test de paiement',
        // Fournir ces variables pour le paiements par carte bancaire
        customer_name: "Joe", // Le nom du client
        customer_surname: "Down", // Le prenom du client
        customer_email: "down@test.com", // l'email du client
        customer_phone_number: "088767611", // l'email du client
        customer_address: "BP 0024", // addresse du client
        customer_city: "Antananarivo", // La ville du client
        customer_country: "CM", // le code ISO du pays
        customer_state: "CM", // le code ISO l'état
        customer_zip_code: "06510", // code postal
    });
    CinetPay.waitResponse(function(data) {
        if (data.status == "REFUSED") {
            if (alert("Votre paiement a échoué")) {
                window.location.reload();
            }
        } else if (data.status == "ACCEPTED") {
            if (alert("Votre paiement a été effectué avec succès")) {
                window.location.reload();
            }
        }
    });
    CinetPay.onError(function(data) {
        console.log(data);
    });
}
