
// Variabili

const perKmPrice = 0.21;
const minorDiscount = 20;
const overDiscount = 40;
const kmTratta = prompt("Quanti Km dovrai viaggiare?");
const eta = prompt("Quanti anni hai?");
const priceTotalNoDisc = kmTratta * perKmPrice;
let prezzoFinale;



// Esecuzione Logica
if (isNaN(kmTratta) || isNaN(eta)){

    alert("C'è qualquadra che non cosa nei dati che hai inserito, ricarica la pagina :/")
}else{

if (eta < 18){
    prezzoFinale = (priceTotalNoDisc - ((priceTotalNoDisc / 100) * minorDiscount)).toFixed(2);
    alert("Ciao Bambino!");
} else if (eta > 65){
    prezzoFinale = ((priceTotalNoDisc - (priceTotalNoDisc /100) * overDiscount)).toFixed(2);
    alert("Ciao Nonnetto!");
} else {
    prezzoFinale = priceTotalNoDisc.toFixed(2);
    alert("Tu non hai nulla di speciale quindi PAGAH");
}
}

console.log(`Per questo viaggio pagherai ${prezzoFinale}\u20ac`);
