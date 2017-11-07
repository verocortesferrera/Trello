
//llamo en una variable el contenedor padre de mi input
var addList = document.getElementById("contenedor");
// div que contiene botones save y remove
var divBotones = document.getElementById("buttons");

//creo una funcion que al hacer clic en mi contenedor padre suceda:
addList.addEventListener("click", function(){
	//agarro el contenedor y le agrego una clase after guardada en mi css
	addList.classList.add("after");
	//al Hacer clic en el boton remuevo la clase hidden que tenia el estilo de mi primer input
	divBotones.classList.remove("hidden");
});

//llamo en una variable a mi elemento icono close
var closeList = document.getElementById("close");


//creo una funcion que haga que en ese boton al hacer clic ocurra que elimine
closeList.addEventListener("click", function(){

	//agarro el boton close y le agrego mi lista inicial hidden
	divBotones.classList.add("hidden");
	//agarro el contenedor y remuevo  el estilo dado after
	closeList.classList.remove("after");
	
});