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