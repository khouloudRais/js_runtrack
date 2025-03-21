// Tableau contenant les chemins des images dans l'ordre correct
const correctOrder = [
    "arc1.png", 
    "arc2.png", 
    "arc3.png", 
    "arc4.png", 
    "arc5.png", 
    "arc6.png"
];

// Récupérer tous les éléments d'images et les conteneurs
const images = document.querySelectorAll('.image');
const shuffleBtn = document.getElementById('shuffleBtn');
const message = document.getElementById('message');

// Fonction pour mélanger les images
function shuffleImages() {
    const shuffledOrder = [...correctOrder];
    shuffledOrder.sort(() => Math.random() - 0.5); // Mélange aléatoire

    // Vérification dans la console du tableau mélangé
    console.log('Ordre mélangé:', shuffledOrder);

    // Assigner les nouvelles sources d'images aux éléments HTML
    images.forEach((img, index) => {
        const newSrc = "image/" + shuffledOrder[index];  // Assurez-vous que le chemin est correct
        console.log('Nouvelle source pour l\'image:', newSrc);  // Afficher la nouvelle source
        img.src = newSrc;
        img.dataset.image = shuffledOrder[index]; // On stocke l'image dans un attribut data
    });
}

// Fonction pour vérifier si les images sont dans l'ordre correct
function checkOrder() {
    let isCorrect = true;

    // Vérifier chaque image
    images.forEach((img, index) => {
        // Récupérer le nom de fichier à partir du chemin de l'image
        const imageName = img.src.split('/').pop();

        // Vérifier si l'image est dans le bon ordre
        if (imageName !== correctOrder[index]) {
            isCorrect = false;
        }
    });

    // Afficher le message en fonction du résultat
    if (isCorrect) {
        message.textContent = "Vous avez gagné";
        message.className = "message win";
    } else {
        message.textContent = "Vous avez perdu";
        message.className = "message lose";
    }
}

// Ajouter un écouteur d'événement pour le bouton "Mélanger"
shuffleBtn.addEventListener('click', () => {
    shuffleImages();
    message.textContent = ''; // Réinitialiser le message
});

// Ajouter un écouteur d'événement pour chaque image afin de vérifier l'ordre après un clic
images.forEach(img => {
    img.addEventListener('click', checkOrder);
});
