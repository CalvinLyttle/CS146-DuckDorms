document.getElementById("wholepage").addEventListener("keydown", function(e){
    var keynum;

    if(window.event) {                
      keynum = e.keyCode;
    } else if(e.which){                  
      keynum = e.which;
    }
    
    if (keynum == 78){
        window.alert("How rude.");
    }
    else if (keynum == 89){
        window.location = "duckDormsForm.html"
    }
  });