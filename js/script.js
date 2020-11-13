// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

var generaBottone = document.getElementById("genera");
generaBottone.addEventListener("click",
 function() {
   var numerokm = document.getElementById("km").value;
   console.log(numerokm);
   var eta = document.getElementById("fascia-eta").value;
   console.log(eta);
   // il prezzo del biglietto è definito in base ai km (0.21 € al km);
   var prezzoBiglietto = numerokm * 0.21;
   console.log(prezzoBiglietto);
   // va applicato uno sconto del 20% per i minorenni;
   if (eta == "minorenne") {
     sconto = (prezzoBiglietto * 20) / 100;
     prezzoBiglietto -= sconto;
   }
   // va applicato uno sconto del 40% per gli over 65.
   if (eta == "over65") {
     sconto = (prezzoBiglietto * 40) / 100;
     prezzoBiglietto -= sconto;
   }
   console.log(prezzoBiglietto.toFixed(2));
 }
);
// Controllo valore inserito
// if (isNaN(km)) {
//   alert("Hai inserito un valore sbagliato");
// }
// if ((km <= 0)) {
//   alert("Hai inserito un valore sbagliato");
//   km = 0;
// }


// Prezzo finale del biglietto
document.getElementById('km').innerHTML=km;
document.getElementById('eta').innerHTML=eta;
document.getElementById('prezzo').innerHTML=prezzoBiglietto.toFixed(2);


var element = document.getElementById("saluto");

element.addEventListener('click',
 function() {
 // codice
 }
);
