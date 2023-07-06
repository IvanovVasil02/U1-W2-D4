/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* 
const area = function (a, b) {
	return a + b;
};

console.log("ESERCIZIO 1");
console.log(area(11, 12)); 
*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* 

const crazySum = function (a, b) {
	if (a === b) {
		return (a + b) * 3;
	} else {
		return a + b;
	}
};

console.log("ESERCIZIO 2");
console.log(crazySum(4, 4));

*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* 

const crazyDiff = function (a) {
    const result = 0;
	if (a > 19) {
		result = (a - 19) * 3;
	} else {
		result = 19 - a;
	}

	return result;
};

console.log("ESERCIZIO 3");
console.log(crazyDiff(20));

*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/*  

const boundary = function (n) {
	if (n > 20 && n < 100) {
		return true;
	} else if (n === 400) {
		return true;
	} else {
		return false;
	}
};
console.log("ESERCIZIO 4");
console.log(boundary(400));

*/

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/*

const epify = function (stringa) {
	if (!stringa.indexOf("EPICODE")) {
		return stringa;
	} else {
		return "EPICODE" + stringa;
	}
};

console.log("ESERCIZIO 5");
console.log(epify("EPICODEepico"));

*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* 

const check3and7 = function (num) {
	const msg = "";

	if (num % 3 === 0) {
		msg = "Okk è un multiplo di 3";
	} else if (num % 7 === 0) {
		msg = "Okk è un multiplo di 7";
	} else {
		msg = "Nope non è ne un multiplo di 7 ne di 3";
	}

	return msg;
};

console.log(check3and7(6));

*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/*  

const reverseString = function (stringa) {
	const strInversa = stringa.split("").reverse().join("");
   
    console.log("ESERCIZIO 7");
    console.log(reverse);
};

reverseString("EPICODE");

*/

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* 

const upperFirst = function (stringa) {
	const lista = stringa.split(" ");
	const newString = [];

	for (let i = 0; i < lista.length; i++) {
		newString.push(lista[i].charAt(0).toUpperCase() + lista[i].slice(1));
	}
	console.log(newString.join(" "));
};

console.log("ESERCIZIO 8");
upperFirst("io sono tuo padre");

*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* 
const cutString = function (stringa) {
	const newString = stringa.slice(1, stringa.lastIndexOf());

	console.log("ESERCIZIO 9");
	console.log(newString);
};
cutString("apposto");

*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
	const myArray = [];

	for (let i = 0; i < n; i++) {
		myArray.push(Math.floor(Math.random() * 11));
	}

	return myArray;
};

console.log("ESERCIZIO 10");
console.log(giveMeRandom(5));
