let nave = {
    combustible: 100,
    distanciaRecorrida: 50,
    tripulantes: 4,
    comida: 50
};

document.writeln("Para el viaje se necesitan " + (nave.combustible*3 - 50) + "<br>");

document.writeln("Raciones enteras: " + Math.floor(nave.comida / nave.tripulantes) + "<br>");

document.writeln(nave.comida%nave.tripulantes + "<br>");

document.writeln("Escudo de energia = " + nave.tripulantes**2 + "<br>");

document.writeln("Distancia recorrida actual es: " + (nave.distanciaRecorrida + 1500 - 200));