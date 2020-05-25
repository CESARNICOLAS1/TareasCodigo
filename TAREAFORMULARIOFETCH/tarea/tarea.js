const URL_BACKEND = "https://5ec9919a9ccbaf0016aa8f5d.mockapi.io";
let selectRepartidor = document.getElementById("selectRepartidor");
let selectCliente = document.getElementById("selectCliente");
let selectProducto = document.getElementById("selectProducto");
let formPedido = document.getElementById("formPedido");
let inputOrigen = document.getElementById("inputOrigen");
let inputDestino = document.getElementById("inputDestino");
let mitablita = document.getElementById("mitablita");
let cuerpo = document.getElementById("cuerpo");
let trs = document.getElementsByTagName("tr");
let pencil;
let guardar;
let borrar;

let conta = 0;

let jsons = [];//PROBANDO SI FUNCIONA
let data1;
let data2;
let data3;

let base = true;


const TraerRepartidores = () => {

    const dibujar = (repartidor) => {
        repartidor.forEach(repartidores => {
            let opcion = document.createElement("option");
            opcion.innerText = `${repartidores.rep_nom} ${repartidores.rep_ape}`;
            opcion.value = repartidores.id;
            selectRepartidor.appendChild(opcion);
        });
    }

    fetch(`${URL_BACKEND}/repartidor`, { method: 'GET', body: null }).then((response) => {
        response.json().then((data) => {
            dibujar(data);
            data1 = data;
        })
    })
}
const TraerCliente = () => {

    const dibujar = (clientes) => {

        clientes.forEach((cliente) => {
            let opcion = document.createElement("option");
            opcion.innerText = `${cliente.cli_nom} ${cliente.cli_ape}`;
            opcion.value = cliente.id;
            selectCliente.appendChild(opcion);
        })
    }


    fetch(`${URL_BACKEND}/cliente`, { method: 'GET', body: null }).then((response) => {
        response.json().then((data) => {
            dibujar(data);
            data2 = data;
        })
    })





}
const TraerProducto = () => {

    const dibujar = (productos) => {
        productos.forEach((producto) => {
            let opcion = document.createElement("option");
            opcion.innerText = `${producto.pro_nom} | S./${producto.pro_precio}`;
            opcion.value = producto.id;
            selectProducto.appendChild(opcion);
        })
    }

    fetch(`${URL_BACKEND}/producto`, { method: 'GET', body: null }).then((response) => {
        response.json().then((data) => {
            dibujar(data);
            // jsons.push(data);
            data3 = data;
        })
    })

}

formPedido.onsubmit = (e) => {

    e.preventDefault();
    let fecha = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
    //VERIFICANDO EN UN IF ELSE SI LOS CAMBOS NO HAN ESCOGIDO LA OPCION 0 OSEA --SELECCIONE
    if (selectRepartidor.selectedIndex == 0 || selectCliente.selectedIndex == 0 || selectProducto.selectedIndex == 0 || inputOrigen.value == "" || inputDestino.value == "") {
        alert("error escribe algo");

    } else {
        // CREAMOS EL OBJETO A ENVIAR
        let enviando = {
            id_pro: selectProducto.value,
            id_cli: selectCliente.value,
            id_rep: selectRepartidor.value,
            ped_ini: inputOrigen.value,
            ped_fin: inputDestino.value,
            ped_est: "pedido creado",
            ped_fecha: fecha
        }

        //ENVIAMOS Y LLAMAMOS ALA FUNCION DIBUJANDO
        fetch(`${URL_BACKEND}/pedido`, {
            method: 'POST', body: JSON.stringify(enviando), headers: { "Content-type": "application/json" }
        }).then((response) => {
            response.json().then((data) => {
                console.log("Se a agregado a la tabla con Exito");
                dibujando();
            })
        })




        const dibujando = () => {

            fetch(`${URL_BACKEND}/pedido`, { method: 'GET', body: null }).then((response) => {
                response.json().then((data) => {
                    dibujartabla(data);//DIBUJAMOS LA TABLA
                    console.log("reconstruyendo tabla con objeto ya inesrtado");

                })
            })

            const dibujartabla = (pedidos) => {

                while (cuerpo.firstChild) {
                    cuerpo.removeChild(cuerpo.lastChild);
                }

                pedidos.forEach((pedido, i) => {
                    let fila = document.createElement("tr");
                    fila.setAttribute('id', i + 1);

                    let tdNumero = document.createElement("td");
                    tdNumero.innerText = i + 1;

                    let tdidproducto = document.createElement("td");
                    tdidproducto.innerText = pedido.id;

                    let tdRepartidor = document.createElement("td");
                    data1.forEach((datarep) => { if (datarep.id == pedido.id_rep) { tdRepartidor.innerText = `${datarep.rep_nom} ${datarep.rep_ape}`; } })
                    // tdRepartidor.innerText = selectRepartidor.options[selectRepartidor.selectedIndex].innerText;

                    let tdCliente = document.createElement("td");
                    data2.forEach((datarep2) => { if (datarep2.id == pedido.id_cli) { tdCliente.innerText = `${datarep2.cli_nom} ${datarep2.cli_ape}`; } })
                    // tdCliente.innerText = selectCliente.options[selectCliente.selectedIndex].innerText;
                    let tdProducto = document.createElement("td");
                    data3.forEach((datarep3) => { if (datarep3.id == pedido.id_pro) { tdProducto.innerText = `${datarep3.pro_nom} | ${datarep3.pro_precio}`; } })
                    // tdProducto.innerText = selectProducto.options[selectProducto.selectedIndex].innerText;
                    let tdOrigen = document.createElement("td");
                    tdOrigen.innerText = pedido.ped_ini;
                    let tdDestino = document.createElement("td");
                    tdDestino.innerText = pedido.ped_fin;
                    let tdEstado = document.createElement("td");
                    tdEstado.innerText = pedido.ped_est;
                    let tdFecha = document.createElement("td");
                    tdFecha.innerText = pedido.ped_fecha;

                    let editar = document.createElement("td");

                    pencil = document.createElement("i")
                    pencil.classList.add('fas');
                    pencil.classList.add('fa-pencil-alt');
                    pencil.setAttribute('onclick', 'editando(this)');
                    editar.appendChild(pencil);

                    guardar = document.createElement("i")
                    guardar.classList.add('far');
                    guardar.classList.add('fa-save');
                    guardar.setAttribute('onclick', 'guardando(this)');
                    guardar.setAttribute('hidden', 'hidden');
                    editar.appendChild(guardar);


                    let tdborrar = document.createElement("td");
                    borrar = document.createElement("i")
                    borrar.classList.add('fas');
                    borrar.classList.add('fa-trash-alt');
                    borrar.setAttribute('onclick', 'eliminar(this)');
                    tdborrar.appendChild(borrar);



                    fila.appendChild(tdNumero);
                    fila.appendChild(tdidproducto);
                    fila.appendChild(tdRepartidor);
                    fila.appendChild(tdCliente);
                    fila.appendChild(tdProducto);
                    fila.appendChild(tdOrigen);
                    fila.appendChild(tdDestino);
                    fila.appendChild(tdEstado);
                    fila.appendChild(tdFecha);
                    fila.appendChild(editar);
                    fila.appendChild(tdborrar);
                    cuerpo.appendChild(fila);
                })
                mitablita.removeAttribute("hidden");
                selectRepartidor.selectedIndex = 0;
                selectCliente.selectedIndex = 0;
                selectProducto.selectedIndex = 0;
                inputOrigen.value = "";
                inputDestino.value = "";
            }
        }
    }
}

const editando = (boton) => {//boton=etiqueta <i>    


    var activeRow = boton.parentNode.parentNode.rowIndex;//numero de tr donde esta la etiqueta <i>

    let trrs = document.getElementById(activeRow);//la etiqueta tr id1
    let tdtr = trrs.getElementsByTagName('td')[2];//obtengo el td de repartidor
    let tdtr2 = trrs.getElementsByTagName('td')[3];//obtengo el td de cliente
    let tdtr3 = trrs.getElementsByTagName('td')[4];//obtengo el td de productto
    let tdtr4 = trrs.getElementsByTagName('td')[5];//obtengo el td de cliente
    let tdtr5 = trrs.getElementsByTagName('td')[6];//obtengo el td de productto

    fetch(`${URL_BACKEND}/repartidor`, { method: 'GET', body: null }).then((response) => {
        response.json().then((data) => {
            dibujar1(data);
            data1 = data;
        })
    })

    const dibujar1 = (repartidor) => {
        let select1 = document.createElement("select");
        select1.classList.add('form-control');
        repartidor.forEach(repartidores => {
            let opcion1 = document.createElement("option");
            opcion1.innerText = `${repartidores.rep_nom} ${repartidores.rep_ape}`;
            opcion1.value = repartidores.id;
            select1.appendChild(opcion1);
        });
        tdtr.appendChild(select1);
    }
    // ///////////////////////////////////////////////
    fetch(`${URL_BACKEND}/cliente`, { method: 'GET', body: null }).then((response) => {
        response.json().then((data) => {
            dibujar2(data);
            data2 = data;
        })
    })

    const dibujar2 = (cliente) => {


        let select2 = document.createElement("select");
        select2.classList.add('form-control');

        cliente.forEach(clientes => {
            let opcion2 = document.createElement("option");
            opcion2.innerText = `${clientes.cli_nom} ${clientes.cli_ape}`;
            opcion2.value = clientes.id;
            select2.appendChild(opcion2);
        });
        tdtr2.appendChild(select2);
    }
    //////////////////////////////////////////////////////////////
    fetch(`${URL_BACKEND}/producto`, { method: 'GET', body: null }).then((response) => {
        response.json().then((data) => {
            dibujar3(data);
            // jsons.push(data);
            data3 = data;
        })
    })
    const dibujar3 = (productos) => {
        let select3 = document.createElement("select");
        select3.classList.add('form-control');

        productos.forEach((producto) => {
            let opcion3 = document.createElement("option");
            opcion3.innerText = `${producto.pro_nom} | S./${producto.pro_precio}`;
            opcion3.value = producto.id;
            select3.appendChild(opcion3);
        })
        tdtr3.appendChild(select3);
    }


let input1 = document.createElement("input");
input1.setAttribute("type","text");
input1.classList.add('form-control');


let input2 = document.createElement("input");
input2.setAttribute("type","text");
input2.classList.add('form-control');

tdtr4.appendChild(input1);
tdtr5.appendChild(input2);

    // trrs.cells[5].innerHTML = "";
    // trrs.cells[5].appendChild(inputOrigen);

    // trrs.cells[6].innerHTML = "";
    // trrs.cells[6].appendChild(inputDestino);



    let tdboton = trrs.getElementsByTagName('td')[9];//obtengo el td de repartidor
    let newtrboton=tdboton.getElementsByTagName('i')[0];//obtengo el i de editar
    let newtrbotong=tdboton.getElementsByTagName('i')[1];//obtengo el i de guardar
    newtrboton.setAttribute("hidden", "hidden");
    newtrbotong.removeAttribute("hidden");

}


const guardando = (boton) => {
    var activeRow = boton.parentNode.parentNode.rowIndex;//numero de tr donde esta la etiqueta <i>

    let trrs = document.getElementById(activeRow);//la etiqueta tr id1

    let tdtr1 = trrs.getElementsByTagName('td')[2];//obtengo el td de repartidor
    let newtr1=tdtr1.getElementsByTagName('select')[0];//obtengo el select


    let tdtr2 = trrs.getElementsByTagName('td')[3];//obtengo el td de cliente
    let newtr2=tdtr2.getElementsByTagName('select')[0];//obtengo el select

    let tdtr3 = trrs.getElementsByTagName('td')[4];//obtengo el td de productto
    let newtr3=tdtr3.getElementsByTagName('select')[0];//obtengo el select

    let tdtr4 = trrs.getElementsByTagName('td')[5];//obtengo el td de productto
    let newtr4=tdtr4.getElementsByTagName('input')[0];//obtengo el select

    let tdtr5 = trrs.getElementsByTagName('td')[6];//obtengo el td de productto
    let newtr5=tdtr5.getElementsByTagName('input')[0];//obtengo el select


    let valoruno = newtr1.options[newtr1.selectedIndex].text;//texto del select
    let jsonuno = newtr1.options[newtr1.selectedIndex].value;//value del select
    trrs.cells[2].innerHTML = valoruno;

    let valordos = newtr2.options[newtr2.selectedIndex].text;
    let jsondos = newtr2.options[newtr2.selectedIndex].value;
    trrs.cells[3].innerHTML = valordos;


    let valortres = newtr3.options[newtr3.selectedIndex].text;
    let jsontres = newtr3.options[newtr3.selectedIndex].value;
    trrs.cells[4].innerHTML = valortres;






    let valorcuatro = newtr4.value;
    trrs.cells[5].innerHTML = valorcuatro;

    let valorcinco = newtr5.value;
    trrs.cells[6].innerHTML = valorcinco;

    let valorenviado = trrs.cells[1].innerHTML;


    let tdboton = trrs.getElementsByTagName('td')[9];//obtengo el td de repartidor
    let newtrboton=tdboton.getElementsByTagName('i')[0];//obtengo el i de editar
    let newtrbotong=tdboton.getElementsByTagName('i')[1];//obtengo el i de guardar
    newtrbotong.setAttribute("hidden", "hidden");
    newtrboton.removeAttribute("hidden");

    let enviando = {
        id_pro: jsonuno,
        id_cli: jsondos,
        id_rep: jsontres,
        ped_ini: valorcuatro,
        ped_fin: valorcinco
    }

    console.log("click en boton guardar,se envio: " + enviando);

    fetch(`${URL_BACKEND}/pedido/${valorenviado}`, {
        method: 'PUT', body: JSON.stringify(enviando), headers: { "Content-type": "application/json" }
    }).then((response) => {
        response.json().then((data) => {
            console.log("Guardado con Exito");

        })
    })
}

const eliminar = (boton) => {
    var activeRow = boton.parentNode.parentNode.rowIndex;//numero de tr donde esta la etiqueta <i>//int1
    let trrs = document.getElementById(activeRow);//la etiqueta tr id1
    let valorenviado = trrs.cells[1].innerHTML;

    fetch(`${URL_BACKEND}/pedido/${valorenviado}`, {
        method: 'DELETE', body: null, headers: { "Content-type": "application/json" }
    }).then((response) => {
        response.json().then((data) => {
            console.log("eliminado");
            dibujandodenuevo();

        })
    })

    const dibujandodenuevo = () => {

        fetch(`${URL_BACKEND}/pedido`, { method: 'GET', body: null }).then((response) => {
            response.json().then((data) => {
                dibujartabla(data);//DIBUJAMOS LA TABLA
                console.log("reconstruyendo tabla con objeto ya eliminado");

            })
        })

        const dibujartabla = (pedidos) => {

            while (cuerpo.firstChild) {
                cuerpo.removeChild(cuerpo.lastChild);
            }

            pedidos.forEach((pedido, i) => {
                let fila = document.createElement("tr");
                fila.setAttribute('id', i + 1);

                let tdNumero = document.createElement("td");
                tdNumero.innerText = i + 1;

                let tdidproducto = document.createElement("td");
                tdidproducto.innerText = pedido.id;

                let tdRepartidor = document.createElement("td");
                data1.forEach((datarep) => { if (datarep.id == pedido.id_rep) { tdRepartidor.innerText = `${datarep.rep_nom} ${datarep.rep_ape}`; } })
                // tdRepartidor.innerText = selectRepartidor.options[selectRepartidor.selectedIndex].innerText;

                let tdCliente = document.createElement("td");
                data2.forEach((datarep2) => { if (datarep2.id == pedido.id_cli) { tdCliente.innerText = `${datarep2.cli_nom} ${datarep2.cli_ape}`; } })
                // tdCliente.innerText = selectCliente.options[selectCliente.selectedIndex].innerText;
                let tdProducto = document.createElement("td");
                data3.forEach((datarep3) => { if (datarep3.id == pedido.id_pro) { tdProducto.innerText = `${datarep3.pro_nom} | ${datarep3.pro_precio}`; } })
                // tdProducto.innerText = selectProducto.options[selectProducto.selectedIndex].innerText;
                let tdOrigen = document.createElement("td");
                tdOrigen.innerText = pedido.ped_ini;
                let tdDestino = document.createElement("td");
                tdDestino.innerText = pedido.ped_fin;
                let tdEstado = document.createElement("td");
                tdEstado.innerText = pedido.ped_est;
                let tdFecha = document.createElement("td");
                tdFecha.innerText = pedido.ped_fecha;

                let editar = document.createElement("td");

                pencil = document.createElement("i")
                pencil.classList.add('fas');
                pencil.classList.add('fa-pencil-alt');
                pencil.setAttribute('onclick', 'editando(this)');
                editar.appendChild(pencil);

                guardar = document.createElement("i")
                guardar.classList.add('far');
                guardar.classList.add('fa-save');
                guardar.setAttribute('onclick', 'guardando(this)');
                guardar.setAttribute('hidden', 'hidden');
                editar.appendChild(guardar);


                let tdborrar = document.createElement("td");
                borrar = document.createElement("i")
                borrar.classList.add('fas');
                borrar.classList.add('fa-trash-alt');
                borrar.setAttribute('onclick', 'eliminar(this)');
                tdborrar.appendChild(borrar);



                fila.appendChild(tdNumero);
                fila.appendChild(tdidproducto);
                fila.appendChild(tdRepartidor);
                fila.appendChild(tdCliente);
                fila.appendChild(tdProducto);
                fila.appendChild(tdOrigen);
                fila.appendChild(tdDestino);
                fila.appendChild(tdEstado);
                fila.appendChild(tdFecha);
                fila.appendChild(editar);
                fila.appendChild(tdborrar);
                cuerpo.appendChild(fila);
            })










        }



    }





























}





TraerRepartidores();
TraerCliente();
TraerProducto();
