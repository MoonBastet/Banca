// Cada uno de los clientes de nuestro banco contará con un nombre, un identificador, una clave y un saldo en su cuenta.
// Se debe contar con al menos 3 clientes registrados.
//Opcion 1
const nombreCliente1 = "María Perez";
let identificadorCliente1 = 123;
let claveCliente1 = "maria123";
const saldoCliente1 = 100;

let nombreCliente2 = "Juan Perez";
let identificadorCliente2 = 456;
let claveCliente2 = "juan456";
let saldoCliente2 = 200;

let nombreCliente3 = "Pedrito Perez"; 
let identificadorCliente3 = 789;
let claveCliente3 = "pedrito789";
let saldoCliente3 = 300;

alert("Bienvenido a Banca en Linea");
//Cuando se ingrese el identificador y la clave, se revisará si coincide con alguno de los clientes registrados. Si no coincide, se mostrará un mensaje de error.
let identificador;
let clave;
let loginExitoso = false;

let nombreLogueado;
let identificadorLogueado;
let claveLogueado;
let saldoLogueado;

while(loginExitoso == false){
    identificador = parseInt(prompt("Ingrese su número identificador: "));
    clave = prompt("Ingrese su clave: ");
    if(identificador == identificadorCliente1 && clave == claveCliente1){
        loginExitoso = true;
        nombreLogueado = nombreCliente1;
        identificadorLogueado = identificadorCliente1;
        claveLogueado = claveCliente1;
        saldoLogueado = saldoCliente1;
        alert(`Bienvenido ${nombreCliente1}`);
    }
    else if (identificador == identificadorCliente2){
        if(clave == claveCliente2){
            loginExitoso = true;
            nombreLogueado = nombreCliente2;
            identificadorLogueado = identificadorCliente2;
            claveLogueado = claveCliente2;
            saldoLogueado = saldoCliente2;
            alert(`Bienvenido ${nombreCliente2}`);
        }
    }
    else if(identificador == identificadorCliente3){
        if(clave == claveCliente3){
            loginExitoso = true;
            nombreLogueado = nombreCliente3;
            identificadorLogueado = identificadorCliente3;
            claveLogueado = claveCliente3;
            saldoLogueado = saldoCliente3;
            alert(`Bienvenido ${nombreCliente3}`);
        }
    }
    else{
        alert("Datos incorrectos");
    }
}

//Si los datos coinciden, se ingresará a un menú con las opciones disponibles para el cliente.
//Las opciones en el menú serán: 
// 1 Ver saldo 
// 2 Realizar giro
// 3 Realizar depósito
// 4 Salir
//El menú se repite hasta que el usuario seleccione “Salir”.

let opcion;
let opcionVerSaldo = 1;
let opcionRealizarGiro = 2;
let opcionRealizarDeposito = 3;
let opcionSalir = 4;

while(opcion != opcionSalir){
    //Mostrar Menu
    opcion = prompt("Seleccione que desea hacer: \n 1.-Ver Saldo\n2.- Realizar Giro\n3.- Realizar Deposito\n4.- Salir");
    //Elige la opcion 1
    if(opcion == opcionVerSaldo){
        alert(`Su saldo es ${saldoLogueado}`);
    }
    //Elige la opcion 2
    if(opcion == opcionRealizarGiro){
        let montoAGirar = parseInt(prompt(`Su saldo actual es: ${saldoLogueado}\nIngrese el monto que desea girar:`));
        if(montoAGirar <= saldoLogueado){
           //monto valido -> Se resta monto del saldo 
           saldoLogueado = saldoLogueado - montoAGirar;
           alert(`Giro realizado. Su nuevo saldo es ${saldoLogueado}`);           
        }
        else{
            alert("Monto Inválido");
        }
    }
    //Elige la opcion 3
    if(opcion == opcionRealizarDeposito){
        //Añadir saldo
        let montoDeposito = parseInt(prompt(`Su saldo actual es: ${saldoLogueado}\nIngrese el monto que desea depositar:`));
        saldoLogueado = saldoLogueado + montoDeposito;
        alert(`Deposito realizado. Su nuevo saldo es ${saldoLogueado}`);
    }
}