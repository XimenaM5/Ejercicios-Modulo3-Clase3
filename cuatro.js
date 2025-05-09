// entrada de datos
let nombreMascota = prompt("Escribe el nombre de tu mascota");
let estatura = prompt("Escribe la estatura de la mascota");
let enferma = prompt("Estado (1) Sano o (2) Enfermo");
// convertir la variable enferma a un booleano, usando operador ternario
enferma = (enferma === "1") ? true : false;  


// proceso de datos y resultados
alert("El nombre de la mascota es " + nombreMascota + "\nLa estatura de la mascota es " + estatura);

if (enferma == true){
    alert("La mascota está sana");
}else{
    alert("La mascota está enferma");
}

