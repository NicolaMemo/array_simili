// Funzione per verificare se riorganizzando gli elementi di un array è possibile ottenerne un altro array identico
function array_checking(arra1, arra2) {
    // Itera attraverso gli elementi di arra1
    for (var i = 0; i < arra1.length; i++) {
      // Ciclo nidificato per scambiare gli elementi e controllare le permutazioni
      for (var j = i; j < arra1.length; j++) {
        // Inizializza il risultato e la variabile temporanea
        var result = true,
          temp = arra1[i];
  
        // Scambia gli elementi
        arra1[i] = arra1[j];
        arra1[j] = temp;
  
        // Confronta gli elementi dell'array modificato arra1 con arra2
        for (var k = 0; k < arra1.length; k++) {
          if (arra1[k] !== arra2[k]) {
            result = false;
            break;
          }
        }
  
        // Se gli array corrispondono, restituisci true
        if (result) {
          return true;
        }
  
        // Ripristina l'ordine originale scambiando nuovamente gli elementi
        arra1[j] = arra1[i];
        arra1[i] = temp;
      }
    }
  
    // Se nessuna corrispondenza viene trovata, restituisci false
    return false;
  }
  
  // Esempio di utilizzo
  console.log(array_checking([10, 20, 30], [10, 20, 30]));   // true
  console.log(array_checking([10, 20, 30], [30, 10, 20]));   // true
  console.log(array_checking([10, 20, 30, 40], [10, 30, 20, 40]));   // false
  