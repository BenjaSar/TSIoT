module.exports = class Lista {
    #elementos; 
    
    constructor(clave, valor) {     
        this.#elementos =[]
        this.clave = clave;
        this.valor = valor;
    }

    count(){
        return this.#elementos.length;
    }
    
    //getter
    find(clave){
            var i;
        if(this.#elementos.length > 0){
            for (i>0; i<=this.#elementos.length; i++){
                if(this.#elementos[i].indexOf(clave)>-1){
                    return this.#elementos[i].valor
                }      
            }           
        } 
        return NaN;
    }

    sort(){
        this.#elementos.sort(function(c1, c2){
            if(c1.clave > c2.clave) {
                return  c1.valor;
            } else{
                return c2.valor
            }
        })
    }

    add(clave, valor){
        if(this.#elementos.includes(clave) === false){
            return this.#elementos.push({clave, valor})
        }
    }

    isString(){
        if(this.#elementos.includes("^[a-zA-Z\\s]+$")){
            return true
        }
        return false
    }

    //setter
    actualizar(clave){
            this.#elementos.forEach((element, index) => {
                if(element.clave != clave){
                    return this.#elementos[index] = clave
                }
            })
    }
    
    remove(clave){
        const index = this.#elementos.indexOf(clave)
        while(index>-1){
            return this.#elementos.splice(index,1)          
        }
    }
}
