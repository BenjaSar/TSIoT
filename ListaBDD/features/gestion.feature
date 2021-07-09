# language: es
# encoding: utf-8


Característica: Gestionar las parejas almacenadas en la lista

Escenario: Verificar el estado de una lista vacía
    Dado una lista vacía
    Entonces la lista tiene 0 elemento almacenado
    Y si busco la clave "clave" no obtengo ningun <valor>

Esquema del escenario: Agregar datos a una lista vacía
    Dado una lista vacía
    Cuando agrego la clave "<clave>" con el valor <valor>
    Entonces la lista tiene 1 elemento almacenado
    Y si busco la clave "clave" obtengo el valor <valor>
    Y si busco la clave "letras" obtengo el valor <abcde>
    Y si busco la clave "numero" obtengo el valor <7>
    Ejemplos:
    | clave | valor |
    | letras| abcde |
    | numero|   7   |

Escenario: buscar un elemento en una lista con datos
    Dado una lista con los siguientes elementos
    |  clave   | valor |
    | "letras" | abcde |
    | "numero" |   7   |
    Entonces la lista tiene 2 elemento almacenado
    
    Cuando agrego la nueva clave "casa" con el valor mesa
    Entonces deberia ver la lista en el siguiente orden
    |  clave   | valor |
    |  "casa"  |  mesa |
    | "letras" | abcde |
    | "numero" |   7   |
    Entonces deberia ver la lista en el orden inverso
    |  clave   | valor |
    | "numero" |   7   |
    | "letras" | abcde |
    |  "casa"  |  mesa |
  
    Cuando elimino la clave "letras" con el valor abcde
    Entonces debería mostrar la lista con un elemento menos
    |  clave   | valor |
    |  "casa"  |  mesa |
    | "numero" |   7   |

  

    

    

