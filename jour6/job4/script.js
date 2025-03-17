document.getElementById("updateButton").addEventListener("click", function() {
    // Utiliser fetch pour récupérer le fichier utilisateur.json
    fetch('utilisateur.json')  // Remplacer par le chemin du fichier JSON
      .then(response => response.json())  // Convertir la réponse en JSON
      .then(data => {
        // Appeler la fonction pour remplir le tableau avec les données
        updateUserTable(data);
      })
      .catch(error => {
        console.error("Erreur de chargement du fichier JSON : ", error);
      });
  });
  
  // Fonction pour remplir le tableau avec les utilisateurs
  function updateUserTable(users) {
    const tbody = document.getElementById("userTable").getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';  // Vider le tableau avant de le remplir avec les nouvelles données
  
    // Remplir le tableau avec les utilisateurs
    users.forEach(user => {
      const row = document.createElement('tr');  // Créer une nouvelle ligne
  
      // Créer une cellule pour chaque donnée de l'utilisateur
      const idCell = document.createElement('td');
      idCell.textContent = user.id;
      row.appendChild(idCell);
  
      const nomCell = document.createElement('td');
      nomCell.textContent = user.nom;
      row.appendChild(nomCell);
  
      const prenomCell = document.createElement('td');
      prenomCell.textContent = user.prenom;
      row.appendChild(prenomCell);
  
      const emailCell = document.createElement('td');
      emailCell.textContent = user.email;
      row.appendChild(emailCell);
  
      // Ajouter la ligne dans le tableau
      tbody.appendChild(row);
    });
  }
  