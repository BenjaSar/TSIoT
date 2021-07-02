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
        assert.notEqual(lista.count(), 0)
    }) 

    it("Recuperar un valor a partir de la clave", function(){
        assert.exists(lista.find("clave"), "valor")
    })
    it("Se admite solo texto para clave", function(){
        assert.equal(lista.isString(50), false)
    })
    it("Agregar clave y actualizar clave", function(){
        assert.equal(lista.actualizar("casa"))
    })
})

describe("Cuando se agregan elementos a una lista con elementos", function(){
    var lista = new Lista([{"computador": "mouse"}, {"microfono":"teclado"}, {"mesa": "llave"}, {"celular":"pato"}]);
    
    it(" Debe retornar la lista de claves ordenada en orden ascendente", function(){
        assert.equal(lista.sort());
        assert.equal(lista.sort()); 
    })
});

describe("Cuando se elimina un elemento de la lista", function(){
    var lista = new Lista([{"computador": "mouse"}])   
    
    it("Debería retornar -1 lo cual indica que el elemento no está en la lista", function(){
        assert.equal(lista.remove("casa"))
    })
});
