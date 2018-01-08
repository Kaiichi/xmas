function toggle_div(bouton, id) {
 
      var div = document.getElementById(id);
     
      if(div.style.display=="none") {
     
        div.style.display = "block";
     
      } else {
     
        div.style.display = "none";
     
      }
    return true;
}
function close(bouton ,id) {
    document.getElementById(id).style.display=="none";
}