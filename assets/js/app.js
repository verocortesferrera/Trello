
//llamo en una variable el contenedor padre de mi input
var contenedorBox = document.getElementById('box');
// div que contiene botones save y remove
var divBotones = document.getElementById("buttons");

var lista = document.getElementById('lista');
//variable vacia que recibe link añadir lista
addLista = "";
var newContenedorLista = "";

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

	 //limpio mi lista
	document.getElementById('lista').value = "";
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



	//para crear evento añadir intente hacerlo afuera de esta funcion
	addLista.addEventListener('click', function(){
		//hacer desaparecer el add lista
		addLista.classList.add('hidden');

		//crear input tex area al hacer click
		var textarea = document.createElement('textarea');
		textarea.classList.add('class', 'area');

		//añadir un boton
		var añadir = document.createElement('button');
		var añadirTexto = document.createTextNode('Añadir');

		newContenedorLista.appendChild(textarea);
		añadir.appendChild(añadirTexto);
		newContenedorLista.appendChild(añadir);

		

		//funcion al boton añadir
		añadir.addEventListener('click', function(){
			//introducir input del textarea
			var littleList = textarea.value;
			//limpiar input
			textarea.value = "";

			//si el input esta vacio no dejar hacer la lista
			if(littleList.length == 0 || littleList == null) { // si no hay nada
				//desabilita el boton
				añadir.disabled = true;// para que se corte ahi la condicion sino sera true y se crea la condicion
			} 
			else{}

			//generar un elemento p
			var newLittleList = document.createElement('p');
			newLittleList.setAttribute('class','fondo');
			//crear nodo para input
			var newLittleListContent = document.createTextNode(littleList);

			//unir
			newLittleList.appendChild(newLittleListContent);
			//contenedor padre insertar antes de textarea
			newContenedorLista.insertBefore(newLittleList, textarea);

		})

	})


		
});

var inputText = document.getElementsByTagName('input');
//para bloquear boton si esta vacio
inputText.onkeyup = function(){

//si el input esta vacio no dejar hacer la lista
	if(inputText.length == 0 || inputText == null) { // si no hay nada
			//desabilita el boton
		 save.disabled = true;// para que se corte ahi la condicion sino sera true y se crea la condicion
	} 
	else{}
};