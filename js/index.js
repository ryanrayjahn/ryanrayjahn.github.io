var clickp = 0;
var clickc = 0;
var clickb = 0;
var clickv = 0;
var clickh = 0;
var clickpo = 0;
var clickm = 0;
var clicks = 0;



function myFunction(){

  clicks++;
  if (clicks >= 11){
    clicks = 0;
  }
  if (clicks == 0){
document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd72fivorROnLsap72h1YevnYAmlMNXLD--JWR-I0YB8MWMJvjrg')";
}
  if  (clicks == 1){
  document.body.style.backgroundColor = "red";
  document.body.style.backgroundImage = "none";
}
  if (clicks == 2){
  document.body.style.backgroundColor = "orange";
  }
  if (clicks == 3){
  document.body.style.backgroundColor = "yellow";
  }
  if (clicks == 4){
  document.body.style.backgroundColor = "pink";
  }
  if (clicks == 5){
  document.body.style.backgroundColor = "purple";
  }
  if (clicks == 6){
  document.body.style.backgroundColor = "indigo";
  }
  if (clicks == 7){
  document.body.style.backgroundColor = "blue";
  }
  if (clicks == 8){
  document.body.style.backgroundColor = "grey";
  }
  if (clicks == 9){
  document.body.style.backgroundColor = "black";
  }
  if (clicks == 10){
  document.body.style.backgroundColor = "white";
  }
}


$(document).ready(function(){
    $("#credits").click(function(){
    $("#credit").fadeToggle("slow");
 });
    $("#button").click(function(){
        if (clicks == 1){
          $("#hire1").fadeIn("slow");
        }
        else if (clicks == 2) {
          $("#hire1").fadeOut("slow");
          $("#hire2").fadeIn("slow");
        }
        else if (clicks == 3) {
          $("#hire2").fadeOut("slow");
          $("#hire3").fadeIn("slow");
        }
        else if (clicks == 4) {
          $("#hire3").fadeOut("slow");
          $("#hire4").fadeIn("slow");
        }
        else if (clicks == 5) {
          $("#hire4").fadeOut("slow");
          $("#hire5").fadeIn("slow");
        }
        else if (clicks == 6) {
          $("#hire5").fadeOut("slow");
          $("#hire6").fadeIn("slow");
        }
        else if (clicks == 7) {
          $("#hire6").fadeOut("slow");
          $("#hire7").fadeIn("slow");
        }
        else if (clicks == 8) {
          $("#hire7").fadeOut("slow");
          $("#hire8").fadeIn("slow");
        }
        else if (clicks == 9) {
          $("#hire8").fadeOut("slow");
          $("#hire9").fadeIn("slow");
        }
        else if (clicks == 10) {
          $("#hire9").fadeOut("slow");
          $("#hire10").fadeIn("slow");
        }
        else if (clicks == 0) {
          $("#hire10").fadeOut("slow");
          $("#hire1").fadeIn("slow");
        }

        });
    });



function hide(){
  document.getElementById('Haunters').style.visibility = "hidden";
}

function show() {
document.getElementById('Haunters').style.visibility = "visible";
}

function pikachuOn(){
  document.getElementById('Pikachu').src = "http://www.gifimagesdownload.com/wp-content/uploads/2016/03/Pokemon-gif-yellow.gif";
}

function pikachuOff(){
  document.getElementById('Pikachu').src = "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png";
}

function charizardOn(){
  document.getElementById('Charizard').src = "http://i.imgur.com/wzdU7Cd.gif";
}

function charizardOff(){
  document.getElementById('Charizard').src = "https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png";
}

function blastoiseOn(){
  document.getElementById('Blastoise').src = "https://media.giphy.com/media/14680Fohw5Zd8Q/giphy.gif";
}

function blastoiseOff(){
  document.getElementById('Blastoise').src = "https://cdn.bulbagarden.net/upload/thumb/0/02/Blasty.png/230px-Blasty.png";
}


function Pikachu(){
  clickp++;
  if (clickp % 2 == 1){
  document.getElementById('Pikachu').style.visibility = "hidden";
  document.getElementById('Pikachu').style.display = "none";
  var pikachu = "Pikchu is a yellow pokemon own by Ash a pokemon trainer. He can shoot lightning bolts from his tail.";
  document.getElementById('Pikachus').innerHTML = pikachu;
 }
 else {
 document.getElementById('Pikachu').style.visibility = "visible";
 document.getElementById('Pikachu').style.display = "block";
document.getElementById('Pikachus').innerHTML = "";
 }
}

function Charizard(){
  clickc++;
  if (clickc % 2 == 1){
  document.getElementById('Charizard').style.visibility = "hidden";
  document.getElementById('Charizard').style.display = "none";
  var charizard = "Charizard is a dragon pokemon that can breathe fire and has the ability to fly.";
  document.getElementById('Charizards').innerHTML = charizard;
 }
 else {
 document.getElementById('Charizard').style.visibility = "visible";
 document.getElementById('Charizard').style.display = "block";
 document.getElementById('Charizards').innerHTML = "";
 }
}

function Blastoise(){
  clickb++;
  if (clickb % 2 == 1){
  document.getElementById('Blastoise').style.visibility = "hidden";
  document.getElementById('Blastoise').style.display = "none";
  var blastoise= "Blastoise is a tortise like pokemon which can squirt water out of his powerful cannon.";
  document.getElementById('Blastoises').innerHTML = blastoise;
 }
 else {
 document.getElementById('Blastoise').style.visibility = "visible";
 document.getElementById('Blastoise').style.display = "block";
   document.getElementById('Blastoises').innerHTML = "";
 }
}

function Venusaur(){
  clickv++;
  if (clickv % 2 == 1){
  document.getElementById('Venusaur').style.visibility = "hidden";
  document.getElementById('Venusaur').style.display = "none";
  var venusaur = "Venusaur is a plant pokemon which can shoot vines out of his back.";
  document.getElementById('Venusaurs').innerHTML = venusaur;
 }
 else {
 document.getElementById('Venusaur').style.visibility = "visible";
 document.getElementById('Venusaur').style.display = "block";
   document.getElementById('Venusaurs').innerHTML = "";
 }
}

function Haunterin(){
  document.getElementById('ghost').style.visibility = "hidden";
  document.getElementById('ghost').style.display = "none";
  var haunter = "Haunter is a ghost pokemon which can disappear before your very eyes.";
  document.getElementById('Haunters').innerHTML = haunter;
 }

 function Haunterout() {
 document.getElementById('ghost').style.visibility = "visible";
 document.getElementById('ghost').style.display = "block";
 document.getElementById('Haunters').innerHTML = "";
 }


function Porygon(){
  clickpo++;
  if (clickpo % 2 == 1){
  document.getElementById('Porygon').style.visibility = "hidden";
  document.getElementById('Porygon').style.display = "none";
  var haunter = "Porygon is a shape shifting pokemon which can disfigure his shape.";
  document.getElementById('Porygons').innerHTML = haunter;
 }
 else {
 document.getElementById('Porygon').style.visibility = "visible";
 document.getElementById('Porygon').style.display = "block";
 document.getElementById('Porygons').innerHTML = "";
 }
}

  number = 40;
  document.getElementById("scale").value = number;
  document.getElementById("number").value = number;
function increaseScale(){
  number = document.getElementById("scale").value;
  document.getElementById("number").value = document.getElementById("scale").value;
  document.getElementById("hire").style.fontSize = number.toString() + "px";
}

function increaseNumber(){
  number = document.getElementById("number").value;
  document.getElementById("scale").value = document.getElementById("number").value;
  if (number > 80){
    number = 80;
    document.getElementById("number").value = number;
  }
  if (number < 30){
    number = 30;
    document.getElementById("number").value = number;
  }
  document.getElementById("hire").style.fontSize = number.toString() + "px";
}
