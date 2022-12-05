function muestraL() {
    var saludo=["Hi There!","Labas!","Bonjour!","Zdravo!","Ciao!"];
    var cantidad=saludo.length;
    var aleatorio= Math.trunc( Math.random()*cantidad );
    alert(saludo[aleatorio]);
  }
function imc() {
    var altura = document.getElementById("altu").value;
    var peso = document.getElementById("peso").value;
    var indice = (peso / (altura * altura)).toFixed(3);
    document.getElementById("resu").innerHTML=indice;
}


