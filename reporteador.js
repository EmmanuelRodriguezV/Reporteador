var sepal_lenght_array = [];
var sepal_width_array = [];
var petal_lenght_array = [];
var petal_width_array = [];
var species_array = [];
function loadDoc() {
  /*LECTURA A TRAVES DE UN AJAX  */
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("data").innerHTML =
      //this.responseText;
    //  alert("ya entro");
    /*ACOMODO DE ELEMENTOS PARA DESPUES GRAFICARLOS*/
      var letra = this.responseText;
      var temporal;
      arreglo = letra.split("\n");
alert(arreglo);
      arreglo.forEach(elemento =>
      {
        temporal = elemento.split(",");
        sepal_lenght_array.push(temporal[0]);
        sepal_width_array.push(temporal[1]);
        petal_lenght_array.push(temporal[2]);
        petal_width_array.push(temporal[3]);
        species_array.push(temporal[4]);
      });

drawPlot();
console.log(species_array);
    }
  };
  xhttp.open("GET", "iris.csv", true);

  xhttp.send();
}



/*
primer grafica
*/
function drawPlot() {
  console.log(sepal_width_array);
  var x1 = sepal_width_array.map(x =>
  {
    return parseFloat(x);
  });
  var y1 = sepal_lenght_array.map(x =>
  {
    return parseFloat(x);
  });
  alert(sepal_width_array);
}
