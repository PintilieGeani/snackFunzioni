// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function sommaDichiarativa (a , b) {
return a + b 
}

const sommaAnonima = function(a , b){
    return a + b
}

console.log(sommaAnonima(2, 3))

const arrowSomma = (a, b) => {
    return a + b 
}

console.log(arrowSomma(5, 3))

// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (a) => a * a

console.log(quadrato(2))

// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (a, b) => a + b
const moltiplicazione = (a, b) => a * b
const divisione = (a, b) => a / b

const eseguiOperazione = (a, b, operazione) => operazione(a, b)

console.log(eseguiOperazione(3, 5, somma))
console.log(eseguiOperazione(3, 5, moltiplicazione))
console.log(eseguiOperazione(10, 2, divisione))

// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer (timer) {
    return setTimeout(()=> {
        console.log("Tempo scaduto")
    }, timer)
}

// console.log(creaTimer(3000))

// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(stringa) {
    const interval = setInterval(() => {
        console.log(stringa)
    }, 1000)

    setTimeout(() => {
        clearInterval(interval)
        console.log("Timer fermo")
    }, 3000)
}

// stampaOgniSecondo("Messaggio")

// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(timer) {
    let counter = 1

    return () => {const interval  = setInterval(() => {
        console.log(counter++)
    }, timer)

    setTimeout(() => { 
        clearInterval(interval)
        console.log("Contatore fermo dopo 5 secondi")
    }, 5000)
}
}

// creaContatoreAutomatico(1000)


// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma (stringa, start , stop) {
     const interval  = setInterval(() => {
        console.log(stringa)
    }, start)

    setTimeout(() => { 
        clearInterval(interval)
        console.log("Messaggio fermo")
    }, stop)
}

// eseguiEferma("Sono il messaggio" , 1000 , 5000)

// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

function contoAllaRovescia(n) {
    const interval = setInterval(() => {
        console.log(n--)
    }, 1000)

    setTimeout(() => {
        clearInterval(interval)
        console.log("Tempo Scaduto")
    }, n * 1000)
}

// contoAllaRovescia(5)

// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

const operazioni = [
     (a, b) => a+b,
     (a, b) => a*b,
     (a, b) => a / b
]

function sequenzaOperazioni(array, timer) {
    let contatore  = 0
    const interval = setInterval(() => {
        console.log(array[contatore++] (5, 3))
    }, timer)
    
    setTimeout(() => {
        clearInterval(interval)
        console.log("operazioni finite")
    }, array.length * 1000);

}

// sequenzaOperazioni(operazioni, 1000)

// Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

//Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

const saluta = () => console.log("ciao")

function creaThrottler (funzione, timer) {

   let ultimaesecuzione = 0

   return function(...args){
    const ora = Date.now()

    if(ora - ultimaesecuzione >= timer){
        funzione(...args)
        ultimaesecuzione = ora 
    }
   }
}

const throttlerLog = creaThrottler(saluta , 2000)

throttlerLog()
throttlerLog()
throttlerLog()
throttlerLog()
throttlerLog()

setTimeout(() => {
    throttlerLog()
}, 2500)
 
// Correzione: le funzioni funzionano ma bisognava ritornare come funzioni gli snack 6, 7. Semplicemente facciamo return () => {Scriviamo la funzione qua} poi la dichiariamo in una variabile in modo da poter usare il closure. Ho capito male la consegna ma dopo la correzione ho capito meglio la richiesta (vedi essercizio 6 corretto)