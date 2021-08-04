
function mostrar()
{
	
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let seguir;
	let promedioEdadRusa;
	let acumuladorEdadRusa = 0;
	let contadorEdadRusa=0;
	let mujerMayorEdad;
	let nombreMujerMayorEdad;
	let vacunaMujerMayorEdad;
	let flag = 1;
	let contadorAmericanaMayorEdad = 0;
	let porcentajeMayorEdadAmericana;
	let contadorDosDosis = 0;
	let contadorTotalVacunados = 0;
	let porcentajeVacunadosDosDosis;
	let contadorRusa = 0;
	let contadorAmericana = 0;
	let contadorChina = 0;
	let menosInoculada;


	do {
		nombre = prompt("Ingrese el nombre: ");
		
		while (nombre.length < 3 || nombre.length > 10) {
			nombre = prompt("ERROR. Reingrese el nombre: ");

		}

		edad = parseInt(prompt("Ingrese la edad: "));
		
		while (isNaN(edad) || edad <12) {
			edad = parseInt(prompt("ERROR. Reingrese la edad: "));

		}

		if (edad >= 12 && edad <= 17) {
			vacuna = "americana";
		} else {
			vacuna = prompt ("Ingrese la vacuna: (rusa, china, americana)").toLowerCase();
			
			while (vacuna != "rusa" && vacuna != "china" && vacuna != "americana") {
				vacuna = prompt ("ERROR. Reingrese la vacuna: (rusa, china, americana)").toLowerCase();
	
			}
		}


		dosis = prompt("Ingrese la dosis: (p/s)").toLowerCase();
		
		while (dosis != 'p' && dosis != 's') {
			dosis = prompt("ERROR. Reingrese la dosis: (p/s)").toLowerCase();

		}

		sexo = prompt("Ingrese el sexo (f/m)");
		
		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt("EROR. Reingrese el sexo (f/m)");

		}


		contadorTotalVacunados++;


		if (vacuna == "china") {
			contadorChina++;
		} else if (vacuna == "rusa") {
			contadorRusa++;
			acumuladorEdadRusa += edad;
		} else {
			contadorAmericana++;
			if (edad >= 18) {
				contadorAmericanaMayorEdad++;
			}
		}


		if (sexo == 'f') 
			if (flag == 1 || edad > mujerMayorEdad){
			mujerMayorEdad = edad;
			nombreMujerMayorEdad = nombre;
			vacunaMujerMayorEdad = vacuna;
			flag = 0;
		} 


		if (dosis =="s") {
			contadorDosDosis++;
		}


		seguir = prompt("Desea ingresar más datos: (si/no)");
	} while (seguir == "si");


	promedioEdadRusa = acumuladorEdadRusa / contadorRusa;

	porcentajeMayorEdadAmericana =  contadorAmericanaMayorEdad /contadorAmericana *100;

	porcentajeVacunadosDosDosis = contadorDosDosis / contadorTotalVacunados * 100;

	if (contadorRusa < contadorChina && contadorRusa < contadorAmericana) {
		menosInoculada = "Rusa";
	} else if (contadorChina <= contadorRusa && contadorChina < contadorAmericana) {
		menosInoculada = "China";
	} else {
		menosInoculada = "Americana";
	}


	document.write("a)  Promedio de edad de los que se vacunaron con la rusa: " + promedioEdadRusa + "<br>");
	document.write("b) La mujer con mayor edad se llama " + nombreMujerMayorEdad + " y se aplicó la vacuna: " + vacunaMujerMayorEdad+ "<br>");
	document.write("c) Porcentaje de las personas mayores de edad que recibieron la vacuna americana: " + porcentajeMayorEdadAmericana + "%" +"<br>");
	document.write("d) Porcentaje de vacunados con las dos dosis sobre el total de vacunados: " + porcentajeVacunadosDosDosis + "%" + "<br>");
	document.write("e) La vacuna menos inoculada es: "+ menosInoculada + "<br>");

}


