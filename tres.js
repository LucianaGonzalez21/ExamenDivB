function mostrar()
{
	
	let origen;
	let cantidadVacunas;
	let costoVuelo;
	let origenMayorVacunas;
	let mayorCantidad;
	let flag = 1;
	let promedioVacunasAsia;	
	let acumuladorCantidadTotal = 0;
	let importeTotal = 0;
	let descuento = 0;
	let precioDescuento;
	let contadorVacunasAsia =0;


	for (let i = 0; i < 10; i++) {		

		origen = prompt("Ingrese el origen: (Asia/ Europa/USA)").toLowerCase();
		
		while (origen != "asia" && origen != "europa" && origen != "usa") {
			origen = prompt("ERROR. Reingrese el origen: (Asia/ Europa/USA)").toLowerCase();
		}

		cantidadVacunas = parseInt (prompt("Ingrese la cantidad de vacunas:"));
		
		while (isNaN (cantidadVacunas) || cantidadVacunas <1) {
			cantidadVacunas = parseInt (prompt("ERROR. Reingrese la cantidad de vacunas:"));

		}

		costoVuelo = parseInt(prompt("Ingrese el costo del vuelo (1000000-5000000)"));
		
		while (isNaN(costoVuelo) || costoVuelo < 1000000 || costoVuelo > 5000000) {
			costoVuelo = parseInt(prompt("ERROR. Reingrese el costo del vuelo (1000000-5000000)"));

		}


		acumuladorCantidadTotal += cantidadVacunas;



		if (flag == 1 || cantidadVacunas > mayorCantidad) {
			mayorCantidad = cantidadVacunas;
			origenMayorVacunas = origen;
			flag = 0;
		}



		if (origen == "asia") {
			contadorVacunasAsia++;
		}



		importeTotal += costoVuelo;

	}

	promedioVacunasAsia = acumuladorCantidadTotal/contadorVacunasAsia;

	if (acumuladorCantidadTotal > 4000000) {
		descuento = .3;
		descuento = importeTotal * descuento;
		precioDescuento = importeTotal - descuento;
	} else if (acumuladorCantidadTotal > 2000000) {
		descuento = .2;
		descuento = importeTotal * descuento;
		precioDescuento = importeTotal - descuento;
	}


	document.write("a) El origen que envió mayor cantidad de vacunas es: " + origenMayorVacunas + "<br>");
	document.write("b) Promedio de vacunas llegadas de Asia: " + promedioVacunasAsia + "<br>");
	document.write("c) Total sin descuentos: " + importeTotal + "$" + "<br>");
	if (descuento == 0) {
		document.write("d) No hubo descuentos" + "<br>");
	} else {
		document.write("d) El descuento fue de: $" + descuento + " El total con descuentos es de: $" + precioDescuento + "<br>")
	}


}


