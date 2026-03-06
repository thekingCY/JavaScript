const jugador = {
    nombre: "Ragnar",
    oro: 1000,
    nivel: 14,
    VIP: false
};

const pocion = {
    nombre: "Poción de salud",
    precio: 200,
    efecto: "Restaura 50 puntos de salud",
    nivelRequerido: 10
};

let precioFinal = pocion.precio;

if (jugador.VIP) {
    precioFinal = precioFinal * 0.8;
    document.writeln("¡Bienvenido, VIP! Tienes acceso a descuentos exclusivos." + "<br>");
    document.writeln(pocion.nombre + ": " + precioFinal + " de oro." + "<br>");
} else {
    document.writeln("Considera unirte a VIP para precios exclusivos" + "<br>");
    document.writeln(pocion.nombre + ": " + precioFinal + " de oro" + "<br>");
}

if (jugador.nivel < pocion.nivelRequerido) {
    document.writeln("Eres muy novato para usar sal y consigue exp")
} else {
    let respuesta = confirm("¿Deseas comprar " + pocion.nombre + " por " + precioFinal + " de oro?");
    if (respuesta && jugador.oro >= precioFinal) {
        jugador.oro -= precioFinal;
        document.writeln("Compra exitosa. Te quedan " + jugador.oro + " monedas")
    } else if (!respuesta) {
        document.writeln("Compra cancelada.")
    } else {
        document.writeln("No tienes suficiente oro")
    }
}




