/*En este ejercicio construiremos una herramienta que permita que diferentes personas puedan llevar cuentas individuales sobre algo que deseen contabilizar, al mismo tiempo que nos brinde una contabilidad general del total contado. Para ello: */


class Contador{

    responsable;
    cuentaIndividual;
    static cuentaGlobal = 0;


    constructor(responsable){
        this.responsable = responsable;
        this.cuentaIndividual = 0;
    }

    obtenerResponsable() {
        return this.responsable
    }

    obtenerCuentaIndividual() {
        return this.cuentaIndividual
    }

    obtenerCuentaGlobal() {
        return Contador.cuentaGlobal;
    }

    contar() {
        this.cuentaIndividual++;
        Contador.cuentaGlobal++;
    }
}


const pers1 = new Contador("Noelia")
const pers2 = new Contador("Belen")

pers1.obtenerResponsable()
pers1.obtenerCuentaIndividual()
pers1.contar()
pers1.contar()

pers2.obtenerResponsable()
pers2.obtenerCuentaIndividual()
pers2.contar()
pers2.contar()
pers2.contar()
pers2.contar()

console.log(Contador);
console.log("persona1: ",pers1, "persona2: ", pers2);