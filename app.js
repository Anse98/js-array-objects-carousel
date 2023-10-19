
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



// vado a prendermi ogni oggetto uno alla volta
for(let i = 0; i < images.length; i++) {
  const image = images[i];
  
  const containerDOMEl = document.querySelector(".container");

  // ogni oggetto lo stampo nell'html
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


//Dopo che le ho create nell'html, vado a prendermi dal DOM tutti gli elementi con la classe img-container
const imgContainerDOMEl = document.querySelectorAll(".img-container");

// Fisso una variabile contatore che parte da 0
let currentImg = 0;

// Rendo quindi visibile solo il primo elemento di default
imgContainerDOMEl[currentImg].classList.add("active");




// Vado a prendere dal DOM la freccia destra e gli aggancio un evento
const rightArrowDOMEl = document.querySelector(".arrow-right");

rightArrowDOMEl.addEventListener("click", function(){

  imgContainerDOMEl[currentImg].classList.remove("active");

  if(currentImg === images.length - 1) {

    currentImg = 0;

  } else {

    currentImg ++;

  }
   
  imgContainerDOMEl[currentImg].classList.add("active");
  
})



// Vado a prendere dal DOM la freccia sinistra e gli aggancio un evento
const leftArrowDOMEl = document.querySelector('.arrow-left');

leftArrowDOMEl.addEventListener('click', function () {

  imgContainerDOMEl[currentImg].classList.remove("active");

  if(currentImg === 0) {

    currentImg = images.length -1;

  } else {

    currentImg --;

  }

  imgContainerDOMEl[currentImg].classList.add("active");

});