// const Typewriter = function(txtElement, words, wait = 3000) {
// this.txtElement = txtElement;
// this.words = words;
// this.txt = '';
// this.wordIndex = 0;
// this.wait = parseInt(wait, 10);
// this.type();
// this.isDeleting = false
// 
// }
// 
// Type Method
// Typewriter.prototype.type = function () {
//Current index of word 
// const current = this.wordIndex % this.words.length;
// Get full text of current word
// const fullTxt = this.words[current]; 
// 
// check if deleting 
// if(this.isDeleting) {
//removechar
// this.txt = fullTxt.substring(0, this.txt.length -1);
// 
//   }  else {
//add char
// this.txt = fullTxt.substring(0, this.txt.length +1);
//     }
// 
// insert text
// this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`; 
// 
// Typespeed
// let typeSpeed = 300;
// 
// if(this.isDeleting) { 
// typeSpeed /=2;
// }
// 
// check work complete
// if(! this.isDeleting && this.txt === fullTxt) { 
//     //will pause at end
//     typeSpeed = this.wait;
//set delete to true
// this.isDeleting = true;
// } else if( this.isDeleting && this.txt === ''){
// this.isDeleting = false;
// this.wordIndex++;
//pause before typing
// typeSpeed = 500;
// }
// 
// setTimeout(() => this.type(), typeSpeed)
// }



class Typewriter {
constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 5);
    this.type();
    this.isDeleting = false
}

type() {
    const current = this.wordIndex % this.words.length;
// Get full text of current word
const fullTxt = this.words[current]; 

// check if deleting 
if(this.isDeleting) {
//removechar
this.txt = fullTxt.substring(0, this.txt.length -1);

  }  else {
//add char
this.txt = fullTxt.substring(0, this.txt.length +1);
    }

// insert text
this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`; 

// Typespeed
let typeSpeed = 300;

if(this.isDeleting) { 
typeSpeed /=2;
}

// check work complete
if(! this.isDeleting && this.txt === fullTxt) { 
    //will pause at end
    typeSpeed = this.wait;
//set delete to true
this.isDeleting = true;
} else if( this.isDeleting && this.txt === ''){
this.isDeleting = false;
this.wordIndex++;
//pause before typing
typeSpeed = 300;
}

setTimeout(() => this.type(), typeSpeed)
}
}


// Init on DOM load
document.addEventListener('DOMContentLoaded', init); 

//Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Init Typewriter 

    new Typewriter(txtElement, words, wait);
}