
function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosLS"))
    if (listaUsuarios == null){
        listaUsuarios =
        [
            ["1","41005404","asdasd1"]
        ]
    }
    return listaUsuarios
}

function validarCredenciales(pUsuario, pContrasena){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false

    for(var i=0; i< listaUsuarios.length; i++){
        if(pUsuario == listaUsuarios[i][1] && pContrasena == listaUsuarios[i][2]){
            bAcceso = true
            sessionStorage.setItem("usuarioActivo",listaUsuarios[i][1]+""+listaUsuarios[i][2])
            sessionStorage.setItem("rolUsuarioActivo",listaUsuarios[i][6])
        }
    }
    return bAcceso
}

document.querySelector("#btnIngresar").addEventListener("click",iniciarSesion)
var warning = document.getElementById("warnings")

function iniciarSesion(){
    var pUsuario = ""
    var sContrasena = ""
    var bAcceso = false

    pUsuario = document.querySelector("#usuario").value
    sContrasena = document.querySelector("#contraseña").value

    bAcceso = validarCredenciales(pUsuario,sContrasena)
    
    if(bAcceso==true){
        window.location.href = "inicio.html"
    }
    else if(bAcceso==false){
        validar()
    }
}
function validar(){
    var usuario = document.getElementById("usuario").value
    var contraseña = document.getElementById("contraseña").value

    if(isNaN(usuario)){
        alert("El usuario ingresado no es un numero.")
    }
    else if(usuario.length < 8){
        alert("El usuario debe tener minimo 8 caracteres.")
    }
    else if(contraseña.length <6){
        alert("La contraseña es demasiado corta.")
    }
    else if(contraseña.search(/\d/) == -1){
        alert("La contraseña debe tener al menos un numero")
    }
    else if(contraseña.search(/[a-zA-Z]/) == -1) {
        alert("La contraseña debe tener al menos una letra")
    }
    else{
        alert("El usuario y/o contraseña son incorrectos")
    }
}

