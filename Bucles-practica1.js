// Escribe un bucle que escriba en la consola 10 veces
//         “Me encanta Javascript!”
///-------------------------------------------------------------------------------------
// for (let i= 0; i <=10; i++){
//     console.log("Me encanta Javascript!")

// }


// Escribe un bucle que recorra un array con números y escriba cada número en la consola.
//------------------------------------------------------------------------------------
// let numeros = [2,4,6,8,10]
// for (let i= 0; i <= numeros.length-1; i++){
//     console.log(numeros[i])
// }

// Escribe bucle que evalue las notas (imprimir en consola) de los estudiantes que están almacenadas en un array. (Crear ese array)
//------------------------------------------------------------------------------------------------------------------------------------
let notas = [70,75,71,90];
let limite = 70;
let pasaron = 0;
let noPasaron = 0;
let total = notas.length;

for (let posicion= 0; posicion <= notas.length-1; posicion++){
    if (notas[posicion]<=70){
        noPasaron++
    }else{
        pasaron++
    }

}
console.log("pasaron: " + pasaron +" estudiantes");
console.log("No pasaron: " +noPasaron + " estudiantes");
console.log("total de notas: " + total + " notas");



