/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará a terminar la función. Si se no se recibe un string retornará -1.
*/

function contarVocales(texto) {
  var vocales = 0
  
  if(typeof texto == 'string'){
    var mayus = texto.toUpperCase()
    
    for( m of mayus){
      if(m == 'A' || m == 'E' || m == 'I' || m == 'O' || m == 'U' ){
        vocales ++
      }

    }
  } else {
    return -1
  }
  return vocales
}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return "https://github.com/gaenima/Fizzmod_TP_1.git"
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/


const crearClase = () => {
  
    return (
    class Ejercicio3 {
    static contadorInstancias = 0

    constructor(texto){
      this.texto = texto
      Ejercicio3.contadorInstancias++
    }
    contadorPalabras(texto){
      if(typeof texto == 'string'){
          let trimTexto = texto.trim()
        if (trimTexto == "") {
          return 0
        } else {
          let palabras = trimTexto.split(" ")
          let totalPalabras = palabras.length
          
        }
      } 
      else {
        return -1
      }
      return totalPalabras
    }
    hayNumeros(texto){
      if(typeof texto == 'string'){
      let re = /[0-9]/gm
      let result = re.exec(texto)
      if(texto != null)
      return true
      else return false
      } else {
        return -1
      }

    }
  }

  )
}


module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
