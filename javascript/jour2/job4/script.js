// Fonction qui gère l'événement de pression de touche
function keylogger(event) {
    // Récupérer la lettre tapée
    const keyPressed = event.key;

    // Vérifier si la touche pressée est une lettre entre a et z (en minuscules ou majuscules)
    if (keyPressed.match(/[a-zA-Z]/)) {
        // Récupérer le textarea
        const textarea = document.getElementById('keylogger');
        
        // Si le focus est sur le textarea, ajouter la lettre deux fois
        if (document.activeElement === textarea) {
            textarea.value += keyPressed + keyPressed; // Ajoute deux fois la lettre
        } else {
            // Sinon, ajouter la lettre une seule fois
            textarea.value += keyPressed;
        }
    }
}

// Écouteur d'événement pour capturer toute pression de touche dans le document
document.addEventListener('keydown', keylogger);
