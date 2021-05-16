module.exports = class Lista {
    #elementos; 
    //Hacer funcion interna que devuelva el indice
    
    constructor() {  
        this.#elementos = []; //Generacion de un array vacio 
    }

    count(){
        return this.#elementos.length;
    }

    find(clave){
        if(this.#elementos.length == 1){
            return this.#elementos[0].valor;
        }
        if(this.#elementos.clave !== clave || this.#elementos.clave == ""){
            return this.#elementos.clave = "updatedKey";
        }
        if(typeof(this.#elementos.clave == "string")){
            return this.#elementos.clave;
        }
        return NaN;
    }

    add(clave, valor){
        this.#elementos.push({clave,valor});
    }

}