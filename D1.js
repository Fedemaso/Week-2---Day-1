/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 In JS esistono tre tipi principali di datatypes: 
- il dato STRINGA che indica un insieme di uno o più caratteri sempre racchiusi tra apici che possono essere doppi ( "xxx" ) o singoli ( 'xxx' ) eg: let hello = "helloWorld"
- il dato NUMERICO che indica un insieme di uno o più numeri che possono essere interi o decimali e non vanno mai racchiusi fra apici eg: let number = 123456
- il dato BOOLEANO, che ammette solo i due valori TRUE e FALSE ed è usato principalmente per confermare o meno delle richieste tramite codice e di conseguenza potergli far prendere delle decisioni. eg let fedeIsAwesome = false 
 
e poi ci sono altri due tipi "secondari"
- il dato NULL che determina una variabile con valore nullo
- il dato UNDEFINED che determina una variabile definita ma ancora senza un valore assegnato


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let nome = "federico"


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let a = 12
let b = 20
let somma = a + b 
console.log (a + b)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12




/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

nome = "maso" 

const nome = "maso"
nome = "federico"
console.log (nome)
// messaggio di ERRORE perchè     
uncaught syntax error: identifier 'nome' has already been declared (at D1.js:49:7)

// ad una CONST non si può ri-assegnare un valore che dovrà rimanere identico a quello assegnato inizialmente 






/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log ( 4 - x) 
// risposta --> -8






/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let nome1 ="john"
let nome2 = "John"

console.log (nome1 === nome2) 
// risultato --> false
console.log (nome1 !== nome2)
//  risultato --> true