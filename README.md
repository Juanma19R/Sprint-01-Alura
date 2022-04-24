# ¿Como funciona el encriptador?
Las llaves de encriptación que se utilizan son las siguientes:
(Solo funciona con teclas minúsculas y sin acentos)

`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`

Ejemplo:
`"Bienvenido a mi repositorio" => "Bimesenternventernimesdober ai mimes renterpobersimestoberrimesober"`

# Encriptación y Desencriptación
La función "encrypt" tiene una varliable local a la cual se le asigna el valor de "input". 
Con el method split se le asigna a la variable local "array" el valor de "string" convertido a un array y luego "arrayCopy" copia el valor de "array".
"replacements" es un array de strings; contiene las llaves para reemplazar a sus respectivas letras, estas son: ['imes','ai','enter','ober','ufat'].
"vowels" es también un array de strings y este contiene las letras vocales. ['i','a','e','o','u'].
En el array, "arrayCopy" es donde se harán los reemplazos de las vocales por sus llaves correspondientes.
Se utilizo un bucle for anidado, el exterior recorre el array "vowels" y el interior recorre "array". 
Si el valor de "vowels" en el índice actual "i" (vowels[i]) coincide con un valor en el índice "j" de array(array[j]), se reemplazará el valor en el índice actual "j" de arrayCopy(arrayCopy[j]) y asi ArrayCopy se convertirá en nuestro texto encriptado.
Despues se le asigna a "encryptedMessage" mediante arrayCopy.join("") y finalmente, se muestra en el lugar correspondiente.

La función "decrypt" tiene a "keyletters", un array compuesto por las llaves de encriptación en expresiones regulares: [/imes/g,/ai/g,/enter/g,/ober/g,/ufat/g] (la letra g es para que se realice una búsqueda global de cada patrón).
El método string.replace() devuelve un nuevo string con una o más coincidencias de un patrón. 
Si utilizamos replace() y utilizamos de patrón expresiones regulares con el indicador "g", reemplazará a todo lo que coincida con ese patrón.
Se utilizo un for con los arrays "keyLetters" y "vowels", lo cual es fundamental que el orden de "vowels" coincida con el orden de sus reemplazos en "keyLetters". 
Despues un for recorre a "replacements" y comprueba que la llave en el índice actual(replacements[i]), se encuentre en el string "string" mediante el method "includes()". Si se encuentra una coincidencia, se procede mediante replace() a reemplazar todas las coincidencias.
El bucle for modifica constantemente a la variable "string" y finalmente se muestra el valor de "string".