// Realice un algoritmo para determinar el sueldo semanal de un trabajador con base en las horas trabajadas 
//y el pago por hora, considerando que después de las 40 horas cada hora se considera como
//excedente y se paga el doble. Construya

//////////////////////////////////////////////////////////
// let sueldo = 0;
// let horasTrabajadas = prompt("ingrese horas trabajadas");
// let pagoHora = prompt("Ingrese pago por hora");
// let exceso = horasTrabajadas - 40;

// if (horasTrabajadas > 40) {
//     sueldo = (horasTrabajadas - exceso) * pagoHora + (exceso * (pagoHora * 2));
//     console.log("tu sueldo es: " + sueldo);

// } else {
//     sueldo = horasTrabajadas * pagoHora;
//     console.log("tu sueldo es: " + sueldo);
// }



// El 14 de febrero una persona desea comprarle un regalo al ser querido
// que más aprecia en ese momento, su dilema radica en qué regalo
// puede hacerle, las alternativas que tiene son las siguientes:

// Regalo       Costo
// Tarjeta      $10.00 o menos
// Chocolates   $11.00 a $100.00
// Flores       $101.00 a $250.00
// Anillo        Más de $251.00

// Se requiere un diagrama de flujo con el algoritmo que ayude a determinar
// qué regalo se le puede comprar a ese ser tan especial por el
// día del amor y la amistad


//////////////////////////////////////////////////////////
// let dinero = prompt("de cuanto dinero dispone?");

// if (dinero <= 10) {
//     console.log("deberia comprarle una tarjeta");
// } else if (dinero <= 100) {
//     console.log("deberia comprarle unos chocolates");
// } else if (dinero <= 250) {
//     console.log("deberia comprarle una flores");
// } else {
//     console.log("deberia comprarle un anillo");
// }





// El dueño de un estacionamiento requiere un diagrama de flujo con
// el algoritmo que le permita determinar cuánto debe cobrar por el
// uso del estacionamiento a sus clientes. Las tarifas que se tienen son
// las siguientes:
// Las dos primeras horas a $5.00 c/u.
// Las siguientes tres a $4.00 c/u.
// Las cinco siguientes a $3.00 c/u.
// Después de diez horas el costo por cada una es de dos pesos.


// let cobrar = 0;
// let horas = prompt("cuantas horas as estado estacionado?");
// if (horas <= 2) {
//     cobrar = horas * 5;
//     console.log("debes pagar: " + cobrar);
// } else if (horas <= 5 && horas > 2) {
//     cobrar = horas * 4;
//     console.log("debes pagar: " + cobrar);
// } else if (horas <= 10 && horas > 5) {
//     cobrar = horas * 3;
//     console.log("debes pagar: " + cobrar);
// } else {
//     cobrar = horas * 2;
//     console.log("debes pagar: " + cobrar);
// }





// Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura
// amplia (A) y daños a terceros (B). Para el plan A, la cuota
// base es de $1,200, y para el B, de $950. A ambos planes se les carga
// 10% del costo si la persona que conduce tiene por hábito beber alcohol,
// 5% si utiliza lentes, 5% si padece alguna enfermedad –como deficiencia
// cardiaca o diabetes–, 
//y si tiene más de 40 años, se le carga 20%, de lo contrario sólo 10%. 
//Todos estos cargos se realizan sobre
// el costo base. Realice diagrama de flujo y diagrama N/S que represente
// el algoritmo para determinar cuánto le cuesta a una persona
// contratar una póliza.



let pagarpoliza = 0;
let pagarpoliza2 = 0;


let poliza1 = 1200;
let poliza2 = 950;


let edad = prompt("cuantos años");//0.2--0.1
let habito = prompt("es un bebedor habitual?  si/no");//0.1
let habito2 = prompt("utiliza lentes?  si/no");//0.5
let habito3 = prompt("padece deficiencia cardiaca o diabetes -- si/no");//0.5



let desc1=0;
let desc2=0;
let desc3=0;
let desc4=0;

let desc1_2=0;
let desc2_2=0;
let desc3_2=0;
let desc4_2=0;

if(habito=="si"){
    desc1 = (poliza1 * 0.1);
    desc1_2 = (poliza2 * 0.1);
}

if(habito2=="si"){
    desc2 = (poliza1 * 0.05);
    desc2_2 = (poliza2 * 0.05);
}

if(habito3=="si"){
    desc3 = (poliza1 * 0.05);
    desc3_2 = (poliza2 * 0.05);
}
if(edad>40){
    desc4 = (poliza1 * 0.2);
    desc4_2 = (poliza2 * 0.2);
}else{
    desc4 = (poliza1 * 0.1);
    desc4_2 = (poliza2 * 0.1);
}

pagarpoliza=poliza1+desc1+desc2+desc3+desc4;
pagarpoliza2=poliza2+desc1_2+desc2_2+desc3_2+desc4_2;



console.log("la poliza 1 es de :" + pagarpoliza + " la poliza 2 es de :" + pagarpoliza2);


