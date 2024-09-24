let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];
let  listaActualizar = [];
let formulario = [];


//Esta función se invoca al momento de que el usuario hace click en el
//boton
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);
    console.log(descripcionGasto);

    if (Number(valorGasto) >500){
        alert('¡Cuidado! Superaste los 500$');
    } else{
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionGastos.push(descripcionGasto);

        console.log(listaNombresGastos);
        console.log(listaValoresGastos);
        console.log(listaDescripcionGastos);
        // alert('Click de usuario');
        actualizarListaGastos();
        
    }
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
   let htmlLista = '';
   let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionGastos[posicion];

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - ${descripcionGasto}
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        <button onclick="modificarGasto(${posicion});">Modificar</button>             
        </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);
        console.log(totalGastos);
        
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar(){ 
    document.getElementById('nombreGasto').Value ='';
    document.getElementById('valorGasto').Value = '';
    document.getElementById('descripcionGasto').Value = '';
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    listaDescripcionGastos.splice(posicion,1);
    actualizarListaGastos();
    
}

function modificarGasto(posicion){
    let nombreGasto = listaNombresGastos[posicion];
    let valorGasto = listaValoresGastos[posicion];
    let descripcionGasto = listaDescripcionGastos[posicion];

    document.getElementById('nombreGasto').value = nombreGasto;
    document.getElementById('valorGasto').value = valorGasto;
    document.getElementById('descripcionGasto').value = descripcionGasto;

    document.getElementById('botonFormulario').innerHTML = 'Guardar Cambios';
    document.getElementById('botonFormulario').onclick = function(){
       

    };
}

function guardarCambios(posicion){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    listaNombresGastos[posicion] = nombreGasto;
    listaValoresGastos[posicion] = valorGasto;
    listaDescripcionGastos[posicion] = descripcionGasto;

    actualizarListaGastos();
    limpiar();
    document.getElementById('botonFormulario').innerHTML = 'Agregar Gasto';
    document.getElementById('botonFormulario').onclick = function(){
        clickBoton();
        
    };
}