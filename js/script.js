// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var km = parseInt(prompt("Inserisci i chilometri da percorrere"));
var eta = parseInt(prompt("Inserisci la tua eta'"));
// Controllo valore inserito
if (isNaN(km)) {
  alert("Hai inserito un valore sbagliato");
}
if ((km <= 0)) {
  alert("Hai inserito un valore sbagliato");
  km = 0;
}
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
var prezzoBiglietto = km * 0.21;
// va applicato uno sconto del 20% per i minorenni;
if (eta < 18) {
  sconto = (prezzoBiglietto * 20) / 100;
  prezzoBiglietto -= sconto;
}
// va applicato uno sconto del 40% per gli over 65.
if (eta > 65) {
  sconto = (prezzoBiglietto * 40) / 100;
  prezzoBiglietto -= sconto;
}
// Prezzo finale del biglietto
document.getElementById('km').innerHTML=km;
document.getElementById('eta').innerHTML=eta;
document.getElementById('prezzo').innerHTML=prezzoBiglietto.toFixed(2);;
