/* 💚💚💚💚 REPASO:
const card = document.querySelector(".card");
const img = document.querySelector("img");
//me dice que hice un clic
card.onclick = () => {
  console.log("hiciste clic");
};
//e = event -->parametro
card.onclick = (e) => {
  console.log(e);
};

//me dice que hice doble clic
card.ondblckick = () => {
  console.log("hiciste doble clic");
};
//me dice cuando apreto una tecla:
window.onkeydown = () => {
  console.log("hiciste key down");
};
//keyCode le asigna un valor a cada tecla, y una informacion para que sepa que hizo
window.onkeydown = (e) => {
  if (e.keyCode === 13) {
    alert("apretaste enter");
  }
};

// quiero que cuando haga clic a la foto el corazon cambia de clase (rojo)

img.onclick = () => {
  const corazon = document.querySelector(".fa.fa-heart");
  corazon.classList.add("rojo");
};

// window.onkeydown = (e) => {
//   console.log(e.keyCode);
// };

// window.onkeypress = () => {
//   console.log("hiciste key press");
// };

// window.onkeyup = () => {
//   console.log("hiciste key up");
// };

// card.onmouseenter = () => {
//   console.log("el mouse entro");
// };

// card.onmouseleave = () => {
//   console.log("el mouse salio");
// };

*/

// 😀 Ejercicio resolucion:

// 💚 playList
// Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada

// const cualquierCosa = document.querySelector("algo");
// cualquierCosa.textContent = "otro texto que antes no estaba ahi";

//una forma de resolverlo seria:

/*
const cancion1 = prompt("decime una cancion");
const cancion2 = prompt("decime una cancion");
const cancion3 = prompt("decime una cancion");
const cancion4 = prompt("decime una cancion");
const cancion5 = prompt("decime una cancion");

const primerLi = document.getElementById("uno"); // -->guardo en la constante primerLi segun su ID
const segundoLi = document.getElementById("dos");
const terceroLi = document.getElementById("tres");
const cuartoLi = document.getElementById("cuatro");
const quintoLi = document.getElementById("cinco");

primerLi.textContent = cancion1; //-->textContent agrega a la lista la cancion guardada
segundoLi.textContent = cancion2;
terceroLi.textContent = cancion3;
cuartoLi.textContent = cancion4;
quintoLi.textContent = cancion5;
*/

//💚 💚 otra forma resolver:

/*
const cancion1 = prompt("Ingresa el nombre de tu primer cancion favorita");
const cancion2 = prompt("Ingresa el nombre de tu segunda cancion favorita");
const cancion3 = prompt("Ingresa el nombre de tu tercer cancion favorita");
const cancion4 = prompt("Ingresa el nombre de tu cuarto cancion favorita");
const cancion5 = prompt("Ingresa el nombre de tu quinta cancion favorita");

const lis = document.getElementsByTagName("li");

console.log(lis);

lis[0].textContent = cancion1;
lis[1].textContent = cancion2;
lis[2].textContent = cancion3;
lis[3].textContent = cancion4;
lis[4].textContent = cancion5;
*/

// let uno = prompt("Ingresa el nombre de tu primer cancion favorita");
// document.getElementById("uno").innerHTML = uno;

// let dos = prompt("Ingresa el nombre de tu segunda cancion favorita");
// document.getElementById("dos").innerHTML = dos;

// let tres = prompt("Ingresa el nombre de tu tercer cancion favorita");
// document.getElementById("tres").innerHTML = tres;

// let cuatro = prompt("Ingresa el nombre de tu cuarta cancion favorita");
// document.getElementById("cuatro").innerHTML = cuatro;

// let cinco = prompt("Ingresa el nombre de tu quinta cancion favorita");
// document.getElementById("cinco").innerHTML = cinco;

//😀 Ejercicio:
/*
 💚 adivinanza:
1. Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, 

2. y el botón seleccionado debe ponerse con un color de fondo verde. 

3. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) 

4. y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.
*/

const primerBoton = document.getElementById("boton1");
const segundoBoton = document.getElementById("boton2");
const tercerBoton = document.getElementById("boton3");
const resultado = document.getElementById("resultadoCorrecto");

primerBoton.onclick = () => {
  const botonVerde = document.querySelector("#boton1");
  botonVerde.classList.add("verde");
  resultado.textContent = "CORRECTO!!!!!";
};

segundoBoton.onclick = () => {
  const botonVerde = document.querySelector("#boton1");
  botonVerde.classList.add("verde");
  const botonRojo1 = document.querySelector("#boton2");
  botonRojo1.classList.add("rojo");
  const botonRojo2 = document.querySelector("#boton3");
  botonRojo2.classList.add("rojo");
  resultado.textContent = "INCORRECTO :(";
};

tercerBoton.onclick = () => {
  const botonVerde = document.querySelector("#boton1");
  botonVerde.classList.add("verde");
  const botonRojo1 = document.querySelector("#boton2");
  botonRojo1.classList.add("rojo");
  const botonRojo2 = document.querySelector("#boton3");
  botonRojo2.classList.add("rojo");
  resultado.textContent = "INCORRECTO no no no";
};

/*
😀 Ejercicio 💚 contador

Crear un documento `html` que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. 

Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

😀 💚 paleta ---> ejercicio combinado
Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.
*/

const botonMenosU = document.querySelector(".menosUno");
const botonMasU = document.querySelector(".masUno");
const botonMenosC = document.querySelector(".menosCinco");
const botonMasC = document.querySelector(".masCinco");
const botonMenosD = document.querySelector(".menosDiez");
const botonMasD = document.querySelector(".masDiez");
const numeroTotal = document.querySelector("#numero");
const colorMarco = document.querySelector(".marco-color");

let numeroString = numeroTotal.textContent;

botonMenosU.onclick = () => {
  colorMarco.className = "";
  colorMarco.classList.add("menosUno");
  const resta = (numeroString -= 1);
  numeroTotal.textContent = resta;
};

botonMasU.onclick = () => {
  colorMarco.className = "";
  colorMarco.classList.add("masUno");
  const suma = (numeroString += 1);
  numeroTotal.textContent = suma;
};

botonMenosC.onclick = () => {
  colorMarco.className = "";
  colorMarco.classList.add("menosCinco");
  const resta = (numeroString -= 5);
  numeroTotal.textContent = resta;
};

botonMasC.onclick = () => {
  colorMarco.className = "";
  colorMarco.classList.add("masCinco");
  const suma = (numeroString += 5);
  numeroTotal.textContent = suma;
};

botonMenosD.onclick = () => {
  colorMarco.className = "";
  colorMarco.classList.add("menosDiez");
  const resta = (numeroString -= 10);
  numeroTotal.textContent = resta;
};

botonMasD.onclick = () => {
  colorMarco.className = "";
  colorMarco.classList.add("masDiez");
  const suma = (numeroString += 10);
  numeroTotal.textContent = suma;
};

// 😀 💚 email (sin leer)
// Crear un documento html que tenga:

// un título h1 que diga: Mis emails
// un título h2 que diga: Bandeja de entrada
// una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
// Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)

const li1 = document.querySelector("#li1");
const li2 = document.querySelector("#li2");
const li3 = document.querySelector("#li3");
const li4 = document.querySelector("#li4");
const li5 = document.querySelector("#li5");
const li6 = document.querySelector("#li6");
const li7 = document.querySelector("#li7");
const li8 = document.querySelector("#li8");
const li9 = document.querySelector("#li9");
const li10 = document.querySelector("#li10");

li1.onclick = () => {
  li1.classList.remove("negrita");
  li1.classList.add("gris");
};
li2.onclick = () => {
  li2.classList.remove("negrita");
  li2.classList.add("gris");
};
li3.onclick = () => {
  li3.classList.remove("negrita");
  li3.classList.add("gris");
};
li4.onclick = () => {
  li4.classList.remove("negrita");
  li4.classList.add("gris");
};
li5.onclick = () => {
  li5.classList.remove("negrita");
  li5.classList.add("gris");
};
li6.onclick = () => {
  li6.classList.remove("negrita");
  li6.classList.add("gris");
};
li7.onclick = () => {
  li7.classList.remove("negrita");
  li7.classList.add("gris");
};
li8.onclick = () => {
  li8.classList.remove("negrita");
  li8.classList.add("gris");
};
li9.onclick = () => {
  li9.classList.remove("negrita");
  li9.classList.add("gris");
};
li10.onclick = () => {
  li10.classList.remove("negrita");
  li10.classList.add("gris");
};

// 😀 💚 progreso
// Crear un documento html con
// una barra de progreso (con un div dentro de otro)
// un elemento de texto que indique el progreso (p. ej. 50%)
// dos botones, uno para incrementar y otro para dismininuir la barra (- y +)
// cuando se apretan los botones, la barra de progreso tiene que aumentar o disminuir respectivamente y el texto que indica el porcentaje de progreso tiene que actualizarse
// lo mismo tiene que pasar cuando se apreta la flecha derecha (aumentar progreso) y la flecha izquierda (disminuir progreso)
// el incremento/decremento es del 10%

const barra = document.querySelector("#progreso");
const porcentaje = document.querySelector("#porcentaje");
const botonMenos = document.querySelector("#menos");
const botonMas = document.querySelector("#mas");

let numeroPorcentaje = porcentaje.textContent;
let numeroPorcentaje2 = Number(numeroPorcentaje);

const funcionPorcentuaje = () => {
  if (numeroPorcentaje2 == 10) {
    barra.className = "";
    barra.classList.add("diez");
  }
  if (numeroPorcentaje2 == 20) {
    barra.className = "";
    barra.classList.add("veinte");
  }
  if (numeroPorcentaje2 == 30) {
    barra.className = "";
    barra.classList.add("treinta");
  }
  if (numeroPorcentaje2 == 40) {
    barra.className = "";
    barra.classList.add("cuarenta");
  }
  if (numeroPorcentaje2 == 50) {
    barra.className = "";
    barra.classList.add("cincuenta");
  }
  if (numeroPorcentaje2 == 60) {
    barra.className = "";
    barra.classList.add("sesenta");
  }
  if (numeroPorcentaje2 == 70) {
    barra.className = "";
    barra.classList.add("setenta");
  }
  if (numeroPorcentaje2 == 80) {
    barra.className = "";
    barra.classList.add("ochenta");
  }
  if (numeroPorcentaje2 == 90) {
    barra.className = "";
    barra.classList.add("noventa");
  }
  if (numeroPorcentaje2 == 100) {
    barra.className = "";
    barra.classList.add("cien");
  } else {
    barra.classList.add("barrita");
  }
};

botonMenos.onclick = () => {
  const restar = (numeroPorcentaje2 -= 10);
  porcentaje.textContent = restar;
  funcionPorcentuaje();
};
botonMas.onclick = () => {
  const sumar = (numeroPorcentaje2 += 10);
  porcentaje.textContent = sumar;
  funcionPorcentuaje();
};

//😀 💚 modo-oscuro
// Crear un documento html con un título, un párrafo y un bótón con un ícono. Centrar los elementos, cambiar los tamañas y tipografía del texto y tamaño del ícono. Hacer que el body ocupe toda la pantalla. Al clickear el botón, debe alternar entre modo oscuro y modo claro:

// modo oscuro: body con color de fondo negro, texto e ícono con color blanco, ícono de sol
// modo claro: body con color de fondo blanco, texto e ícono con color negro, ícono de luna

const botonOscuro = document.querySelector("#oscuro");
const botonClaro = document.querySelector("#claro");
const body = document.querySelector("body");

botonOscuro.onclick = () => {
  body.classList.add("oscuro-encendido");
  botonOscuro.classList.add("ocultar");
  botonClaro.classList.remove("ocultar");
};

botonClaro.onclick = () => {
  body.classList.remove("oscuro-encendido");
  botonOscuro.classList.remove("ocultar");
  botonClaro.classList.add("ocultar");
};

// scroll
// Crear un documento html con un body de 2000px de alto. Cuando se scrollea el body, cambiar el color de fondo cada 500px, por ejemplo:

// Scroll	Color de fondo
// 0px - 500px	red
// 501px - 1000px	green
// 1001px - 1500px	blue
// 1501px - 2000px	orange

window.onscroll = () => {
  if (
    document.documentElement.scrollTop <= 50 ||
    document.documentElement.scrollTop <= 50
  ) {
    document.getElementById("body").className = "scroll-0-50";
  }
  if (
    document.body.scrollTop >= 51 ||
    document.documentElement.scrollTop >= 51
  ) {
    document.getElementById("body").className = "scroll-51-100";
  }
  if (
    document.body.scrollTop >= 101 ||
    document.documentElement.scrollTop >= 101
  ) {
    document.getElementById("body").className = "scroll-101-150";
  }
  if (
    document.body.scrollTop >= 151 ||
    document.documentElement.scrollTop >= 151
  ) {
    document.getElementById("body").className = "scroll-151-200";
  }
};

/*

😀imagenes
Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.

😀imagenes-2
Repetir el ejercicio anterior, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas, hacerlo cuando se pasa el mouse por encima de las imágenes chicas.

😀peliculas
Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes de películas de 3 géneros (acción, aventura, ciencia ficción, comedia, etc), 4 películas por género. Agregar al documento un botón por cada género, y un botón que diga Todas. Cuando se clickea el botón de un género, se tienen que mostrar sólo las películas correspondientes a ese género. Cuando se clickea el botón Todas se tienen que mostrar todas las películas.

😀pin
En un documento html crear botones con números del 0 al 9, un botón para reiniciar, un botón para borrar, y un elemento de texto.
Cuando se presionan los botones de números, se tienen que ir agregando los números en el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, se tiene que mostrar "13".
El máximo de dígitos que se pueden ingresar es 6, cuando ya hay 6 dígitos ingresados y se clickea un nuevo número, no debe pasar nada.
El botón de reiniciar debe borrar todos los dígitos del elemento de texto.
El botón de borrar debe borrar el último dígito del elemento de texto. Por ejemplo, si el pin ingresado es 2544 y se presiona la tecla borrar, debe quedar en 254.

😀favoritos
Crear dos contenedores, uno para imágenes y otro para favoritos. En el contenedor de imágenes, agregar al menos 10 imágenes (cualesquiera). Al clickear una imagen en el contenedor de imágenes, se debe agregar la misma imagen en el contenedor de favoritos. Al clickear una imagen en el contenedor de favoritos, se debe eliminar la imagen seleccionada de dicho contenedor.

😀color-aleatorio
Hacer un programa que al apretar la tecla espacio, cambie el color de fondo del body por un color aleatorio. Para eso, crear una función obtenerColorAleatorio() que devuelva un string con el formato de ejemplo rgb(0,0,0) donde los valores de r, g y b se generan aleatoriamente (con números del 1 al 255).

😀adivinar-numero
Crear un programa que genere un número aleatorio entre 0 y 9. Cuando se presiona un número en el teclado, el programa debe mostrar en el documento html un mensaje:

si el número seleccionado es más grande que el número aleatorio generado, debe mostrar El número es más chico
si el número seleccionado es más chico que el número aleatorio generado, debe mostrar El número es más grande
si el número seleccionado es igual al número aleatorio generado, debe mostrar Adivinaste.
El mensaje también debe incluir el número ingresado (por ejemplo, Número ingresado: 3). El mensaje debe mostrarse en un elemento del documento html, no en un alert.

Por ejemplo:

Número aleatorio: 7 (No se muestra)
Usuario presiona 3
"El número es más grande. Número ingresado: 3"
Usuario presiona 9
"El número es más chico. Número ingresado: 9"
Usuario presiona 7
"Adivinaste. Número ingresado: 7"
El documento también debe tener un botón que diga Reiniciar, que genere un nuevo número y actualice el mensaje para indicarlo (por ejemplo ¡Nueva partida! Presione un número.)
*/
