
  var predmet = document.getElementById("Predmet");

  predmet.addEventListener('focus', (event) => {
     document.getElementById("Tip").value=null;
     document.getElementById("Vrijeme").value=null;
     document.getElementById("Dan").value=null;
   }, true);
   
   var tip = document.getElementById("Tip");

   tip.addEventListener('focus', (event) => {
     document.getElementById("Predmet").value=null;
     document.getElementById("Vrijeme").value=null;
     document.getElementById("Dan").value=null;
   }, true);
   
   var vrijeme = document.getElementById("Vrijeme");

   vrijeme.addEventListener('focus', (event) => {
     document.getElementById("Predmet").value=null;
     document.getElementById("Tip").value=null;
     document.getElementById("Dan").value=null;
   }, true);

   var dan = document.getElementById("Dan");

   dan.addEventListener('focus', (event) => {
     document.getElementById("Predmet").value=null;
     document.getElementById("Tip").value=null;
     document.getElementById("Vrijeme").value=null;
   }, true);

 var prvi = document.getElementById("Filtriraj");

 prvi.addEventListener('click', (event) => {
 var pr = document.getElementById("Predmet").value;
 var ti = document.getElementById("Tip").value;
 var vr = document.getElementById("Vrijeme").value;
 var da = document.getElementById("Dan").value;

   if(pr!=""){
    FiltrirajRaspored.filtrirajPredmet(pr);
   }
   if(ti!=""){
    FiltrirajRaspored.filtrirajTip(ti);
   }
   if(vr!=""){
    FiltrirajRaspored.filtrirajTrajanje(vr);
}

    var d = da.substring(0,1);
    var dan= da.substring(1,20);
    if(d=="-"){

        FiltrirajRaspored.filtrirajProslo(dan);
    }else if(d=="+"){
        FiltrirajRaspored.filtrirajBuduce(dan);
    }


  }, true);
  
  