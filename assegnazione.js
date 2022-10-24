const prompt = require("prompt-sync")();
 
 const assign = function assegnazione(n, numnavi) {
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
module.exports= assign;  