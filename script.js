
// captura do form1 e calculo da hipotenusa 


const $form1 = document.getElementById("form1");

const $capturaValorCO = document.getElementById("valorCatetoOposto");

const $capturaValorCA = document.getElementById("valorCatetoAdjacente");

const $hipotenusa = document.getElementById("resultado1");

function hipotenusa(){
    const ca =$capturaValorCA.value;
    const co =$capturaValorCO.value;

    if (ca <= 0 || co <= 0) {
        console.log("calculo não foi liberado");
      } else {
        $hipotenusa.value = Math.hypot(ca, co).toFixed(2);
      } 
}

  
$form1.addEventListener("submit", function (event) {
    event.preventDefault();
    hipotenusa();
});

// captura do form2 e calculo do cateto 


const $form2 = document.getElementById("form2");

const $capturaValorCateto = document.getElementById("valorCateto");

const $capturaValorHipotenusa = document.getElementById("valorHipotenusa");

const $cateto = document.getElementById("resultado2");


function resultado(){
    const ca =$capturaValorCateto.value;
    const hi =$capturaValorHipotenusa.value;

    const raizCa = Math.sqrt(ca);
    const raizHi = Math.sqrt(hi);

    const sub = raizCa - raizHi

    if (ca <= 0 || hi <= 0) {
        console.log("calculo não foi liberado");
      } else {
        $cateto.value = Math.sqrt(sub);
      } 
}

  
$form2.addEventListener("submit", function (event) {
    event.preventDefault();
    resultado();
});











