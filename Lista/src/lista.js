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
        if(this.#elementos.length>1){
            this.#elementos.sort((a,b)=>(a.clave>b.clave) ?  1:-1)
        };

        return NaN
    }

    add(clave, valor){
        let updatedKey;
        this.#elementos.push({clave,valor});

        if(clave !== this.#elementos.clave){
            return this.#elementos.clave = updatedKey;
        }
        if(typeof(this.#elementos.clave == "string")){
            return this.#elementos.clave;
        }
    }

    remove(clave){
        
        const index = this.#elementos.indexOf(clave)
        while(index>-1){
            this.#elementos.splice(index,1)
            index = this.#elementos.indexOf(clave)
        }
    }
}