// querySelector
const heading = document.querySelector('#heading'); //Retorna 0 o 1 Elementos
heading.textContent = 'New Heading';
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); //Retorna todos los elementos
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace';
// enlaces[0].href = 'https://google.com';
enlaces[0].classList.add('clase-nueva');
// enlaces[0].classList.remove('navegacion__enlace');

// getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);


//Generar un nuevo enlace 
const nuevoEnlace = document.createElement('A'); //De preferencia usar mayúsuculas para la etiqueta

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'new enlace';

//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


// Eventos
// console.log(1);

// //load espera a que el JS y los archivos que dependan del HTML esten listos
// window.addEventListener('load', imprimir);

// window.onload = () => console.log(3);

// //DOMContentLoaded solo espera por el HTML, pero no espera CSS o imagenes
// document.addEventListener('DOMContentLoaded', () => console.log(4));

// console.log(5);

// function imprimir(){
//     console.log(2);
// }

// window.onscroll = function(e){
//     console.log(e);
// }


// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario'); //ESTA ASOCIADO AL BOTON
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     //Sirve para validar formularios
//     evento.preventDefault();

//     console.log('Enviando formulario...');
// });



//Eventos de los Inputs y textarea
const datos ={
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario'); //ESTA ASOCIADO AL FORMULARIO (Debe tener un input de tipo submit)


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El Evento de Submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    // Validar formulario
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; //Corta la ejecución del código
    }
    
    // Crear la alerta de Enviar correctamente
    mostrarAlerta('El formulario se envió correctamente');
    
    // Enviar formulario
});


function leerTexto(e){
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value; // los nombres de datos deben llamarse igual a los IDs que se les pase
    //console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alert = document.createElement('P');
    alert.textContent = mensaje;

    if(error){
        alert.classList.add('error');
    }else{
        alert.classList.add('correcto');
    }

    formulario.appendChild(alert);

    //Desaparezca después de 5 segundos
    setTimeout(() => alert.remove(), 5000);
}

