module.exports = class Lista{
    #elementos;
    
    constructor(){
        this.#elementos = [];;
    }

    count() {
        return this.#elementos.length;
    }

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

    add(clave, valor){
        if(this.#elementos.includes(clave) === false){
            return this.#elementos.push({clave, valor})
        }
    }

    sort(){
        return this.#elementos.sort(function(a,b){return a-b});
    } 

    sort_descending(){
        return this.#elementos.sort(function(a,b){return b-a});
    }

    remove(clave){
        var i = 0;
        while (i<this.#elementos.length){
            if(this.#elementos[i].clave === clave){
                this.#elementos.splice(i,1)
            } else {
                ++i;
            }
        }
        return this.#elementos
    }
}
