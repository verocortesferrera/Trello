
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


var save = document.getElementById('save');

save.addEventListener("click", function(){
	//llamo a mi input
	 var lista = document.getElementById('lista').value;

	 //limpio mi lista
	 document.getElementById('lista').value = "";

	 //llamo al contenedor padre donde ira mi lista
	 var contenedor = document.getElementById('contenedor');

	 //creo div donde ira la lista
	 var newContenedorLista = document.createElement('div');

	 //creo elemento p para meter la lista
	var newLista = document.createElement('p');

	//si el input esta vacio no dejar hacer la lista
	if(lista.length == 0 || lista == null) { // si no hay nada
			//desabilita el boton
		save.disabled = true;// para que se corte ahi la condicion sino sera true y se crea la condicion
	} 
	else{}

	//nodo de texto lista
	var textoListaElement = document.createTextNode(lista);
	//agrego nodovalorinput a su padre p
	newLista.appendChild(textoListaElement);
	//agrego p a su contenedor div creado
	newContenedorLista.appendChild(newLista);
	//agrego el div al padre contenedor

	//LLAMO AL elemento que quiero poner despues  en una var
	 var previo = document.getElementById('lista');
	 //inserto nuevo contenedor antes del input
	contenedor.insertBefore(newContenedorLista, previo);

	//darle estilo al contenedor
	newContenedorLista.classList.add('listaEstilo');

	
	//añadir un texto añadir una tarea
	 var nuevaTarea = document.createElement('p');
	 nuevaTarea.innerHTML = "Añadir nueva tarea";
	 //lo agrego en el div
	 contenedor.insertBefore(nuevaTarea, previo);

	
	 



});