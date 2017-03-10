var ancienDe = 0;

var lancer = function(){
  var newDe = Math.ceil(Math.random() * 6);
  console.log(newDe);
  if(ancienDe === 0){
    document.getElementById('resultat').textContent = "Votre premier lancer vaut " + newDe;
  }
  else if (ancienDe > newDe) {
    document.getElementById('resultat').textContent = "la nouvelle valeur: " + newDe + ", est inferieur a " + ancienDe + ", l'ancienne valeur";
  }
  else if (ancienDe < newDe) {
    document.getElementById('resultat').textContent = "la nouvelle valeur: " + newDe + ", est supérieur a " + ancienDe + ", l'ancienne valeur";
  }
  else {
    document.getElementById('resultat').textContent = "la nouvelle valeur: " + newDe + ", est égal a " + ancienDe + ", l'ancienne valeur";
  }
  ancienDe = newDe;
};
