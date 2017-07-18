
var home = "index.html";
var resume = "resume.html";
var profile = "profile.html";
var locationLength = location.href.length;


if (location.href.substring(locationLength - home.length, locationLength) == home){
alert("Welcome to my Website!");
}
else if (location.href.substring(locationLength - resume.length, locationLength) == resume){
alert("Welcome to my resume page!");
}


else if (location.href.substring(locationLength - profile.length, locationLength) == profile){
alert("Welcome to my profile page!");
}

else {

}

function up() {
  location.href = "#top";
}
