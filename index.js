const prompt = require("prompt-sync")();
const assegnazione= require( './assegnazione');
const attaccare= require( './attaccare');


let n = 0;
let numnavi = 0;
let cas = "|" + "-" + "|";
let turno = 3;
let attacco1 = 0;
let attacco2=0;
let colpito = -1;

n = prompt("quante righe/colonne vuoi?");
numnavi = prompt("quante navi vuoi?");

while (numnavi > n) {
  console.log("troppe navi");
  numnavi = prompt("quante navi vuoi?");
}
let numnavi1 = numnavi;
let numnavi2 = numnavi;
for (i = 1; i <= n; i++) {
  console.log(cas.repeat(n));
}

console.log("turno giocatore 1: ");
let posizione1 = assegnazione(n, numnavi);
console.log(posizione1);

console.log("turno giocatore 2: ");
let posizione2 = assegnazione(n, numnavi);
console.log(posizione2);



while (numnavi1 !== 0 && numnavi2 !== 0) {
  if (turno % 2 !== 0) {
    console.log("turno giocatore 1: ");
    attacco1 = attaccare(n,  posizione2);
    for (i = 0; i < numnavi; i++) {
      if (attacco1 == posizione2[i]) {
        colpito = attacco1;
        posizione2[i] = -100;
        numnavi2--;
      } }

      if (colpito !== -1) {
        console.log("colpito");
        colpito=-1;
      } else {
        console.log("acqua");
        colpito=-1;
        turno++;
      }
    } else {
      console.log("turno giocatore 2: ");
     attacco2 = attaccare(n,  posizione1);

    for (i = 0; i < numnavi; i++) {
      if (attacco2 == posizione1[i]) {
        colpito = attacco2;
        posizione1[i] = -100;
        numnavi1--;
      }}

      if (colpito !== -1) {
        console.log("colpito");
        colpito= -1;
      } else {
        console.log("acqua");
        colpito=-1;
        turno++;
      }
    }
  } 

  module.export = n,numnavi,posizione1,posizione2;

  /*function assegnazione(n, numnavi) {
  let posizione = 0;
  let valore = [];
  for (i = 0; i < numnavi; i++) {
    let riga = prompt("in quale riga vuoi inserire la nave?");
    let colonna = prompt("in quale colonna vuoi inserire la nave?");
    while (riga > n || colonna > n) {
      riga = prompt(
        "Valore non valido, reinserisci in quale riga vuoi inserire la nave?"
      );
      colonna = prompt(
        "Valore non valido, in quale colonna vuoi inserire la nave?"
      );
    }
    posizione = (colonna - 1) * n + (riga - 1);
    valore.push(posizione);
  }
  return valore;
}*/

/*function attaccare(n, posizione) {
  let attaccocolonna = "";
  let attaccoriga = "";
  let attaccare = 0;

  if (attaccare !== posizione) {
    attaccoriga = prompt("in quale riga vuoi attaccare la nave?");
    attaccocolonna = prompt("in quale colonna vuoi attaccare la nave?");
    while (attaccoriga > n || attaccocolonna > n) {
      attaccoriga = prompt(
        "Valore non valido, reinserisci in quale riga vuoi inserire la nave?"
      );
      attaccocolonna = prompt(
        "Valore non valido, in quale colonna vuoi inserire la nave?"
      );
    }
    attaccare = (attaccocolonna - 1) * n + (attaccoriga - 1);
    console.log(attaccare)
    return attaccare;
  }
}*/
