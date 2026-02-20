let dineroCofla = prompt("Cuanto dinero tienes Cofla?");
let dineroRoberto = prompt("Cuanto dinero tiene Roberto?");
let dineroPedro = prompt("Cuanto dinero tiene Pedro?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla >= 3.0) {
    alert("Cofla puedes comprar el pote de 1 cuarto de helado o el helado con confites");
    alert("Y te sobran " + (dineroCofla - 2.9));
}

else {
    alert("Lo siento Cofla, no tienes suficiente dinero para comprar ningun helado");
}

if (dineroRoberto >= 1.5) {
    alert("Roberto puedes comprar el palito de helado de crema");
    alert("Y te sobran " + (dineroRoberto - 1));
}

else {
    alert("Lo siento Roberto, no tienes suficiente dinero para comprar ningun helado");
}

if (dineroPedro >= 1.7) {
    alert("Pedro puedes comprar el bombon helado heladovich");
    alert("Y te sobran " + (dineroPedro - 1.7));
}

else {
    alert("Lo siento Pedro, no tienes suficiente dinero para comprar ningun helado");
}