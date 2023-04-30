
console.log(presupuesto.value);
const presupuesto2 = document.querySelector('#botonPresupuesto');
const gastos2 = document.querySelector('#botonGasto');
var calculoGasto = [];

function Gasto(nombre, monto) {
    this.nombre = nombre;
    this.monto = monto;
}
    

presupuesto2.addEventListener('click', obtenerPresupuesto);
gastos2.addEventListener('click', obtenerGastos);
setInterval(calcularSaldo, 500);




function obtenerPresupuesto(){
    let presupuesto = document.querySelector('#montoPresupuesto');

    console.log(presupuesto.value);

    let prespuestoPantalla = document.querySelector('#presupuesto');
    prespuestoPantalla.innerHTML = presupuesto.value;

}

function obtenerGastos() {
    let gasto = document.querySelector('#montoGasto');
    let nombreGasto = document.querySelector('#tipoGasto');

    let monto = parseInt(gasto.value);
    let gastoN = new Gasto(nombreGasto.value, monto);
    calculoGasto.push(gastoN);

    let gastoPantalla = document.querySelector('#gastos');

    gastoPantalla.innerHTML = gasto.value;

    let nombreGastoPantalla = document.querySelector('#nombreGasto');
    nombreGastoPantalla.innerHTML = nombreGasto.value;

    console.log(calculoGasto);

    let valorGasto = document.querySelector('#valorGasto');

    valorGasto.innerHTML = gasto.value;


    /*
    // Crear elemento li
    let nuevoGasto = document.createElement('li');
    nuevoGasto.textContent = `${nombreGasto.value}: ${monto}`;
    // Agregar elemento li a la lista ul correspondiente
    let listaGastos = document.querySelector('#listaGastos');
    listaGastos.appendChild(nuevoGasto);
     */
    // Actualizar saldo


}

function calcularSaldo() {
    let saldo = document.querySelector('#saldo');
    let gasto = document.querySelector('#montoGasto');
    let presupuesto = document.querySelector('#montoPresupuesto');

    saldo.innerHTML = presupuesto.value - gasto.value;
}





