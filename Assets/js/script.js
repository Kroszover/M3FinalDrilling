
console.log(presupuesto.value);
const presupuesto2 = document.querySelector('#botonPresupuesto');
var calculoGasto = [];

function Gasto(nombre, monto) {
    this.nombre = nombre;
    this.monto = monto;
}
    

presupuesto2.addEventListener('click', obtenerPresupuesto);


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
    gastoPantalla.innerHTML = gastos.value;


}


