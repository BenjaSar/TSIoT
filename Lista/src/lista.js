module.exports = class Lista {
    #elementos; 
    
    constructor(clave, valor) {  
        this.#elementos = []; 
        this.clave = clave;
        this.valor = valor;
    }

    count(){
        return this.#elementos.length;
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    find(clave){
        let i;
        if(this.#elementos.length > 0){
            for (i>0; i<=this.#elementos.length; i++){
                return this.#elementos[i].valor
            }
        } else{
            return NaN;
        }

    }

    sort(clave){
        this.#elementos.sort(function(a,b){
            if(a.clave>b.clave) return  a.valor;
            if(b.clave>a.clave) return  b.valor;
            return 0;
        });
    }

    add(clave, valor){
        if(this.#elementos.includes(clave) === false){
            return this.#elementos.push({clave, valor})
        }
        if(typeof(this.#elementos.clave === "string")){
            return this.#elementos.clave;
        }
    }

    actualizar(clave){
            this.#elementos.forEach((element, index) => {
                if(element.clave === clave){
                    this.#elementos[index] = clave
                }
            })
    }

    remove(clave){
        const index = this.#elementos.indexOf(clave)
        while(index>-1){
            this.#elementos.splice(index,1)
            index = this.#elementos.indexOf(clave)
        }
    }
}