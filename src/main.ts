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


// Snack 2
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:
// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
// emailAziendale → Email assegnata al dipendente (non si può modificare)
// contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.
type Dipendente = {
  nome:string,
  cognome:string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'freelance'
}

// Snack 3
// Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:

// Developer
// livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
// linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda 
// (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
// certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
type Developer = Dipendente & {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi?: string[],
  certificazioni: string[]
}

// ProjectManager
// teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
// budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
// stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).
type ProjectManager = Dipendente & {
  teamSize: number | null
  budgetGestito?: number,
  stakeholderPrincipali: string[] | null
}

// Definiamo un nuovo type alias Team, che rappresenta un gruppo di lavoro all'interno dell'azienda:
// nome → Nome del team (stringa).
// progettoAttuale → Nome del progetto su cui lavora il team (può essere null se il team è in attesa di assegnazione).
// budget → Importo numerico del budget assegnato al team (sempre presente).
// membri → Una tuple in cui il primo elemento è sempre un Project Manager, seguito da uno o più Developers (almeno un developer obbligatorio).
type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget:number,
  membri: [ProjectManager,Developer, ...Developer[]]
}
