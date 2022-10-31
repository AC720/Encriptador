const cuadroTexto = document.querySelector(".cuadro-texto");
const cuadroMensaje = document.querySelector(".cuadro-mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"


function btnEncriptar() {
    const textoEncriptado = encriptar(cuadroTexto.value)
    cuadroMensaje.value = textoEncriptado
    cuadroMensaje.style.backgroundImage="none"
    cuadroTexto.value = ""
    btnCopy.style.display = "block"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;    
}

//Desencriptar

function btnDesencriptar() {
    const textoEncriptado = desencriptar(cuadroTexto.value)
    cuadroMensaje.value = textoEncriptado
    cuadroTexto.value = ""  
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}

//botón copiar

function copiar() {
    
    cuadroMensaje.select();
    navigator.clipboard.writeText(cuadroMensaje.value)
    cuadroMensaje.value = "";
    alert("Texto Copiado")
}




 



