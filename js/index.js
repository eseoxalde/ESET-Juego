function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function dibujar(){
	var c = document.getElementById("miCanvas");
	var ctx = c.getContext("2d");

	/* cambio el color del fondo */
	ctx.fillStyle="#A9CCE3"
	ctx.fillRect(0, 0, c.width, c.height);

	/* Prueba para ver que funciona */
	let x = 1;
    let y = 1;
    for (let i=x; i<=c.width; i=i+50){
    	let color= getRandomColor();
    	ctx.fillStyle = color;
    	ctx.fillRect(i, i, 50, 50);
    }

    /*Fin prueba*/


}


