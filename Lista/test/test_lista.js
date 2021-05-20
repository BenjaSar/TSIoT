/**** LISTA DE PRUEBAS ***
- Cuando se agrega un elemento a una lista vacía la lista de claves está ordenada
- Cuando se agrega un elemento al principio la lista de claves está ordenada
- Array de claves ordenadas
 */

const assert = require("chai").assert;
const Lista = require("../src/lista.js");

describe("en una lista vacia" , function() {
    var lista = new Lista();
    it("hay cero elementos", function() {
        assert.strictEqual(lista.count(), 0);
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

    it("Lista de claves ordenada", function(){
        assert.strictEqual(lista.find("computador"), "mouse");
        assert.strictEqual(lista.find("microfono"), "teclado"); 
    })
})

describe("Cuando se elimina un elemento de la lista", function(){
    var lista = new Lista()   
    
    it("Debería retornar -1 lo cual indica que el elemento no está en la lista", function(){
        assert.equal(lista.remove("casa"))
    })

})
