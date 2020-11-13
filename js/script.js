// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var mex = "Biglietto standard"
var generaBottone = document.getElementById("genera");
generaBottone.addEventListener("click",
 function() {
   var numerokm = document.getElementById("km").value;
   console.log(numerokm);
   var eta = document.getElementById("fascia-eta").value;
   // il prezzo del biglietto è definito in base ai km (0.21 € al km);
   var prezzoBiglietto = numerokm * 0.21;
   // va applicato uno sconto del 20% per i minorenni;
   if (eta == "minorenne") {
     sconto = (prezzoBiglietto * 20) / 100;
     prezzoBiglietto -= sconto;
     mex = "Sconto minorenne";
   }
   if (eta == "over65") {
     sconto = (prezzoBiglietto * 40) / 100;
     prezzoBiglietto -= sconto;
     mex = "Sconto silver";
   }

   var nomeutente = document.getElementById("name").value;
   document.getElementById("nome-passeggero").innerHTML += nomeutente;
   document.getElementById("offerta").innerHTML += mex;

   var numerocarrozza = Math.floor( Math.random() * 9) + 1;
   document.getElementById("carrozza").innerHTML += numerocarrozza;

   var numerocp = Math.floor( Math.random() * 10000) + 90000;
   document.getElementById("codice").innerHTML += numerocp;

   document.getElementById("costo").innerHTML += prezzoBiglietto.toFixed(2);

   var biglietto = document.getElementById("ticket");
   biglietto.classList.remove("hidden");
   biglietto.classList.add("show");
 }
);

 var bottoneannulla = document.getElementById("annulla");
 bottoneannulla.addEventListener("click",
    function() {
      var biglietto = document.getElementById("ticket");
      biglietto.classList.remove("show");
      biglietto.classList.add("hidden");
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
