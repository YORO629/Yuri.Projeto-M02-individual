// Aparecer e nao aparecer a box para interagir com o usuario, dependendo da opcao escolhida. Ex: Caso escolhido Base64, as boxes relacionadas

const selecione = document.getElementById("selecao");
const incremento = document.getElementById("passoCesar");
const msgCesar = document.getElementById("receivedCesar")
const msg64 = document.querySelector(".mensagemRecebida64")
const output64 = document.querySelector(".output64")
const outputCesar = document.querySelector(".outputCesar")
const botao2 = document.querySelector(".botao2")
const code = document.getElementById("criptografar");
const decode = document.getElementById("descriptografar");
const buttom = document.getElementById("activeCripto")

selecao.addEventListener("click", function () {
  if (selecione.value == "Cifra de Cesar") {
    incremento.style.display = "block";
    msgCesar.style.display = "block";
    outputCesar.style.display = "block";
    msg64.style.display = "none";
    output64.style.display = "none";


  } else {
    incremento.style.display = "none";
    msgCesar.style.display = "none";
    outputCesar.style.display = "none";
    msg64.style.display = "block";
    output64.style.display = "block";
  }
})



//Empacota o texto para base64
function base64() {
  var entrada = document.getElementById("received64").value;
  var resultado = document.getElementById("output64");
  if (document.getElementById("criptografar").checked)
    resultado.innerHTML = btoa(entrada);
  else resultado.innerHTML = atob(entrada);
}

//Passo do cesar para adicionar +1 ou quanto o usuario quiser
function validandoPasso() {
  var passo = document.getElementById("passoCesar").value;
  passo = passo % 26;
  if (document.getElementById("descriptografar").checked) {
    passo = passo * -1;
  }
  cesar(passo);
}

//Empacota o texto para cifra de cesar

function cesar(passo) {
  var entrada = document.getElementById("receivedCesar").value;
  var outputcesar = document.getElementById("outputCesar");
  var txtChange = "";
  outputcesar.innerHTML = "";
  for (var i = 0; i < entrada.length; i++) {
    txtChange = entrada.charCodeAt(i);
    if (txtChange >= 65 && txtChange <= 90) {
      txtChange = txtChange + passo;
      if (txtChange > 90) {
        txtChange = txtChange - 26;
      } else if (txtChange < 65) {
        txtChange = txtChange + 26;
      }
    }
    if (txtChange >= 97 && txtChange <= 122) {
      txtChange = txtChange + passo;
      if (txtChange > 122) {
        txtChange = txtChange - 26;
      } else if (txtChange < 97) {
        txtChange = txtChange + 26;
      }
    }
    outputcesar.innerHTML += String.fromCharCode(txtChange);
  }
}
