let mochila = [];

mochila.push("Gema roja", "Llave de oro", "Mapa antiguo");

document.writeln(mochila.length + "<br>");

document.writeln("Has usado el objeto " + mochila[0] + "<br>");

mochila.pop();

document.writeln(mochila.length);

let tienda = [
    { nombre: "Escudo de madera", precio:50 },
    { nombre: "Espada de hierro", precio:150 },
    { nombre: "Anillo mágico" , precio: 500 }
];

document.writeln("Precio: " + tienda[1].precio)
