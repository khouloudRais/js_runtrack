// Fonction pour vérifier si un nombre est premier
function estPremier(n) {
    if (n <= 1) return false; // Les nombres <= 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(n); i++) { // On teste jusqu'à la racine carrée de n
        if (n % i === 0) return false; // Si n est divisible par i, ce n'est pas un nombre premier
    }
    return true; // Si aucune division n'est trouvée, le nombre est premier
}

// Fonction sommeNombresPremiers
function sommeNombresPremiers(a, b) {
    // Vérifier si les deux nombres sont premiers
    if (estPremier(a) && estPremier(b)) {
        return a + b; // Si les deux sont premiers, on retourne leur somme
    }
    return false; // Sinon, on retourne false
}

// Exemple d'utilisation
console.log(sommeNombresPremiers(5, 7)); // 12, car 5 et 7 sont premiers
console.log(sommeNombresPremiers(4, 7)); // false, car 4 n'est pas premier
console.log(sommeNombresPremiers(11, 13)); // 24, car 11 et 13 sont premiers
console.log(sommeNombresPremiers(9, 4)); // false, car 9 et 4 ne sont pas premiers
