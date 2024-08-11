//Ejercicio 1

function contrasenaValida(contrasena) {
    
    if (contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9") {
        return true;
    } else {
        return false;
    }
}


//Ejercicio 2

function calcularImpuestos(edad, ingresos) {
    
    if (edad >= 18 && ingresos >= 1000) {
        
        return ingresos * 0.40;
    } else {
       
        return 0;
    }
}

//Ejercicio 3

function bmi(peso, altura) {
    
    const imc = peso / (altura * altura);

    
    if (imc < 18.5) {
        return "Bajo de peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

//Ejercicio 4

function imprimirArreglo(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        
        console.log(arr[i]);
    }
}

//Ejercicio 5

function likes(numero) {
    if (numero < 1000) {
        return numero.toString();
    } else if (numero >= 1000 && numero < 1_000_000) {
        
        return (numero / 1000).toFixed(0) + 'K';
    } else {
        
        return (numero / 1_000_000).toFixed(0) + 'M';
    }
}

//Ejercicio 6

function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    } else if (numero % 3 === 0) {
        return "fizz";
    } else if (numero % 5 === 0) {
        return "buzz";
    } else {
        return numero.toString();
    }
}

//Ejercicio 7

function contarRango(inferior, superior) {
    let conteo = 0;

    
    for (let i = inferior + 1; i < superior; i++) {
        conteo++;
    }

    return conteo;
}

//Ejercicio 8

function sumarRango(inicial, final) {
    let suma = 0;

    
    for (let i = inicial; i <= final; i++) {
        suma += i;
    }

    return suma;
}

//Ejercicio 9

function numeroDeAes(cadena) {
    
    cadena = cadena.toLowerCase();
    
    let conteo = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === 'a') {
            conteo++;
        }
    }

    return conteo;
}

//Ejercicio 10

function numeroDeCaracteres(cadena, caracter) {
    
    if (caracter.length !== 1) {
        throw new Error("El parámetro 'caracter' debe ser un solo carácter.");
    }
    
    
    let conteo = 0;

   
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            conteo++;
        }
    }

    return conteo;
}

