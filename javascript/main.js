function cambiarElementos(){
    let titulo = document.getElementById("titulo").value
    let imagen = document.getElementById("imagen").value
    let texto = document.getElementById("texto").value

    if(titulo == "" || imagen == "" || texto == ""){
        alert("Rellena todos los campos")
    }
    else{
        document.getElementById("titulo2").value = titulo
        document.getElementById("imagen2").src = imagen
        document.getElementById("texto2").value = texto
    }

}