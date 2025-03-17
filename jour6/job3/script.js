document.getElementById("filterButton").addEventListener("click", function() {
    // Récupérer les valeurs des champs du formulaire
    const idValue = document.getElementById("id").value;
    const nameValue = document.getElementById("name").value;
    const typeValue = document.getElementById("type").value;
  
    // Utiliser fetch pour récupérer le contenu du fichier JSON pokemon.json
    fetch('pokemon.json')  
      .then(response => response.json())  // Convertir la réponse en objet JSON
      .then(data => {
        // Filtrer les données en fonction des critères
        const filteredData = data.filter(item => {
          return (
            (idValue === "" || item.id.toString().includes(idValue)) &&
            (nameValue === "" || item.name.toLowerCase().includes(nameValue.toLowerCase())) &&
            (typeValue === "" || item.type === typeValue)
          );
        });
  
        // Afficher les résultats dans la page
        displayResults(filteredData);
      })
      .catch(error => {
        console.error("Erreur de chargement des données :", error);
      });
  });
  
  // Fonction pour afficher les résultats filtrés
  function displayResults(data) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Vider les résultats précédents
  
    if (data.length === 0) {
      resultsDiv.innerHTML = "<p>Aucun pokemon trouvé.</p>";
      return;
    }
  
    // Créer une liste des résultats filtrés
    const list = document.createElement("ul");
    data.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = `ID: ${item.id}, Nom: ${item.name}, Type: ${item.type}`;
      list.appendChild(listItem);
    });
  
    resultsDiv.appendChild(list);
  }
  
  