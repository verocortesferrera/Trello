
//llamo en una variable el contenedor padre de mi input
var contenedorBox = document.getElementById('box');
// div que contiene botones save y remove
var divBotones = document.getElementById("buttons");

var lista = document.getElementById('lista');
//variable vacia que recibe link añadir lista
addLista = '';

//creo una funcion que al hacer clic en mi contenedor formulario cambie:
lista.addEventListener("click", function(){
	//agarro el contenedor y le agrego una clase after guardada en mi css
	contenedorBox.classList.add('after');
	//al Hacer clic en el boton remuevo la clase hidden que tenia el estilo de mi primer input
	divBotones.classList.remove('hidden');
});

//llamo en una variable a mi elemento icono close
var close = document.getElementById('close');
//evento para cerrar la 
close.addEventListener("click", function(){
	
	//al Hacer clic en el boton x remuevo la clase after
	contenedorBox.classList.remove("after");
	//agrego la clase que tenia antes hidden
	divBotones.classList.add("hidden");
});


//llamo al contenedor div vacio que me reciba la lista paara que me funcione en inline block
var agreeList = document.getElementById('agreeList')
//creo una funcion que haga que en ese boton al hacer clic ocurra que elimine
var save = document.getElementById('save');


//crear la variable v afuera vacia para llamarla en una nueva funcion
save.addEventListener("click", function(){
	//llamo a mi input
	 var lista = document.getElementById('lista').value;

	 //limpio mi lista
	 document.getElementById('lista').value = "";

	
	 //creo div donde ira la lista
	 var newContenedorLista = document.createElement('div');
	 //creo elemento p para meter la lista
	var newLista = document.createElement('p');
	newLista.setAttribute('id', 'tituloList');
	//nodo de texto lista ingresada
	var textoListaElement = document.createTextNode(lista);


	//si el input esta vacio no dejar hacer la lista
	if(lista.length == 0 || lista == null) { // si no hay nada
			//desabilita el boton
		save.disabled = true;// para que se corte ahi la condicion sino sera true y se crea la condicion
	} 
	else{}

	//creo un enlace para añadir mas listas
	var addLista = document.createElement('a');
	addLista.setAttribute('href', '#');
	addLista.setAttribute('id','more');
	var añadirLista = document.createTextNode('Añadir tarea...');


	//ANODAR
	//agrego nodo valor input a su padre p creado
	newLista.appendChild(textoListaElement);
	//agrego link listado añadir
	addLista.appendChild(añadirLista);


	//agrego el p a su padre div creado vacio
	newContenedorLista.appendChild(newLista);
	newContenedorLista.appendChild(addLista);

	//darle estilo al contenedor
	newContenedorLista.classList.add('listaEstilo', 'after');

	//agrego div creado al div HTML
	agreeList.appendChild(newContenedorLista);
	

	//añadir evento textarea


	
});

