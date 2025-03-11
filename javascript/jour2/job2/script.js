// Fonction pour afficher ou masquer l'article
function showhide() {
    // Vérifier si l'article existe déjà dans le DOM
    let article = document.getElementById('citation');
    
    if (!article) {
        // Si l'article n'existe pas, on le crée et l'ajoute à la page
        article = document.createElement('article');
        article.id = 'citation';  // Attribuer un id à l'article
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";  // Ajouter le texte
        document.body.appendChild(article);  // Ajouter l'article à la page
    } else {
        // Si l'article existe déjà, on le supprime de la page
        article.remove();
    }
}

// Ajout d'un écouteur d'événement au bouton pour appeler la fonction showhide() lors du clic
document.getElementById('button').addEventListener('click', showhide);
