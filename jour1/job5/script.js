// Déclaration de la fonction fizzbuzz
function fizzbuzz() {
    // Boucle de 1 à 151
    for (let i = 1; i <= 151; i++) {
        // Vérification si le nombre est un multiple de 3 et 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Vérification si le nombre est un multiple de 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // Vérification si le nombre est un multiple de 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // Si aucune condition n'est remplie, on affiche le nombre
        else {
            console.log(i);
        }
    }
}

// Appel de la fonction fizzbuzz pour l'exécuter
fizzbuzz();
