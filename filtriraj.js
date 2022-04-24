let  FiltrirajRaspored = (function() {

  
var  tabela = document.getElementById("tabela");

var  filtrirajPredmet = function (Predmet) {
    var velikaS, tabela, tr, td, i, j, k=0, vrijednost;
    velikaS = Predmet.toUpperCase();
    if(Predmet==""){
        return;
    }
    tabela = document.getElementById("tabela");
    if(tabela==null){
    	console.log("Potrebno je postaviti raaspored.");
        return;
    }
    tr = tabela.getElementsByTagName("tr");
    if(velikaS!="WT" && velikaS!="RMA" && velikaS!="OI" && velikaS!="DM"){
        return;
    }

    for (i = 1; i < tr.length; i++) {
     for(j=0; j<26; j++){
      td = tr[i].getElementsByTagName("td")[j];
      if (td) {
        vrijednost = td.textContent || td.innerText;
        if (vrijednost.toUpperCase().indexOf(velikaS) > -1) {
           if(velikaS=="WT" || velikaS=="RMA" || velikaS=="OI" || velikaS=="DM"){
           }
        }else{
        var c=tabela.rows[i].cells[j].colSpan;
        var a=tabela.rows[i].cells[j].colSpan;
        if(c!=1){
        	tabela.rows[i].cells[j].colSpan="1";
        	tabela.rows[i].cells[j].innerHTML="";
            tabela.rows[i].cells[j].style.backgroundColor="";
			for(var z=1; z<a; z++){
                tabela.rows[i].insertCell(j);
            j++;
            }
        }
        }
      }
     } 
    }
    for (i = 1; i < 6; i++) {
    var h = document.getElementById('tabela').rows[i].cells.length;
     for(j=1; j<h; j++){
      var x=tabela.rows[i].cells[j].style.borderRight;
       if(j%2!=0 && x!="dashed"){
        tabela.rows[i].cells[j].style.borderRight="dashed";
       }
     }
   }
  }

  
  var  filtrirajTip = function  (Tip) {
    var velikaS, tabela, tr, td, i, j, k=0, vrijednost;
    velikaS = Tip.toUpperCase();
    tabela = document.getElementById("tabela");
    if(velikaS!="PREDAVANJE" && velikaS!="VJEŽBE" && velikaS!="TUTORIJAL"){
      return;
    }
   
    tr = tabela.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
     for(j=0; j<26; j++){
      td = tr[i].getElementsByTagName("td")[j];
      if (td) {
        vrijednost = td.textContent || td.innerText;
        if (vrijednost.toUpperCase().indexOf(velikaS) > -1) {
           if(velikaS=="PREDAVANJE" || velikaS=="VJEŽBE" || velikaS=="TUTORIJAL"){
           }
        }else{
        var c=tabela.rows[i].cells[j].colSpan;
        var a=tabela.rows[i].cells[j].colSpan;
        if(c!=1){
        	tabela.rows[i].cells[j].colSpan="1";
        	tabela.rows[i].cells[j].innerHTML="";
            tabela.rows[i].cells[j].style.backgroundColor="";
			for(var z=1; z<a; z++){
                tabela.rows[i].insertCell(j);
            j++;
            }
        }
        }
      }
     } 
    }
    for (i = 1; i < 6; i++) {
    var h = document.getElementById('tabela').rows[i].cells.length;
     for(j=1; j<h; j++){
      var x=tabela.rows[i].cells[j].style.borderRight;
       if(j%2!=0 && x!="dashed"){
        tabela.rows[i].cells[j].style.borderRight="dashed";
       }
     }
   }
  }
  





  function filtrirajTrajanje (Trajanje) {
      var velikaS, tr, td, i, j, k=0, vrijednost;
      tr = tabela.getElementsByTagName("tr");
      for (i = 1; i < tr.length; i++) {
       for(j=1; j<26; j++){
        td = tr[i].getElementsByTagName("td")[j];
        if (td) {
          vrijednost = td.textContent || td.innerText;
          var d = tabela.rows[i].cells[j].colSpan;
          d=d*30;
             if(d<=Trajanje && d>30){
             }
             else{
              var c=tabela.rows[i].cells[j].colSpan;
              var a=tabela.rows[i].cells[j].colSpan;
              if(c!=1){
                tabela.rows[i].cells[j].colSpan="1";
                tabela.rows[i].cells[j].innerHTML="";
                  tabela.rows[i].cells[j].style.backgroundColor="";
                  for(var z=1; z<a; z++){
                    tabela.rows[i].insertCell(j);
                  j++;
                  }
              }
              }
          }     
    }
  }      
      for (i = 1; i < 6; i++) {
      var h = document.getElementById('tabela').rows[i].cells.length;
       for(j=1; j<h; j++){
        var x=tabela.rows[i].cells[j].style.borderRight;
         if(j%2!=0 && x!="dashed"){
            tabela.rows[i].cells[j].style.borderRight="dashed";
         }
       }
     }
    }
    
  


   
   var  filtrirajProslo = function (Proslo) {
    var velikaS, tr, td, i=1, j, k=0, vrijednost;
    velikaS = Proslo.toUpperCase();
    tr = tabela.getElementsByTagName("tr");	
    if(velikaS=="UTORAK"){
    	k=2;
    }
    if(velikaS=="SRIJEDA"){
    	k=3;
    }
    if(velikaS=="ČETVRTAK"){
    	k=4;
    }
    if(velikaS=="PETAK"){
    	k=5;
    }
    for (i+a ; i < tr.length; i++) {
    for(j=0; j<26; j++){
      td = tr[i].getElementsByTagName("td")[j];
      if (td) {
        vrijednost = td.textContent || td.innerText;
        if(i<k){     
        var c=tabela.rows[i].cells[j].colSpan;
        var a=tabela.rows[i].cells[j].colSpan;
        	if(c!=1){
                tabela.rows[i].cells[j].colSpan="1";
                tabela.rows[i].cells[j].innerHTML="";
                tabela.rows[i].cells[j].style.backgroundColor="";
				for(var z=1; z<a; z++){
                    tabela.rows[i].insertCell(j);
            	    j++;
            	}
        	}
        	}
      	}
  } 
}
    for (i = 1; i < 6; i++) {
    var h = document.getElementById('tabela').rows[i].cells.length;
     for(j=1; j<h; j++){
      var x=tabela.rows[i].cells[j].style.borderRight;
       if(j%2!=0 && x!="dashed"){
        tabela.rows[i].cells[j].style.borderRight="dashed";
       }
     }
   } 
  }
  



  
  var  filtrirajBuduce = function  (Buduce) {
    var velikaS, tr, td, i=1, j, k=0, vrijednost;
    velikaS = Buduce.toUpperCase();
    tr = tabela.getElementsByTagName("tr");	
    if(velikaS=="PONEDELJAK"){
    	k=1;
    }
    if(velikaS=="UTORAK"){
    	k=2;
    }
    if(velikaS=="SRIJEDA"){
    	k=3;
    }
    if(velikaS=="ČETVRTAK"){
    	k=4;
    }
    if(velikaS=="PETAK"){
    	k=5;
    }
    for (i+a ; i < tr.length; i++) {
    for(j=0; j<26; j++){
      td = tr[i].getElementsByTagName("td")[j];
      if (td) {
        vrijednost = td.textContent || td.innerText;
        if(i>k){     
        var c=tabela.rows[i].cells[j].colSpan;
        var a=tabela.rows[i].cells[j].colSpan;
        	if(c!=1){
                tabela.rows[i].cells[j].colSpan="1";
                tabela.rows[i].cells[j].innerHTML="";
                tabela.rows[i].cells[j].style.backgroundColor="";
				for(var z=1; z<a; z++){
                    tabela.rows[i].insertCell(j);
            	    j++;
            	}
        	}
        	}
      	}
  } 
}
    for (i = 1; i < 6; i++) {
    var h = document.getElementById('tabela').rows[i].cells.length;
     for(j=1; j<h; j++){
      var x=tabela.rows[i].cells[j].style.borderRight;
       if(j%2!=0 && x!="dashed"){
        tabela.rows[i].cells[j].style.borderRight="dashed";
       }
     }
   } 
  }
  return {
    filtrirajPredmet: filtrirajPredmet,
    filtrirajTip: filtrirajTip,
    filtrirajTrajanje: filtrirajTrajanje,
    filtrirajProslo: filtrirajProslo,
    filtrirajBuduce: filtrirajBuduce
  }
})();

