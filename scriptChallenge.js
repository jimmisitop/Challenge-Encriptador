var encriptar = document.getElementById("encriptarBoton")
var desencriptar = document.getElementById("desencriptarBoton")
var copiarTexto = document.getElementById("copiar")

function encriptarTexto(){
  var encriptarTexto = document.getElementById("textoEncriptar").value.toLowerCase();
  var textoEncriptado = encriptarTexto.replace(/e/igm,"enter");
  var textoEncriptado = textoEncriptado.replace(/o/igm,"ober");
  var textoEncriptado = textoEncriptado.replace(/i/igm,"imes");
  var textoEncriptado = textoEncriptado.replace(/a/igm,"ai");
  var textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");

  document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}

function desencriptarTexto(){
  var desencriptarTexto = document.getElementById("textoEncriptar").value.toLowerCase();
  var textoDesencriptado = desencriptarTexto.replace(/enter/igm,"e");
  var textoDesencriptado = textoDesencriptado.replace(/ober/igm,"o");
  var textoDesencriptado = textoDesencriptado.replace(/imes/igm,"i");
  var textoDesencriptado = textoDesencriptado.replace(/ai/igm,"a");
  var textoDesencriptado = textoDesencriptado.replace(/ufat/igm,"u");

  document.getElementById("textoDesencriptado").innerHTML = textoDesencriptado;
}

function copiar(){
  var texto = document.querySelector("textoDesencriptado");
  texto.select();
  document.execCommand("copy");
}

encriptar.onclick = encriptarTexto;
desencriptar.onclick = desencriptarTexto;
copiarTexto.onclick = copiar;