/**
 * Singleton
 * Está en un ambito global 
 * No está adentro de ninguna función.
 * No está dentro de alguna clase
 * Está en donde la computadora, lo quiera colocar en la memoria ram
 * cualquier componente puede disparar los cambios
 * apunta a la misma dirección de memoria.
 */

const Singleton = (function () {
    
    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }
    //al parecer lo que está en return es como su método público
    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function main() {

    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log('Misma instancia? ', (instance1 === instance2));
}

main();