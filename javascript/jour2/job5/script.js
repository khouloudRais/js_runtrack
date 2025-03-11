// Fonction pour gérer le changement de couleur du footer en fonction du scroll
function updateFooterColor() {
    // Récupérer la hauteur totale de la page et la hauteur actuelle du défilement
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    
    // Calculer le pourcentage de défilement
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    // Récupérer le footer
    const footer = document.getElementById('footer');
    
    // Définir la couleur du footer en fonction du pourcentage de défilement
    if (scrollPercentage <= 33) {
        footer.style.backgroundColor = 'green';  // Vert pour moins de 33% de scroll
    } else if (scrollPercentage <= 66) {
        footer.style.backgroundColor = 'orange';  // Orange entre 33% et 66%
    } else {
        footer.style.backgroundColor = 'red';  // Rouge pour plus de 66% de scroll
    }
}

// Ajouter un événement pour détecter le défilement de la page
window.addEventListener('scroll', updateFooterColor);

// Initialiser la couleur du footer lorsque la page est chargée
updateFooterColor();
