function fatorial(){
  var numero = parseInt(document.getElementById('numero').value);
  var resposta = document.getElementById('resposta');
  var resultado=1;
  var count=1;

  while(count<=numero){
   resultado *= count;
   count++;
  }

  resposta.innerHTML =resultado;
}