const prompt = require("prompt-sync")();

let riga = 0;
let colonna = 0;
let n = 0;
let numnavi = 0;
let navi = [];
let cas = "|" + "-" + "|";
let gioc1 = 0;
let turno = 3;

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

//attacco2(n,numnavi1,posizione1,numnavi)
//attacco(n, posizione1, posizione2, numnavi, numnavi1, numnavi2);

function assegnazione(n, numnavi) {
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
}
while (numnavi1 !==0 || numnavi2!==0){
attacco(n, numnavi1, numnavi2, posizione1, posizione2, turno);}

/*function attacco(n, posizione1, posizione2, numnavi, numnavi1, numnavi2) {
  let attaccocolonna = "";
  let attaccoriga = "";
  let attaccare = 0;
  while (numnavi1 !== 0 || numnav2 !== 0) {
    while (attaccare !== posizione1 || attaccare !== posizione2) {
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
      for (i = 0; i < numnavi; i++) {
        if (attaccare == posizione1[i] || attaccare == posizione2[i]) {


          console.log("affondato " + "\n");
        } else {
          console.log("acqua");
        }
      }
    }
  }
}*/

function attacco(n, numnavi1, numnavi2, posizione1, posizione2, turno) {
  let attaccocolonna = "";
  let attaccoriga = "";
  let attaccare = 0;

  while (numnavi1 !== 0 || numnavi2 !== 0) {
    if (turno % 2 !== 0) {
      console.log("è il turno del giocatore 1: ");
      while (attaccare !== posizione2) {
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
        for (i = 0; i < numnavi; i++) {
          if (attaccare == posizione2[i]) {
            return console.log("affondato " + "\n");
          } else {
            console.log("acqua");
            turno ++;
          }
        }
      }
      
    } else {
      console.log("è il turno del giocatore 2: ");
      while (attaccare !== posizione1 || attaccare !== posizione2) {
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
        for (i = 0; i < numnavi; i++) {
          if (attaccare == posizione1[i]) {
           return  console.log("affondato " + "\n");
          } else {
            console.log("acqua");
            turno ++;
          }
        }
      }
      
    }
  }
}
