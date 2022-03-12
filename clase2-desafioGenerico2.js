/*En este ejercicio construiremos una herramienta que permita que diferentes personas puedan llevar cuentas individuales sobre algo que deseen contabilizar, al mismo tiempo que nos brinde una contabilidad general del total contado. Para ello: */


class Contador{
    constructor(responsable, cuentaIndividual){
        this.responsable = responsable;
        this.cuentaIndividual = cuentaIndividual;
    }

    static cuentaGlobal = 0

    obtenerResponsable() {
        return this.responsable
    }

    obtenerCuentaIndividual() {
        return this.cuentaIndividual
    }

    obtenerCuentaGlobal() {
        return cuentaGlobal
    }

    contar() {
        this.cuentaIndividual++
        this.cuentaGlobal++
    }
}


const pers1 = new Contador("Noelia", 0)

pers1.obtenerResponsable()
pers1.obtenerCuentaIndividual()
pers1.contar()
pers1.contar()

console.log(pers1);