/*logo */

var emojiSmile = "/pokeicon.png";
var emojiThink = "/openicon.png";
var image = document.querySelector('.ball')
image.src = emojiSmile; // set default

image.addEventListener('mouseover', function() {
  image.src = emojiThink;
  image.style.height = "75px";
});

image.addEventListener('mouseout', function() {
  image.src = emojiSmile;
  image.style.height = "50px";
});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

/* navbar */

var nav = document.querySelector('.topnav')

window.onscroll = function(){
  if (window.pageYOffset > 60) {
    nav.style.background = "rgba(51, 51, 51, 0.685)";
  }
  else {
    nav.style.background = "rgb(32, 32, 32)";
  }
}

//Contact Page

function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("toName").value,
    message: document.getElementById("msg").value,
  };

  emailjs.send('gmail','template_jvvgjxe',tempParams)
  .then(function(res){
    console.log("success", res.status);
  })
}

/* submit button*/

let button = document.querySelector('.button');
let buttonText = document.querySelector('.tick');

const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Submit";

button.addEventListener('click', function() {

  if (buttonText.innerHTML !== "Submit") {
    buttonText.innerHTML = "Submit";
  } else if (buttonText.innerHTML === "Submit") {
    buttonText.innerHTML = tickMark;
  }
  this.classList.toggle('button__circle');
});


function delay (URL) {
  setTimeout( function() { window.location = URL }, 500 );
}
