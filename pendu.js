var listeMots=[
  'ordinateur',
  'chien',
  'table',
  'marsupial',
  'numerique',
  'boutade',
  'parquet',
  'nuage',
  'programmation',
  'telephone',
  'limonade',
];

var win = false;
var mot = listeMots[Math.floor(Math.random() * listeMots.length)];
var motSearch="";
var compt = 11;
var lettrePropose="";

for (var i = 0; i < mot.length; i++) {
  motSearch+="-";
}
console.log(mot);

var maProposition = function(){
  var indice = 0;
  lettrePropose+='  ' + document.getElementById('prop').value;
  if (document.getElementById('prop').value=== mot) {
    win = true;
    motSearch = mot;
    document.getElementById('result').textContent = "Victoire !";

  }
  else {
    for (var i = 0; i < mot.length; i++) {
      if(document.getElementById('prop').value === mot[i]){
        var deb = motSearch.slice(0,i);
        var fin = motSearch.slice(i+1);
        motSearch = deb + mot[i] + fin;
        indice = 1;
        if(motSearch === mot){
          win = true;
          console.log('win');
          document.getElementById('result').textContent = "Victoire !";
        }
      }
      else if(compt <= 0){
        document.getElementById('result').textContent = "Defaite ...";
      }
    }
    if (indice === 0){
      compt--;
      document.getElementById('result').innerHTML = "Il vous reste <br /> "+ compt +" essai(s)";
    }
  }
  document.getElementById('mot').textContent = motSearch;
  document.getElementById('prop').value = null;
  document.getElementById('lettrePropose').textContent = lettrePropose;
}

window.onload = function(){
  document.getElementById('mot').textContent = motSearch;
  document.getElementById('result').textContent = "Il vous reste "+ compt +"essai(s)";
  document.getElementById('prop').value = null;

}
