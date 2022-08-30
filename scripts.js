const textIn = document.querySelector(".textIn")
const msj = document.querySelector(".msj")

function encrypt(stringEncrypt){

    let matrizLetras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase();

    for( let i = 0; i < matrizLetras.length; i++){
        if(stringEncrypt.includes(matrizLetras[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(matrizLetras[i][0],matrizLetras[i][1]);
        }
    }
    return stringEncrypt;
}

function encryptButton(){
    const encryptText = encrypt(textIn.value);
    msj.value = encryptText;
    msj.style.backgroundImage = "none"
    textIn.value = ""
}

function decrypt(stringDecrypt){
    let matrizPalabras = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for (let i = 0; i < matrizPalabras.length; i++){
        if (stringDecrypt.includes(matrizPalabras[i][1])){
            stringDecrypt = stringDecrypt.replaceAll(matrizPalabras[i][1], matrizPalabras[i][0]);
        }
    }
    return stringDecrypt;
}

function decryptButton(){
    const encryptedText = decrypt(textIn.value);
    msj.value = encryptedText;
    textIn.value = ""
}

function copiar(){
    msj.select()
    navigator.clipboard.writeText(msj.value)
    msj.value = ""
    alert("Texto copiado correctamente")
}