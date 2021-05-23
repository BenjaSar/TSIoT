# language: es
# encoding: utf-8


Característica: Gestionar las parejas almacenadas en la lista

Escenario: Verificar el estado de una lista vacía
    Dado una lista vacía
    Entonces la lista tiene 0 elemento almacenado
    Y si busco la clave "clave" no obtengo ningun valor

Esquema del escenario: Agregar datos a una lista vacía
    Dado una lista vacía
    Cuando agrego la clave "<clave>" con el valor <valor>
    Entonces la lista tiene 1 elemento almacenado
    Y si busco la clave "<clave>" obtengo el valor <valor>
    Ejemplos:
    | clave | valor |
    | letras| abcde |
    | numero|   7   |

Escenario: buscar un elemento en una lista con datos
    Dado una lista con los siguientes elementos
    | clave | valor    |
    | "letras" | abcde |
    | "numero" |   7   |
    Entonces la lista tiene 2 elemento almacenado
