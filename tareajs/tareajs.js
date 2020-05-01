//*******************************************EJERCICIO1*****************************


// Realice y represente mediante diagrama de flujo y pseudocódigo un
// algoritmo que lea los nombres y las edades de diez alumnos, y que los
// datos se almacenen en dos vectores, y con base en esto se determine
// el nombre del alumno con la edad mayor del arreglo.

// let contador = 0;
// let arreglo1 = [];
// let arreglo2 = [];
// while (contador < 10) {
//     let nombre = prompt("ingrese el nombre");
//     let edad = +prompt("ingrese la edad");
//     arreglo1.push(nombre);
//     arreglo2.push(edad);
//     contador++;
// }
// let nombmay=arreglo1[0]
// let nummay = arreglo2[0];
// for(let i=0; i<arreglo2.length; i++){                
//     if(arreglo2[i]>nummay){ 
//         nummay = arreglo2[i];
//         nombmay=arreglo1[i]
//     }
// }
// console.log("el nombre con la edad mayor es: " + nombmay + " y su edad es: " + nummay);




//*******************************************EJERCICIO2*****************************

// Realice un algoritmo que lea un arreglo y a partir de él forme un segundo
// arreglo, de tal forma que el primer elemento pase a ser el segundo,
// el segundo pase a ser el tercero, el último pase a ser el primero, y así
// sucesivamente. Represéntelo mediante un diagrama de flujo.

// let arreglo4=[1,2,3,4,5,6,7,8,9,10];
// let nuevoarreglo=[];
// let aux=arreglo4[arreglo4.length-1];
// for(let i=0; i<arreglo4.length-1; i++){
// nuevoarreglo[i+1]=arreglo4[i];
// }
// nuevoarreglo[0]=aux;
// console.log(arreglo4);
// console.log(nuevoarreglo);


//*******************************************EJERCICIO3*****************************




// Realice un algoritmo que lea dos vectores de cien elementos y que calcule
// la suma de éstos guardando su resultado en otro vector, el cual se
// debe presentar en forma impresa.

let arreglo9=[1,2,3,4,5,6,7,8,9,10];
let arreglo0=[5,6,3,8,4,7,9,4,2,4];
let nuevoarreglo2=[];

for(let i=0; i<arreglo9.length; i++){
    nuevoarreglo2[i]=arreglo9[i]+arreglo0[i];
    }


    console.log(nuevoarreglo2);



