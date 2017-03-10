var lancer= function(){
  var adversaire = Math.round(Math.random() * 2);
  if (document.getElementById('choix').value == 0) {
    if (adversaire == 0) {
      document.getElementById("result").textContent = "Votre adversaire à aussi choisi pierre, égalité";
    }
    else if (adversaire == 1) {
      document.getElementById("result").textContent = "Votre adversaire à choisi papier, vous perdez";
    }
    else {
      document.getElementById("result").textContent = "Votre adversaire à choisi ciseaux, vous gagnez";
    }
  }
  else if (document.getElementById('choix').value == 1) {
    if (adversaire == 0) {
      document.getElementById("result").textContent = "Votre adversaire à choisi pierre, vous gagnez";
    }
    else if (adversaire == 1) {
      document.getElementById("result").textContent = "Votre adversaire à aussi choisi papier, égalité";
    }
    else {
      document.getElementById("result").textContent = "Votre adversaire à choisi ciseaux, vous perdez";
    }
  }
  else {
    if (adversaire == 0) {
      document.getElementById("result").textContent = "Votre adversaire à choisi pierre, vous perdez";
    }
    else if (adversaire == 1) {
      document.getElementById("result").textContent = "Votre adversaire à choisi papier, vous gagnez";
    }
    else {
      document.getElementById("result").textContent = "Votre adversaire à aussi choisi ciseau, égalité";
    }
  }
}
