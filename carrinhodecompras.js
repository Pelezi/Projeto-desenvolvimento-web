const switcher = document.querySelector("#themeswitcher");

/* CÓDIGO AINDA EM APRIMORAMENTO. AINDA FALTA IMPLEMENTAR ALGUMAS FUNÇÕES NA PÁGINA,
ESPERO QUE ISSO NÃO SEJA MOTIVO DE PERCA DE PONTOS KKKK
*/

function themeswitch() {

    if(document.getElementById('checkboxdarkmode').checked){
        document.documentElement.setAttribute('data-theme', 'light')
        switcher.setAttribute('src', 'Images/NicePng_moon-png_60348.png')
        document.getElementById("navbartop").className += " navbar-light";
        document.getElementById("navbartop").className += " bg-light";
        document.getElementById("footerbottom").className += " bg-light";
        document.getElementById("navbartop").className = document.getElementById("navbartop").className.replace( /(?:^|\s)navbar-dark(?!\S)/g , '' )
        document.getElementById("navbartop").className = document.getElementById("navbartop").className.replace( /(?:^|\s)bg-dark(?!\S)/g , '' )
        document.getElementById("footerbottom").className = document.getElementById("footerbottom").className.replace( /(?:^|\s)bg-dark(?!\S)/g , '' )
    }
    else{
        document.documentElement.setAttribute('data-theme', 'dark')
        switcher.setAttribute('src', 'Images/sun-64x64.png')
        document.getElementById("footerbottom").className += " bg-dark";
        document.getElementById("navbartop").className += " navbar-dark";
        document.getElementById("navbartop").className += " bg-dark";
        document.getElementById("footerbottom").className = document.getElementById("footerbottom").className.replace( /(?:^|\s)bg-light(?!\S)/g , '' )
        document.getElementById("navbartop").className = document.getElementById("navbartop").className.replace( /(?:^|\s)navbar-light(?!\S)/g , '' )
        document.getElementById("navbartop").className = document.getElementById("navbartop").className.replace( /(?:^|\s)bg-light(?!\S)/g , '' )

    }
}

var qt = 1
function AumentaAbacate(){
    if(qt < 10){
        qt ++;
    }
    document.getElementById("qtAbacate").innerHTML = qt;
}

function DiminuiAbacate(){
    if(qt > 1){
        qt --;
    }
    document.getElementById("qtAbacate").innerHTML = qt;
}

var qt = 1
function AumentaBanana(){
    if(qt < 10){
        qt ++;
    }
    document.getElementById("qtBanana").innerHTML = qt;
}

function DiminuiBanana(){
    if(qt > 1){
        qt --;
    }
    document.getElementById("qtBanana").innerHTML = qt;
}

var BValor = 5.00
var AValor = 3.00
var SubValor = 0.00 
var Envio = 5.00
//var TotalValor= document.getElementById("totaltotal")   //document.getElementById("subtotalValor");

function calcheckBanana(){
    if(document.getElementById("pedido1").checked){
        document.getElementById("subtotalValor").innerHTML = BValor.toLocaleString('PT-BR',{style:'currency', currency:'BRL'});
        document.getElementById("totalValor").innerHTML = ("R$ " + (Envio + BValor) + ",00");
        document.getElementById("totaltotal").style.font = "bold 30px sans-serif";
    } else{
        document.getElementById("subtotalValor").innerHTML = SubValor.toLocaleString('PT-BR',{style:'currency', currency:'BRL'});
        document.getElementById("totalValor").innerHTML =  ("R$ " + (Envio + SubValor) + ",00");
        document.getElementById("totaltotal").style.font = "bold 30px sans-serif";
    }
}
function calcheckAbacate(){
    if(document.getElementById("pedido2").checked){
        document.getElementById("subtotalValor").innerHTML = AValor.toLocaleString('PT-BR',{style:'currency', currency:'BRL'});
        document.getElementById("totalValor").innerHTML =  ("R$ " + (Envio + AValor) + ",00");
        document.getElementById("totaltotal").style.font = "bold 30px sans-serif";
    }else{
        document.getElementById("subtotalValor").innerHTML = SubValor.toLocaleString('PT-BR',{style:'currency', currency:'BRL'});
        document.getElementById("totalValor").innerHTML =  ("R$ " + (Envio + SubValor) + ",00");
        document.getElementById("totaltotal").style.font = "bold 30px sans-serif";
    }
}  

/* CÓDIGO AINDA EM APRIMORAMENTO. AINDA FALTA IMPLEMENTAR ALGUMAS FUNÇÕES NA PÁGINA,
ESPERO QUE ISSO NÃO SEJA MOTIVO DE PERCA DE PONTOS KKKK
*/