
$(document).ready(function(){
    $("#information").click(function(){
    $("#info").fadeToggle("slow");
  });
});

function info(){
  document.getElementById('p1').innerHTML = "<b>Browser:</b> " + navigator.appName;
  document.getElementById('p2').innerHTML = "<b>Browser Application:</b> " + navigator.appCodeName;
  document.getElementById('p3').innerHTML = "<b>Browser Version:</b> " + navigator.appVersion;
  document.getElementById('p4').innerHTML = "<b>User Agent:</b> " + navigator.userAgent;
  document.getElementById('p5').innerHTML = "<b>Operating System:</b> " + navigator.platform;
  if (navigator.javaEnabled() == false){
  document.getElementById('p6').innerHTML = "<b>Is Java Enabled?</b> " + "Please enable Java to allow this " +
  "game to work properly as intended.";
}
else{
  document.getElementById('p6').innerHTML = "<b>Is Java Enabled?</b> " + "Java is enabled. Your download will " +
  "run properly as intended."
}
}

var fault = true;
var win32 = false;
var win64 = false;
var mac32 = false;
var mac64 = false;
var linux32 = false;
var linux64 = false;

function move() {
  var x = document.getElementById("mySelect");
    var i = x.selectedIndex;
    text = x.options[i].text;
    document.getElementById("demo").innerHTML = text;
    if (text == "Windows 32 Bit"){
      fault = false;
      win32 = true;
      win64 = false;
      mac32 = false;
      mac64 = false;
      linux32 = false;
      linux64 = false;
    }
    else if (text == "Windows 64 Bit") {
      fault = false;
      win32 = false;
      win64 = true;
      mac32 = false;
      mac64 = false;
      linux32 = false;
      linux64 = false;
    }
    else if (text == "Macosx 32 Bit") {
      fault = false;
      win32 = false;
      win64 = false;
      mac32 = true;
      mac64 = false;
      linux32 = false;
      linux64 = false;
    }
    else if (text == "Macosx 64 Bit") {
      fault = false;
      win32 = false;
      win64 = false;
      mac32 = false;
      mac64 = true;
      linux32 = false;
      linux64 = false;
    }
    else if (text == "Linux 32 Bit") {
      fault = false;
      win32 = false;
      win64 = false;
      mac32 = false;
      mac64 = false;
      linux32 = true;
      linux64 = false;
    }
    else if (text == "Linux 64 Bit") {
      fault = false;
      win32 = false;
      win64 = false;
      mac32 = false;
      mac64 = false;
      linux32 = false;
      linux64 = true;
    }
    else {
      fault = true;
    }
}

function moveDownload(){
  if (win32 == true){
    var location = document.getElementById("location").href;
    location = "game/move/windows 32/move.zip";
    document.getElementById("location").href = location;
  }
  else if (win64 == true) {
    var location = document.getElementById("location").href;
    location = "game/move/windows 64/move.zip";
    document.getElementById("location").href = location;
  }
  else if (linux32 == true) {
    var location = document.getElementById("location").href;
    location = "game/move/linux 32/move.zip";
    document.getElementById("location").href = location;
  }
  else if (linux64 == true) {
    var location = document.getElementById("location").href;
    location = "game/move/linux 64/move.zip";
    document.getElementById("location").href = location;
  }
  else if (mac32 == true) {
    /*
    var location = document.getElementById("location").href;
    location += "mac 32/move.zip";
    document.getElementById("location").href = location;
    */
    var location = document.getElementById("location").href;
    location = "";
    document.getElementById("location").href = location;
    document.getElementById("demo").innerHTML = "Currently not available for download, comming soon."
  }
  else if (mac64 == true) {
    /*
    var location = document.getElementById("location").href;
    location += "mac 64/move.zip";
    document.getElementById("location").href = location;
    */
    var location = document.getElementById("location").href;
    location = "";
    document.getElementById("location").href = location;
   document.getElementById("demo").innerHTML = "Currently not available for download, comming soon."
  }
  else{
    var location = document.getElementById("location").href;
    location = "";
    document.getElementById("location").href = location;
    document.getElementById("demo").innerHTML = "Please select an operating system to download this."
  }
}
