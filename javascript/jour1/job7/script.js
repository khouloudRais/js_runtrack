// Fonction pour trier un tableau de nombres
function tri(numbers, order) {
    // Vérification si l'ordre est "asc" ou "desc"
    if (order === "asc") {
        // Tri ascendant
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        // Tri descendant
        return numbers.sort((a, b) => b - a);
    } else {
        // Si l'ordre n'est ni "asc" ni "desc", on retourne un message d'erreur
        console.error('L\'ordre doit être "asc" ou "desc"');
        return numbers;
    }
}

// Exemple d'utilisation de la fonction tri
const numbers = [12, 5, 8, 130, 44, 3, 21];
console.log(tri(numbers, "asc"));  // [3, 5, 8, 12, 21, 44, 130]
console.log(tri(numbers, "desc")); // [130, 44, 21, 12, 8, 5, 3]
