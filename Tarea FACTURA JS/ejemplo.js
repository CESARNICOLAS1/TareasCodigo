//ESTATICOS
let nombre = document.getElementById("nombre");
let ruc = document.getElementById("ruc");
let fecha = document.getElementById("fecha");
let nro = document.getElementById("nro");
//DIANMICOS
let cantidad = document.getElementById("cantidad");
let descripcion = document.getElementById("descripcion");
let unida = document.getElementById("unida");
let total = document.getElementById("total");
let span1 = document.getElementById("span1");
//BOTONES
let formDatos = document.getElementById("formDatos");
let Gtodo = document.getElementById("Gtodo");
//ARREGLOS
let objpersona2 = [];
let nuevoarreglo = [];
let variable = false;
let factura={};
let objDatos2={};
//TABLA
let cuerpo = document.getElementById("cuerpo");
let tfoot = document.getElementById("tfoot");
let conta = 0;
let contando=0;


formDatos.onsubmit = (e) => {
    e.preventDefault();    
    let objpersona = {
        cantidad: cantidad.value,
        descripcion: descripcion.value,
        unida: unida.value,
        total: total.value
    };
console.log("Añadido con Exito :) ")
    objpersona2.push(objpersona);
     if (variable == false) {
        for (let i = conta; i < objpersona2.length; i++) {

            let fila = document.createElement("tr");
            // creando la columna de NRO
            let tdCantidad = document.createElement("td");
            tdCantidad.innerText = objpersona2[i].cantidad;
            // creando la columna de PAIS
            let tdDescrip = document.createElement("td");
            tdDescrip.innerText = objpersona2[i].descripcion;
            // creando la columna de CONFIRMADOS O POSITIVOS
            let tdUnidad = document.createElement("td");
            tdUnidad.innerText = objpersona2[i].unida;
            // creando la columna de FALLECIDOS
            let tdTotal = document.createElement("td");
            tdTotal.innerText = (objpersona2[i].cantidad)*(objpersona2[i].unida);
            fila.appendChild(tdCantidad);
            fila.appendChild(tdDescrip);
            fila.appendChild(tdUnidad);
            fila.appendChild(tdTotal);
            cuerpo.appendChild(fila);
            contando=contando+(objpersona2[i].cantidad)*(objpersona2[i].unida);
            total.value = (objpersona2[i].cantidad)*(objpersona2[i].unida);
        }
        tfoot.innerText = contando;
        conta++;
        
    } 
}


Gtodo.onclick = () => {
    objDatos2={
        nombre: nombre.value,
        ruc: ruc.value,
        fecha: fecha.value,
        nro: nro.value,
        objpersona2
    }

    let personaString = JSON.stringify(objDatos2);
    localStorage.setItem("persona", personaString);
    console.log(personaString);    
    let colorGuardado = localStorage.getItem("persona");    
    let personaJSON = JSON.parse(colorGuardado);
    console.log(personaJSON);



}


