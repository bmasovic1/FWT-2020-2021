function validirajNaziv(ieNaziv){
    
    var a = ieNaziv.value;
    var c=0;
    
    var re = new RegExp("^([A-Z]{2,4}[A-Z0-9]{0,1})$");
    if (re.test(a)) {
        c=1;
    } 
    
    
    if(c==0 || ieNaziv.value.length <= 1 || ieNaziv.value.length >= 6){
        ieNaziv.style.backgroundColor="rgb(255, 80, 80)";
    }
    else{
        ieNaziv.style.backgroundColor="lightgreen";
    }

}

function validirajPocetak(iePocetak) {
  
    var broj = iePocetak.value;
   
      var b = broj.substring(0,2);
  
      if(b=='20' || b=='21' || b=='22' || b=='23'){
          iePocetak.style.backgroundColor="rgb(255, 80, 80)";
      }
      else{
          iePocetak.style.backgroundColor="lightgreen";
      }
    
  }

  function validirajKraj(iePocetak,ieKraj) {
    var broj1 = iePocetak.value;
    var broj2 = ieKraj.value;
      if(broj1>broj2){
          ieKraj.style.backgroundColor="rgb(255, 80, 80)";
      }
      else{
          ieKraj.style.backgroundColor="lightgreen";
      }
  }





function validirajTip(ieTip,iePocetak,ieKraj){

    var a = ieTip.value;
    var a1 = iePocetak.value;
    var a2 = ieKraj.value;
    
    var b1 = a1.substring(0,2);
    var b2 = a2.substring(0,2);
    var b3 = a1.substring(3,5);
    var b4 = a2.substring(3,5);
    
    var b=b2-b1;
    var c=b4-b3;
    var sat=b*60;
    var sat2=c;
    var u=sat+sat2;
      
  
      if (a=='predavanje' && u>=60 && u<=180) {
        ieTip.style.backgroundColor="lightgreen";
      }
      else if(a=='vježbe' && u>=45 && u<=180){
        ieTip.style.backgroundColor="lightgreen";
      }
      else {
        ieTip.style.backgroundColor="rgb(255, 80, 80)";
      }

}