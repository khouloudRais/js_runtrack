// Fonction qui récupère la valeur associée à une clé dans une chaîne JSON
function jsonValueKey(jsonString, key) {
    try {
      // Convertir la chaîne JSON en objet JavaScript
      const jsonObject = JSON.parse(jsonString);
  
      // Retourner la valeur liée à la clé
      if (jsonObject.hasOwnProperty(key)) {
        return jsonObject[key];
      } else {
        return `La clé "${key}" n'existe pas dans l'objet JSON.`;
      }
    } catch (error) {
      return "Erreur de format JSON.";
    }
  }
  
  // Exemple d'utilisation
  document.getElementById("testButton").addEventListener("click", () => {
    const jsonString = '{"name": "Jean", "age": 30, "city": "Marseille"}'; // Exemple de chaîne JSON
    const key = "city"; // La clé à rechercher
  
  
    const result = jsonValueKey(jsonString, key); // Appel de la fonction
  
    document.getElementById("result").textContent = result; // Affichage du résultat dans le <p>
  });
