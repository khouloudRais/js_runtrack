const correctOrder = [
    "logo1.png", "logo2.png", "logo3.png", 
    "logo4.png", "logo5.png", "logo6.png", 
    "logo7.png", "logo8.png", ""
];

let currentOrder = [...correctOrder];
const tiles = document.querySelectorAll('.tile');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart-btn');
const shuffleBtn = document.getElementById('shuffle-btn');

let emptyIndex = currentOrder.indexOf(""); // L'index de la case vide

function initializeGame() {
    // Mélange aléatoire des tuiles, à l'exception de la case vide
    currentOrder = shuffleArray([...correctOrder]);
    emptyIndex = currentOrder.indexOf(""); // Met à jour l'index de la case vide

    tiles.forEach((tile, index) => {
        const tileImage = currentOrder[index];
        if (tileImage !== "") {
            tile.style.backgroundImage = `url('image/${tileImage}')`; 
            tile.classList.remove('empty');
        } else {
            tile.classList.add('empty');  // Case vide
            tile.style.backgroundImage = ''; // Assurez-vous que la case vide n'a pas d'image
        }

        // Réinitialisation de l'événement de clic pour chaque carreau
        tile.addEventListener('click', () => moveTile(index));
    });

    message.textContent = ''; // Réinitialiser le message
    restartBtn.style.display = 'none'; // Masquer le bouton de redémarrage
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Permutation aléatoire
    }
    return array;
}

function moveTile(index) {
    const validMoves = getValidMoves(emptyIndex);

    if (validMoves.includes(index)) {
        // Déplacer le carreau
        currentOrder[emptyIndex] = currentOrder[index];
        currentOrder[index] = "";

        // Mettre à jour l'affichage
        emptyIndex = index; // Mise à jour de la position de la case vide
        updateBoard();

        // Vérifier si le jeu est gagné
        if (isGameWon()) {
            message.textContent = "Vous avez gagné";
            message.className = "message win";
            restartBtn.style.display = "inline-block";
        }
    }
}

function getValidMoves(emptyIndex) {
    const row = Math.floor(emptyIndex / 3);
    const col = emptyIndex % 3;
    const validMoves = [];

    // Déplacement vers la gauche
    if (col > 0) validMoves.push(emptyIndex - 1);
    // Déplacement vers la droite
    if (col < 2) validMoves.push(emptyIndex + 1);
    // Déplacement vers le haut
    if (row > 0) validMoves.push(emptyIndex - 3);
    // Déplacement vers le bas
    if (row < 2) validMoves.push(emptyIndex + 3);

    return validMoves;
}

function updateBoard() {
    tiles.forEach((tile, index) => {
        const tileImage = currentOrder[index];
        if (tileImage !== "") {
            tile.style.backgroundImage = `url('image/${tileImage}')`;
            tile.classList.remove('empty');
        } else {
            tile.classList.add('empty');
            tile.style.backgroundImage = ''; // La case vide reste sans image
        }
    });
}

function isGameWon() {
    return currentOrder.join('') === correctOrder.join('');
}

function restartGame() {
    initializeGame();
}

// Initialisation du jeu au lancement
initializeGame();
