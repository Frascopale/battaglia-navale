const prompt = require("prompt-sync")();

const assign =function attaccare(n, posizione) {
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
  }

  module.exports = assign;