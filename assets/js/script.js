// ******************** Genera Borde Imagen ********************

document.querySelector("#AddBorde").onclick = function () {
  let cambia = document.getElementById("AddBorde");

  if (cambia.style.border == "2px solid red") {
    cambia.style.border = "0px";
  } else {
    cambia.style.border = "2px solid red";
  }
};

// ******************** Validación Compra Sticker ********************

function validaNum(event) {
  if (event.charCode >= 48 && event.charCode <= 57) {
    return true;
  }
  return false;
}

document.querySelector(".CompraSticker").onclick = function () {
  let valor1 = document.querySelector("#Sticker1").value;
  let valor2 = document.querySelector("#Sticker2").value;
  let valor3 = document.querySelector("#Sticker3").value;

  if (valor1 == "") {
    valor1 = 0;
  }
  if (valor2 == "") {
    valor2 = 0;
  }
  if (valor3 == "") {
    valor3 = 0;
  }

  let sumatoria = parseInt(valor1) + parseInt(valor2) + parseInt(valor3);
  if (sumatoria <= 10) {
    document.querySelector("#ValidaCompra").innerHTML =
      "Llevas " + sumatoria + " stickers";
  } else {
    document.querySelector("#ValidaCompra").innerHTML =
      "No puedes comprar más de 10 stickers";
  }

  document.querySelector("#MsgLogin").innerHTML = "";
};

// ******************** Validación Contraseña ********************

let select1 = document.getElementById("Combo1");
let select2 = document.getElementById("Combo2");
let select3 = document.getElementById("Combo3");

for (var i = 1; i <= 9; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;

  select1.add(option);
  select2.add(option.cloneNode(true));
  select3.add(option.cloneNode(true));
}

document.querySelector(".ValidaPass").onclick = function () {
  let key1 = document.querySelector("#Combo1").value;
  let key2 = document.querySelector("#Combo2").value;
  let key3 = document.querySelector("#Combo3").value;
  let passcode = key1 + key2 + key3;

  if (passcode == "911") {
    document.querySelector("#MsgLogin").innerHTML = "Contraseña 1 Correcta";
  } else if (passcode == "714") {
    document.querySelector("#MsgLogin").innerHTML = "Contraseña 2 Correcta";
  } else {
    document.querySelector("#MsgLogin").innerHTML = "Contraseña Incorrecta";
  }

  document.querySelector("#ValidaCompra").innerHTML = "";
};
