/**Questo programma controlla in modo effettivo se due oggetti sono UGUALI, e non "lo stesso oggetto". */


/**la funzione deepEqual accetta due parametri (oggetti)
 * e restituisce true o false a seconda se i due oggetti sono
 * UGUALI o meno.
 */

/**
 * 
 * @param {Object} object1 
 * @param {Object} object2 
 * @returns Bool
 */
function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);     //creo due key
    const keys2 = Object.keys(object2);

    /**il primo controllo riguarda la lunghezza delle key;
     * se la len è diversa, i due oggetti sono inevitabilmente diversi.
     */
    if (keys1.length !== keys2.length) {
        return false;
    }

    /**Scorro tutte le key dell'insieme (del primo oggetto, ma se siamo arrivati
     * a questo punto vuol dire che hanno la stessa lunghezza
     * quindi è indifferente.) 
     * */
    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];

        /**l'oggetto areObjects contiene il valore booleano
         * chye la funzione isObject ritorna.
         */
        const areObjects = isObject(val1) && isObject(val2);

        /**a questo punto inizia una serie di chiamate ricorsive (?) */
        if (
            areObjects && !deepEqual(val1, val2) ||
            !areObjects && val1 !== val2
        ) {
            return false;
        }
    }
    return true;
}

function isObject(object) {
    return object != null && typeof object === 'object';
}

const g1 = {
    name: 'Joe',
    address: {
        city: 'New York',
        cap: '32324'
    }
};
const g2 = {
    name: 'Joe',
    address: {
        city: 'New York',
        cap: '32324'
    }
};

const g3 = {
    name: 'peppe',
    address: {
        city: 'benevento',
        cap: '123'
    }
};

/** INIZIO DEL PROGRAMMA
 * per prima cosa stampo il valore che la funzione deepEqual ritorna, con i parametri g1, e g2, che sono
 * due oggetti UGUALI 
*/
console.log(deepEqual(g1, g2));         //stamperà TRUE
console.log(deepEqual(g1, g3));         //stamperà FALSE