
//////////////////////////// FUNZIONI ///////////////////////////////////////


//FUNZIONE PER SCORRERE LE FOTO A DESTRA DEL CAROSELLO
function swipeRight () {

  imgContainerDOMEl[currentImgIndex].classList.remove("active");

  if(currentImgIndex === images.length - 1) {

    currentImgIndex = 0;

  } else {

    currentImgIndex ++;

  }
   
  imgContainerDOMEl[currentImgIndex].classList.add("active");
  
}


// FUNZIONE PER SCORRERE LE FOTO A SINISTRA DEL CAROSELLO
function swipeLeft() {

  imgContainerDOMEl[currentImgIndex].classList.remove("active");

  if(currentImgIndex === 0) {

    currentImgIndex = images.length -1;

  } else {

    currentImgIndex --;

  }

  imgContainerDOMEl[currentImgIndex].classList.add("active");

}


// FUNZIONE CHE MI STAMPA L'ARRAY IN HTML NELL'ELEMENTO CONTAINER
function printArrayInHtml(array) {

for(let i = 0; i < array.length; i++) {
  const image = array[i];
  
  const containerDOMEl = document.querySelector(".container");

  containerDOMEl.innerHTML += 
  ` 
  <div class="img-container">
    <img src="${image.image}">
    <div class="img-text">
    <h2>${image.title}</h2>
    <p>${image.text}</p>
    </div>
  </div>
  ` ;
} 
}


//////////////////////////////// FINE FUNZIONI /////////////////////////////////



// Array di oggetti 
const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},

	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},

	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},

	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},

	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

// Stampo nell'html l'array di oggetti
printArrayInHtml(images);


//Dopo che li ho creati nell'html, vado a prendermi dal DOM tutti gli elementi con la classe img-container
const imgContainerDOMEl = document.querySelectorAll(".img-container");

// Fisso una variabile contatore che parte da 0
let currentImgIndex = 0;

// Rendo quindi visibile solo il primo elemento di default
imgContainerDOMEl[currentImgIndex].classList.add("active");



////////////////////////////////// EVENTI ////////////////////////////////


// Vado a prendere dal DOM la freccia destra e gli aggancio un evento
const rightArrowDOMEl = document.querySelector(".arrow-right");

rightArrowDOMEl.addEventListener("click", function(){

  swipeRight ();

})


// Vado a prendere dal DOM la freccia sinistra e gli aggancio un evento
const leftArrowDOMEl = document.querySelector('.arrow-left');

leftArrowDOMEl.addEventListener('click', function () {

  swipeLeft()

});


////////////////////////////////// FINE EVENTI /////////////////////////////////