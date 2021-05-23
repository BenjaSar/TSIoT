module.exports = class Lista{
    #elementos;
    
    constructor(){
        this.#elementos = [];
    }

    count() {
        return this.#elementos.length;
    }

    find(clave){
        if (this.count() == 0){
            return NaN;
        } else{
            return this.#elementos[0].valor;
        } 
    }

    add(clave, valor){
        this.#elementos.push({clave, valor});
    }
}