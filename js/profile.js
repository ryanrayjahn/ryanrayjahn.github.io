var achievement = false;

var experience = false;

var certification = false;

var program = false;



function myFunction() {

  var input, filter, table, tr, td, i;

  input = document.getElementById("searchbox");

  filter = input.value.toUpperCase();

  table = document.getElementById("table");

  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {

    td1 = tr[i].getElementsByTagName("td")[0];

    td2 = tr[i].getElementsByTagName("td")[1];

    td3 = tr[i].getElementsByTagName("td")[2];

    td4 = tr[i].getElementsByTagName("td")[3];

    if (td1) {

      if (achievement == true){
      	if (filter.length < 1){
      	 for (var each = 0; each < document.getElementsByClassName("Achievement").length; each++){
          document.getElementsByClassName("Achievement")[each].style.display = "";
      		document.getElementsByClassName("Experience")[each].style.display = "";
      		document.getElementsByClassName("Certification")[each].style.display = "";
      		document.getElementsByClassName("Program")[each].style.display = "";
      	}
      } 

      else if (td1.innerHTML.toUpperCase().indexOf(filter) > -1 && $("body").outerWidth() < 900){
      	for (var each = 0; each < document.getElementsByClassName("Achievement").length; each++){
      		document.getElementsByClassName("Experience")[each].style.display = "none";
      		document.getElementsByClassName("Certification")[each].style.display = "none";
      		document.getElementsByClassName("Program")[each].style.display = "none";
      	}

      }

      
      if (td1.innerHTML.toUpperCase().indexOf(filter) > -1) {

        tr[i].style.display = "";

      } else {

        tr[i].style.display = "none";

      }

     }

     if (experience == true){

     if (filter.length < 1){
      	 for (var each = 0; each < document.getElementsByClassName("Experience").length; each++){
      		document.getElementsByClassName("Achievement")[each].style.display = "";
          document.getElementsByClassName("Experience")[each].style.display = "";
      		document.getElementsByClassName("Certification")[each].style.display = "";
      		document.getElementsByClassName("Program")[each].style.display = "";
      	}
      } 

    else if (td1.innerHTML.toUpperCase().indexOf(filter) > -1 && $("body").outerWidth() < 900){
      	for (var each = 0; each < document.getElementsByClassName("Experience").length; each++){
      		document.getElementsByClassName("Achievement")[each].style.display = "none";
      		document.getElementsByClassName("Certification")[each].style.display = "none";
      		document.getElementsByClassName("Program")[each].style.display = "none";
      	}

      }


     if (td2.innerHTML.toUpperCase().indexOf(filter) > -1) {

       tr[i].style.display = "";

     } else {

       tr[i].style.display = "none";

     }

    }

    if (certification == true){

    if (filter.length < 1){
      	for (var each = 0; each < document.getElementsByClassName("Certification").length; each++){
      		document.getElementsByClassName("Achievement")[each].style.display = "";
      		document.getElementsByClassName("Experience")[each].style.display = "";
          document.getElementsByClassName("Certification")[each].style.display = "";
      		document.getElementsByClassName("Program")[each].style.display = "";
      	}
    } 

    else if (td1.innerHTML.toUpperCase().indexOf(filter) > -1 && $("body").outerWidth() < 900){
      	for (var each = 0; each < document.getElementsByClassName("Certification").length; each++){
      		document.getElementsByClassName("Achievement")[each].style.display = "none";
      		document.getElementsByClassName("Experience")[each].style.display = "none";
      		document.getElementsByClassName("Program")[each].style.display = "none";
      	}

    }


    if (td3.innerHTML.toUpperCase().indexOf(filter) > -1) {

      tr[i].style.display = "";

    } else {

      tr[i].style.display = "none";

    }

   }

   if (program == true){
   	
    if (filter.length < 1){
      	for (var each = 0; each < document.getElementsByClassName("Program").length; each++){
      		document.getElementsByClassName("Achievement")[each].style.display = "";
      		document.getElementsByClassName("Experience")[each].style.display = "";
      		document.getElementsByClassName("Certification")[each].style.display = "";
          document.getElementsByClassName("Program")[each].style.display = "";
      	}
    } 

    else if (td1.innerHTML.toUpperCase().indexOf(filter) > -1 && $("body").outerWidth() < 900){
      	for (var each = 0; each < document.getElementsByClassName("Program").length; each++){
      		document.getElementsByClassName("Achievement")[each].style.display = "none";
      		document.getElementsByClassName("Experience")[each].style.display = "none";
      		document.getElementsByClassName("Certification")[each].style.display = "none";
      	}

    }


   if (td4.innerHTML.toUpperCase().indexOf(filter) > -1) {

     tr[i].style.display = "";

   } else {

     tr[i].style.display = "none";

   }

  }

    }

  }

}



function achievements(){

   document.getElementById("searchbox").value = "";

   document.getElementById("searchbox").placeholder= "Achievement";

   achievement = true;

   experience = false;

   certification = false;

   program = false;

}



function experiences(){

   document.getElementById("searchbox").value = "";

   document.getElementById("searchbox").placeholder= "Experience";

   achievement = false;

   experience = true;

   certification = false;

   program = false;

}



function certifications(){

   document.getElementById("searchbox").value = "";

   document.getElementById("searchbox").placeholder= "Certification";

   achievement = false;

   experience = false;

   certification = true;

   program = false;

}



function programs(){

   document.getElementById("searchbox").value = "";

   document.getElementById("searchbox").placeholder= "Program";

   achievement = false;

   experience = false;

   certification = false;

   program = true;

}