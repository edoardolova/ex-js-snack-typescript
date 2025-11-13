// 🏆 Snack 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… 
// Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
function getType(data: unknown) {
  if (data === null) {
    return "Il dato è vuoto";
  }

  if (Array.isArray(data)) {
    return `array con ${data.length} elementi`;
  }

  if (data instanceof Promise) {
    data.then(data => console.log('dati dalla promise:', data));
    return 'è una Promise (in elaborazione)';
  }

  switch (typeof data) {
    case "string":
      return data.toUpperCase();
    case "number":
      return data* 2;
    case "boolean":
      return data ? "Sì" : "No";
    default:
      return "Tipo non supportato";
  }
}
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("dati caricati con successo!");
  }, 2000);
});
// Test
console.log(getType('ciao'));       
console.log(getType(2));            
console.log(getType(false));        
console.log(getType({}));           
console.log(getType(null));         
console.log(getType([1,2,3,4,5]));  
console.log(getType(myPromise));         
