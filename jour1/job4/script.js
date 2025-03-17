// Déclaration de la fonction bisextile
function bisextile(année) {
    // Une année est bissextile si elle est divisible par 4
    // mais pas divisible par 100, sauf si elle est divisible par 400
    if ((année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation
console.log(bisextile(2020)); // true, 2020 est bissextile
console.log(bisextile(2021)); // false, 2021 n'est pas bissextile
console.log(bisextile(1900)); // false, 1900 n'est pas bissextile
console.log(bisextile(2000)); // true, 2000 est bissextile
