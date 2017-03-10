var lancer = function(){
  var result =  Math.round(Math.random());
  if(result == 0){
    result = "pile";
  }
  else{
    result = "face";
  }
  console.log(result);
  if(document.getElementById('choix').value == result){
    document.getElementById('result').textContent = result + ", Gagner";
  }
  else{
    document.getElementById('result').textContent = result + ", Perdu";
  }
};
