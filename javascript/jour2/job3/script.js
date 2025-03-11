// Fonction qui sera appelée à chaque clic pour incrémenter le compteur
function addOne() {
    // Récupération de l'élément <p> avec l'id "compteur"
    var compteurElement = document.getElementById('compteur');
    
    // Récupération de la valeur actuelle du compteur (en tant que nombre)
    var currentValue = parseInt(compteurElement.innerText);
    
    // Incrémentation du compteur
    compteurElement.innerText = currentValue + 1;
}

// Ajout d'un écouteur d'événement pour le clic sur le bouton
document.getElementById('button').addEventListener('click', addOne);
