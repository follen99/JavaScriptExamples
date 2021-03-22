class Program{
    constructor(name){
        this.subject = name;
    }

    sayHello(){
        console.log("Hello "+this.subject);
    }
}

/**creo un nuovo oggetto 'program' utilizzando il costruttore della classe Program. 
 * Invoco immediatamente un suo metodo chiamato sayHello.
*/
new Program("Follen").sayHello();