// Sélectionner les éléments par leur ID
const showTextBtn = document.getElementById('showTextBtn');
const hideTextBtn = document.getElementById('hideTextBtn');
const text = document.getElementById('text');

// Ajouter un événement pour afficher le texte lorsque le bouton "Afficher le texte" est cliqué
showTextBtn.addEventListener('click', () => {
    text.style.display = 'block';  // Afficher le texte
});

// Ajouter un événement pour cacher le texte lorsque le bouton "Cacher le texte" est cliqué
hideTextBtn.addEventListener('click', () => {
    text.style.display = 'none';  // Cacher le texte
});
