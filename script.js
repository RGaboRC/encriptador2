function encritpar(){
    let texto = document.getElementById("encriptador-texto").value;
    //Validacion por expresiones regulares 
    // para mas info checa la lista en https://regexr.com/
    const caracteresValidos = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;
    
    if(caracteresValidos.test(texto)){ 
        let textoEncriptado = encriptacion(texto);
        document.getElementById("salida-texto").innerHTML = textoEncriptado;
        document.getElementById("encriptador-texto").value = "";
    }else{
        alert("Tu texto no es valido, escribelo en minusculas y sin acentos.")
    }
}

function desencriptar(){
    let texto = document.getElementById("encriptador-texto").value;
    //Validacion por expresiones regulares 
    // para mas info checa la lista en https://regexr.com/
    const caracteresValidos = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;
    
    if(caracteresValidos.test(texto)){ 
        let textoDesencriptado = desencriptado(texto);
        document.getElementById("salida-texto").innerHTML = textoDesencriptado;
        document.getElementById("encriptador-texto").value = "";
    }else{
        alert("Tu texto no es valido, escribelo en minusculas y sin acentos.")
    }
}

function copiar(){

    let textoCopiar = document.getElementById("salida-texto"); //se obtine el id del elemento
    textoCopiar.select(); //selecciona todo el texto en un elemento
    document.execCommand("copy"); //usamos el metodo copiar 
    window.getSelection().removeAllRanges(); //se deselecciona el elemento
}

function desapareser(){
    document.getElementById("respuesta-fondo").style.display = "none";
    document.getElementById("resutado-salida").style.display = "block";
}

function encriptacion(texto){
    let textoEncriptado = [];
    let textoSeparado = texto.split("");
            for(let i = 0; i < textoSeparado.length; i++){
                let letra = textoSeparado[i];
                if(letra == "o"){
                    textoEncriptado.push("ober");
                }else if(letra == "a"){
                    textoEncriptado.push("ai");
                }else if(letra == "e"){
                    textoEncriptado.push("enter");
                }else if(letra == "i"){
                    textoEncriptado.push("imes");
                }else if(letra == "u"){
                    textoEncriptado.push("ufat");
                }else{
                    textoEncriptado.push(letra);
                }
            }    

            textoEncriptado = textoEncriptado.join("");
            // console.log(textoEncriptado);
            desapareser();
            return textoEncriptado;
}


function desencriptado (texo){
    let textoSinOber = texo.replaceAll("ober", "o");
    let textoSinAi = textoSinOber.replaceAll("ai", "a");
    let textoSinEnter = textoSinAi.replaceAll("enter", "e");
    let textoSinImes = textoSinEnter.replaceAll("imes", "i");
    let textoDesencriptado = textoSinImes.replaceAll("ufat", "u");
    desapareser();
    return textoDesencriptado;
    // console.log(textoDesencriptado);

}

