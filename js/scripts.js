
const pathFile  = ["rsc/audio/1audio.wav","rsc/audio/2audio.wav","rsc/audio/3audio.wav","rsc/audio/6audio.wav","rsc/audio/5audio.wav","rsc/audio/4audio.wav","rsc/audio/7audio.wav","rsc/audio/8audio.wav","rsc/audio/9audio.wav"];
const canciones = ['Border Song - Elton John', 'A Case of You - Joni Mitchell', 'Knockin On Heavens Door - Bob Dylan', 'Lean On Me - Bill Withers', 'Way Over Yonder - Carole King'];

const songList  = ["1audio.mp3"];

const button        = document.querySelector('button');
const btnReproducir  = document.querySelector('#btnReproducir');
const btnHabilitar  = document.querySelector('#btnHabilitar');
const btnBorrar     = document.querySelector('#btnBorrar');
//const btnStop       = document.querySelector('#btnStop');

const listaHTML     = document.getElementById('playList');
const playSong      = document.getElementById('listadoMusica')


// var indiceActual = new Array(1)

// function loadMusic(pathFile){
// 	var source = document.getElementById('source')
// 	//var folder ="audio";//Carpeta donde tenemos almancenada la musica
// 	source.src= pathFile;
// 	var index= indiceActual[0]= canciones.indexOf(pathFile);
// 	removeActive()
// 	var item=document.getElementById(index);
// 	item.classList.add("active");
// 	//reproduccionActual("Reproduciendo: "+ pathFile);
// 	player.load();
// }

// //Funcion para remover todas las clases css activas
// function removeActive(){
// 	var elems = document.querySelectorAll(".active");
//  	 [].forEach.call(elems, function(el) {
//     	el.classList.remove("active");
//  	 });
//  	 return elems
// }


// LISTA DE CANCIONES EN DOM
const crearPlaylist = () => {
    const listado = document.createElement('ol');
    listado.setAttribute('id', 'listadoMusica');
    for( const i of canciones.keys()){
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(canciones[i]));
        item.setAttribute('id', canciones.indexOf(canciones[i]));
        listado.appendChild(item);
    }
    return listado;
}
listaHTML.appendChild(crearPlaylist());
///

// LISTA DE CANCIONES EN CONSOLA
const listaCanciones = (canciones) => {
    for ( const j of canciones.keys()){
        console.log(j+1,canciones[j]);
    }
}
// Esta linea tambien muestra el menu
// canciones.forEach((song,i) => console.log(`${i+1} ${song}`));
listaCanciones(canciones);
// loadMusic(canciones[0]);

// REPRODUCIR MUSICA CON BOTON
button.onclick = () => {
reproductor();  
}

// HABILITAR CANCIONES
btnHabilitar.addEventListener('click', () => {
    console.clear();
    listaCanciones(canciones);

    consultaNew = window.confirm('Quieres habilitar una cancion?');

    if (consultaNew == true){
        canciones.push(prompt(`INGRESE NOMBRE DE LA CANCION NUEVA\n Esta cancion se ingresara en la posicion ${canciones.length+1}\n Se pueden ingresar ${pathFile.length} canciones `))
        console.clear();
        listaCanciones(canciones);
        listaHTML.innerHTML = '';
        listaHTML.appendChild(crearPlaylist());
    }

});

// BORRAR CANCIONES
btnBorrar.addEventListener('click', () => {
    console.clear();
    listaCanciones(canciones);

    consultaNew = window.confirm('Quieres Borrar una cancion?');

    if (consultaNew == true){
        let itemDelete = parseInt(prompt('Ingrese cancion que desea borrar: ')) - 1;
        console.log(itemDelete);
        //delete(canciones[itemDelete-1]);
        canciones.splice(itemDelete,1)
        listaHTML.innerHTML = '';
        listaHTML.appendChild(crearPlaylist());
        //console.clear();
        listaCanciones(canciones);       
    }
});

// FUNCION PARA REPRODUCIR MUSICA CON BOTON
const reproductor = () => {

    console.clear();
    listaCanciones(canciones);

    let opc = prompt('Ingrese opcion para reproducir: ');
    if (opc>=1 && opc<=(canciones.length)){ 
    
        const audio = new Audio(pathFile[opc-1]);
        const musica = (`Reproduciendo # ${opc} - ${canciones[opc-1]}\n` + audio.play());
        console.log(musica);
        
        audio.addEventListener("play", () => {
            btnReproducir.innerHTML = "Reproduciendo";
            console.log("Musica para tus oidos, disfruta!");
            button.disabled       = true;
            btnBorrar.disabled    = true;
            btnHabilitar.disabled = true; 
        });
        
        audio.addEventListener("pause", () => {
            btnReproducir.innerHTML = "Seleccione Cancion";
            console.log("Se ha terminado la reproducción");
            button.disabled = false;
            btnBorrar.disabled    = false;
            btnHabilitar.disabled = false;   
        });

        setTimeout(() => {
            alert(`♫ Reproduciendo cancion num: ${opc} \n Nombre: ${canciones[opc-1]} \n ♪ disfruta! ♫`);
          }, 500);
    }
    else{
    alert('♫ Ingresa una cancion valida, para disfrutar del reproductor');
    }
    
}




// const updateProgress = () =>{
// 	if (player.currentTime >0){
// 		const barra = document.getElementById('progress')
// 		barra.value = (player.currentTime / player.duration) * 100
		
// 		var duracionSegundos= player.duration.toFixed(0);
// 		dura=secondsToString(duracionSegundos);
// 		var actualSegundos = player.currentTime.toFixed(0)
// 		actual=secondsToString(actualSegundos);
		
// 		duracion= actual +' / '+ dura
// 		document.getElementById('timer').innerText=duracion 
// 	}
// 	if (player.ended){
// 		nextMusic();//Reproducir la siguiente pista
// 	} 
// }




