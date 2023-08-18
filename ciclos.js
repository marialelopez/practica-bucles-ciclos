// for (let  i = 10; i >=5; i--){


//     console.log (i)

// }
// numeros primos ---------------------------------------------------------------------------
// let x = [1,3,5,7,11,13,17]

// for (let  i = 0; i <=6; i++){

//     console.log (x[i])
    
// }
// Frase invertida-------------------------------------------------------------------------
let x = "hierba mala nunca muere";
let invertido = []

// for (let  i = 0; i <x.length ; i++){

//     console.log (x[i])
    
//      }
for (let  i = x.length-1; i >=0 ; i--){

    invertido.push(x[i])
     }
     let resultado = invertido.join('-')
     console.log (resultado)