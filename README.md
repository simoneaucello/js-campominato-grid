**Griglia Campo Minato**
===
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
## Svolgimento
1. Seleziono il container e lo salvo in una costante
2. Resetto
3. Faccio un ciclo di 100 ripetizioni
4. Ad ogni ciclo creo un quadrato e lo aggiungo alla griglia
## Creazione del quadrato
1. Creare l'elemento HTML
2. Associare la classe .square
3. Associare il valore (numero)
4. Associare un listener che al click cambi il colore della cella
5. fare un console.log dei numeri corrispondenti alle celle cliccate
