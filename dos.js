function mostrar()
{
  


    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let porcentajePositivos;
    let contadorPositivos=0;
    let contadorNegativos = 0;
    let porcentajeNegativos;
    let contadorTotalPersonas = 0;      
    let contadorDelta=0;
    let contadorAlfa = 0;
    let contadorBeta=0;
    let cepaMasEncontrada;
    let edadMayorExtranjeroContagiado;
    let flag =1;
    let contadorArgentinosDelta=0;

    for (let i=0; i <8; i++) {      
        nacionalidad = prompt("Ingrese la nacionalidad(argentina/extranjero): ").toLowerCase();
        
        while (nacionalidad != "argentina" && nacionalidad != "extranjero") {
            nacionalidad = prompt("ERROR. Reingrese la nacionalidad(argentina/extranjero): ").toLowerCase();
            
        }

        resultado = prompt("Ingrese el resultado (positivo/negativo)").toLowerCase();
        
        while (resultado != "positivo" && resultado != "negativo"){
            resultado = prompt("ERROR. Reingrese el resultado (positivo/negativo)").toLowerCase();

        }

        edad = parseInt(prompt("Ingrese la edad: (18-65)"));
        
        while (isNaN(edad) || edad <18 || edad >65) {
            edad = parseInt(prompt("ERROR. Reingrese la edad: (18-65)"));

        }
        
        if (resultado == "negativo") {
            cepa = "ninguna";
            contadorNegativos++;
            
        } else {
            cepa = prompt("Ingrese la cepa: (delta/alfa/beta)");
            
            while (cepa != "delta" && cepa != "alfa" && cepa!= "beta") {
                cepa = prompt("ERROR. Reingrese la cepa: (delta/alfa/beta)");

            }
            contadorPositivos++;
            
        }


        if ( cepa == "alfa") {
            contadorAlfa++;
        } else if (cepa == "beta") {
            contadorBeta++;
        } else if (cepa == "delta") {
            contadorDelta++;
        }
            

        if (nacionalidad == "extranjero" || edad > edadMayorExtranjeroContagiado) {
            if (flag ==1) {
                edadMayorExtranjeroContagiado = edad;
                flag =0;
            }
        }

        if (nacionalidad == "argentina" && cepa == "delta") {
            contadorArgentinosDelta++;
        }

        contadorTotalPersonas++;

    }


    porcentajePositivos = contadorPositivos/contadorTotalPersonas *100;

    porcentajeNegativos = contadorNegativos/contadorTotalPersonas*100;

    if (contadorAlfa > contadorBeta && contadorAlfa > contadorDelta) {
        cepaMasEncontrada = "Alfa";
    } else if (contadorBeta >= contadorAlfa && contadorBeta > contadorDelta){
        cepaMasEncontrada = "Beta";
    } else {
        cepaMasEncontrada = "Delta";
    }



    document.write("a) El porcentaje de positivos es: " + porcentajePositivos + "%" + "<br>");
    document.write("b) El porcentaje de negativos es: " + porcentajeNegativos + "%" + "<br>");
    document.write("c) La cepa más encontrada es: " + cepaMasEncontrada + "<br>");
    document.write("d) Edad del mayor extranjero contagiado: " + edadMayorExtranjeroContagiado + "<br>");
    document.write("e) Cantidad de personas argentinas contagiadas con la delta: " + contadorArgentinosDelta + "<br>");



}



