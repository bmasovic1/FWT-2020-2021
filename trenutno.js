function trenutniCas(divRaspored, trenutnoVrijeme) {
	
    var datum = trenutnoVrijeme.substring(0, 10);
  var sati = trenutnoVrijeme.substring(11, 13);
  var minute = trenutnoVrijeme.substring(14, 16);
  
  var ukupno = sati*60;
  ukupno = +minute + +ukupno;
  
    
   const week_of_day_arr = ['Nedelja', 'Ponedeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
    var day = week_of_day_arr[new Date(trenutnoVrijeme).getDay()];
    console.log(day);
    
    
    
  if(day=='Ponedeljak' && ukupno>=541 && ukupno<=720){
      
      d=divRaspored.rows[1].cells[3];
      d.style.backgroundColor="lightgreen";
      d.style.border="4px solid black";
      
    }else if(day=='Ponedeljak' && ukupno>=721 && ukupno<=810){
    d=divRaspored.rows[1].cells[4];
      d.style.backgroundColor="lightgreen";
      d.style.border="4px solid black";
    
    }else if(day=='Ponedeljak' && ukupno>=841 && ukupno<=1020){
    d=divRaspored.rows[1].cells[6];
      d.style.backgroundColor="lightgreen";
      d.style.border="4px solid black";
    }
    
    
    
    
    
    if(day=='Utorak' && ukupno>=751 && ukupno<=839){
      
      d=divRaspored.rows[2].cells[10];
      d.style.backgroundColor="lightgreen";
      d.style.border="4px solid black";
      
    }else if(day=='Utorak' && ukupno>=840 && ukupno<=959){
    d=divRaspored.rows[2].cells[11];
      d.style.backgroundColor="lightgreen";
      d.style.border="4px solid black";
    
    }else if(day=='Utorak' && ukupno>=960 && ukupno<=1140){
    d=x.rows[2].cells[12];
      d.style.backgroundColor="lightgreen";
      d.style.border="4px solid black";
    }
    
    if(day=='Srijeda' && ukupno>=720 && ukupno<=899){
      
      d=divRaspored.rows[3].cells[9];
      d.style.backgroundColor="lightgreen";
      d.style.border="4px solid black";
      
    }
    
  
  }
 