const presupuesto2 = document.querySelector("#botonPresupuesto");
const gastos2 = document.querySelector("#botonGasto");
const tablaGastosBody = document.querySelector("#tablaGastos tbody");
var calculoGasto = [];

//Función constructora para crear los objetos de tipo gasto
function Gasto(nombre, monto) {
  this.nombre = nombre;
  this.monto = monto;
}

presupuesto2.addEventListener("click", obtenerPresupuesto);
gastos2.addEventListener("click", obtenerGastos);
setInterval(calcularSaldo, 100);

function obtenerPresupuesto() {
  let presupuesto = document.querySelector("#montoPresupuesto");
  let prespuestoPantalla = document.querySelector("#presupuesto");
  prespuestoPantalla.innerHTML = "$"+presupuesto.value;
  presupuesto.value = "$";
}


function obtenerGastos() {
  let gastoMonto = document.querySelector("#montoGasto");
  let gastoNombre = document.querySelector("#tipoGasto");
  let tablaGastos = document.querySelector("#tablaGastos");
  let gasto = new Gasto(gastoNombre.value, gastoMonto.value);
  calculoGasto.push(gasto);

  let nuevaFila = document.createElement("tr");
  let celdaNombre = document.createElement("td");
  let celdaValor = document.createElement("td");
  let celdaEliminar = document.createElement("td");
  let iconoEliminar = document.createElement("i");

  celdaNombre.textContent = gasto.nombre;
  celdaValor.textContent = "$" + parseFloat(gasto.monto);
  iconoEliminar.classList.add("fas", "fa-trash-alt");

  celdaEliminar.appendChild(iconoEliminar);
  nuevaFila.appendChild(celdaNombre);
  nuevaFila.appendChild(celdaValor);
  nuevaFila.appendChild(celdaEliminar);
  tablaGastosBody.appendChild(nuevaFila);

  gastoMonto.value = "";
  gastoNombre.value = "";

  // Agregar evento para eliminar el nuevo gasto
  iconoEliminar.addEventListener("click", function () {
    nuevaFila.parentNode.removeChild(nuevaFila);
    calculoGasto.splice(calculoGasto.indexOf(gasto), 1);
    calcularSaldo();
  });
}

const sumaGastos = () => {
  let suma = 0;
  for (let i = 0; i < calculoGasto.length; i++) {
    suma += parseFloat(calculoGasto[i].monto);
  }
  return "$" + suma
};



function calcularSaldo() {
  let presupuesto = document.querySelector("#presupuesto");
  let gastos = document.querySelector("#gastos");
  let saldo = document.querySelector("#saldo");
  let suma = parseFloat(sumaGastos().replace("$", ""));
  gastos.innerHTML = "$" + suma
  saldo.innerHTML = "$" + (parseFloat(presupuesto.innerHTML.replace("$", "")) - suma)
  if (parseFloat(saldo.innerHTML.replace("$", "")) < 0) {
    saldo.style.color = "red";
  } else {
    saldo.style.color = "green";
  }
}



