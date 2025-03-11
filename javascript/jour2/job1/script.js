// Déclaration de la fonction citation()
function citation() {
    // Récupération du contenu de l'élément avec l'id 'citation'
    var contenu = document.getElementById('citation').innerText;
    // Affichage du contenu dans la console
    console.log(contenu);
}

// Ajout d'un écouteur d'événement sur le bouton pour appeler la fonction citation() lors du clic
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', citation);
});
