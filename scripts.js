var input=  document.getElementById("contraseña")
var warnings = document.getElementById("warnings")

input.addEventListener("input",function(){
    let warnings = []
    if (this.value.length < 6) {
        warnings.value = "La contraseña es demasiado corta"
    }
})

var socket = io.connect();
 socket.on("message",function(data){
     var messageBox = document.createElement("div");
     messageBox.className = "message";
     messageBox.innerHTML = data;
     document.getElementById("chat").appendChild(messageBox);
 });
  
  
 window.onload = function(){
     var messageUser = document.getElementById("messageUser");
  
     messageUser.addEventListener("keydown",function(event){
      if(event.keyCode == 13){
         var mensaje = document.getElementById("messageUser").value;
         if(mensaje != ""){
             document.getElementById("messageUser").value = "";
             var messageBox = document.createElement("div");
             messageBox.className = "message";
             messageBox.innerHTML = mensaje;
             document.getElementById("chat").appendChild(messageBox);
             socket.json.send(mensaje);
         }
      }
     });
 }
