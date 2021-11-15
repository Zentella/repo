
//variables con nombre de los ramos
var ramo1 = "HTML";
var ramo2 = "CSS";
var ramo3 = "JavaScript";
//ingreso de datos del usuario
var nombre = prompt("Ingrese nombre:","Benito");
var apellido = prompt("Ingrese apellido:","Pérez");
var carrera = prompt("Ingrese carrera:","Desarrollo Web");

var ramo1 = prompt("Ingrese ramo " + "1" + ":", ramo1);//HTML
var r1apro = prompt("Ingrese nota de aprobación requerida:","4");

var r1nota1 = prompt("Ingrese nota " + "1" + " " + "[" + ramo1 + "]:","7");
var r1nota2 = prompt("Ingrese nota " + "2" + " " + "[" + ramo1 + "]:","7");
var r1nota3 = prompt("Ingrese nota " + "3" + " " + "[" + ramo1 + "]:","7");
//cálculo de promedio
var r1nota1 = parseInt(r1nota1);
var r1nota2 = parseInt(r1nota2);
var r1nota3 = parseInt(r1nota3);
var r1prom = (r1nota1+r1nota2+r1nota3)/3;

var ramo2 = prompt("Ingrese ramo " + "2" + ":", ramo2);//CSS
var r2apro = prompt("Ingrese nota de aprobación requerida:","4");

var r2nota1 = prompt("Ingrese nota " + "1" + " " + "[" + ramo2 + "]:","7");
var r2nota2 = prompt("Ingrese nota " + "2" + " " + "[" + ramo2 + "]:","7");
var r2nota3 = prompt("Ingrese nota " + "3" + " " + "[" + ramo2 + "]:","7");

var r2nota1 = parseInt(r2nota1);
var r2nota2 = parseInt(r2nota2);
var r2nota3 = parseInt(r2nota3);
var r2prom = (r2nota1+r2nota2+r2nota3)/3;

var ramo3 = prompt("Ingrese ramo " + "3" + ":", ramo3);//JavaScript
var r3apro = prompt("Ingrese nota de aprobación requerida:","4");

var r3nota1 = prompt("Ingrese nota " + "1" + " " + "[" + ramo3 + "]:","7");
var r3nota2 = prompt("Ingrese nota " + "2" + " " + "[" + ramo3 + "]:","7");

var r3nota1 = parseInt(r3nota1);
var r3nota2 = parseInt(r3nota2);
var r3prom = (r3nota1+r3nota2)/2;//promedio al momento
var falta = 12 - (r3nota1+r3nota2);
if (falta < 0){
  falta = 0;
}

//información

document .write( "<div class='container'>" );//Aquí creamos nuestro div contenedor
document .write( "<h1>Notas finales</h1>" );//título

document .write( "<table class='table table-borderless'>" );//Aquí creamos nuestra tabla con Bootstrap
document .write( "<tbody>" );//cuerpo con el contenido
document .write( "<tr>")//estructura de columna
document .write( "<th scope='row'><b>Nombre:</b></th>" )//para definir el nombre o datos que tendrán los encabezados de cada columna
document .write( "<td>"+ nombre + " " + apellido +"</td>" );
document .write( "</tr" )
document .write( "</tbody>" );
document .write( "<tbody>" );//cuerpo con el contenido
document .write( "<tr>")
document .write( "<th scope='row'><b>Carrera:</b></th>" )//para definir el nombre o datos que tendrán los encabezados de cada columna
document .write( "<td>"+ carrera +"</td>" );
document .write( "</tbody>" );

document .write( "<table class='table'>" );//Aquí creamos nuestra tabla con Bootstrap
document .write("<caption>Para aprobar el ramo Javascript con nota 4, necesitas obtener un " + falta + ".00 en la nota 3.</caption>");

document .write( "<thead class='bg-dark text-white'>" );//encabezado con fondo negro y texto blanco
document .write( "<tr>" )//estructura de columna
document .write( "<th scope='col'>Ramo</th>" )//para definir el nombre o datos que tendrán los encabezados de cada columna
document .write( "<th scope='col'>Nota1</th>" )
document .write( "<th scope='col'>Nota2</th>" )
document .write( "<th scope='col'>Nota3</th>" )
document .write( "<th scope='col'>Promedio</th>" )
document .write( "</tr" )
document .write( "</thead>" )

document .write( "<tbody>" );//cuerpo con el contenido

document .write( "<tr>" );
document .write( "<td><b>"+ ramo1 +"</b></td>" );
document .write( "<td><b>"+ r1nota1 +"</b></td>" );
document .write( "<td><b>"+ r1nota2 +"</b></td>" );
document .write( "<td><b>"+ r1nota3 +"</b></td>" );
document .write( "<td><b>"+ r1prom.toFixed(2) +"</b></td>" );
document .write( "<tr>" );

document .write( "<tr>" );
document .write( "<td><b>"+ ramo2 +"</b></td>" );
document .write( "<td><b>"+ r2nota1 +"</b></td>" );
document .write( "<td><b>"+ r2nota2 +"</b></td>" );
document .write( "<td><b>"+ r2nota3 +"</b></td>" );
document .write( "<td><b>"+ r2prom.toFixed(2) +"</b></td>" );
document .write( "<tr>" );

document .write( "<tr>" );
document .write( "<td><b>"+ ramo3 +"</b></td>" );
document .write( "<td><b>"+ r3nota1 +"</b></td>" );
document .write( "<td><b>"+ r3nota2 +"</b></td>" );
document .write( "<td><b>"+ "-" +"</b></td>" );
document .write( "<td><b>"+ "-" +"</b></td>" );
document .write( "<tr>" );

document .write( "</tbody>" );
document .write( "</table" );
document .write( "</div>" );
