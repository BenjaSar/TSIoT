/**** LISTA DE PRUEBAS ***
- Cuando se agrega un elemento a una lista vacía la lista de claves está ordenada
- Cuando se agrega un elemento al principio la lista de claves está ordenada
 */

const assert = require("chai").assert;
const Lista = require("../src/lista.js");

describe("en una lista vacia" , function() {
    var lista = new Lista();
    it("hay cero elementos", function() {
        assert.equal(lista.count(), 0);
    })

    it("No se encuentra ninguna clave", function(){
        assert.isNaN(lista.find("clave"));
    })
})

describe("Cuando se agrega un elemento a la lista vacia", function(){
    var lista = new Lista();
    lista.add("clave", "valor"); 

     it("Hay un elemento", function(){
        assert.equal(lista.count(), 1)
    }) 

    it("Recuperar un valor a partir de la clave", function(){
        assert.equal(lista.find("clave"), "valor")
    })
    
    it("Se admite solo texto para clave", function(){
        assert.equal(lista.find(50), "valor")
    })

    it("Agregar clave y actualizar clave", function(){
        assert.equal(lista.find("updatedKey"), "valor")
    })
})
