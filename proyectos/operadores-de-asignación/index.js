let heroe = {
    nombre: "ragnar",
    oro: 500,
    salud: 100,
    fuerza: 15,
    energia: 80
};

let turnoActual = 7;

turnoActual %= 3;

if (turnoActual === 0) {
    document.writeln("¡GOLPE CRÍTICO! Ragnar brilla con luz dorada.");
} else {
    document.writeln("Ataque normal. Faltan " + turnoActual + " para critico")
}

// Se encuentra un tesoro
heroe.oro += 250;
// Entrenamiento intensivo
heroe.fuerza *= 2;
// Pagar la posada
heroe.oro -= 120;
// Hechizo de debilidad 
heroe.energia /= 2;
// Recuperación
heroe.salud = 100;

console.log(heroe)