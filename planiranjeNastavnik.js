var element = document.getElementById("Naziv");

element.addEventListener('blur', (event) => {
    validirajNaziv(element);
 }, true);




 var element2 = document.getElementById("Pocetak");

 element2.addEventListener('blur', (event) => {
 var broj = document.getElementById("Pocetak");
    validirajPocetak(broj);
  }, true);
  



  var element3 = document.getElementById("Kraj");

  element3.addEventListener('blur', (event) => {
  var broj1 = document.getElementById("Pocetak");
  var broj2 = document.getElementById("Kraj");
    validirajKraj(broj1,broj2)
   }, true);
  



   var element4 = document.getElementById("Tip");

   element4.addEventListener('blur', (event) => {
    var broj3 = document.getElementById("Tip");
    var broj4 = document.getElementById("Pocetak");
    var broj5 = document.getElementById("Kraj");
      validirajTip(broj3,broj4, broj5)
     }, true);