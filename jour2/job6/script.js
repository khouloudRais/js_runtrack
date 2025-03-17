// Code Konami : haut, haut, bas, bas, gauche, droite, gauche, droite, B, A
const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
];

let konamiIndex = 0; // Suivi de la séquence du code Konami

// Fonction pour vérifier le code Konami
function checkKonamiCode(event) {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;

        // Si toute la séquence est complétée
        if (konamiIndex === konamiCode.length) {
            document.body.classList.add('la-plateforme'); // Applique le style
            alert('Code Konami activé !');
            konamiIndex = 0; // Réinitialisation
        }
    } else {
        konamiIndex = 0; // Réinitialise si une touche incorrecte est pressée
    }
}

// Ajout d'un écouteur pour détecter les touches
document.addEventListener('keydown', checkKonamiCode);
