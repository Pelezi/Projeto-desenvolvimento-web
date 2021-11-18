$(document).ready(function(){
    $('#btn_cep').on('click',function(event){
        event.preventDefault();
        var Dados=$(this).serialize();
        var cep=$ ('#cep').val();
        var retorno;
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            method:'get',
            dataType:'json',
            data: Dados,
            success:function(Dados){
               $ ('.resultado_cep').html('').append(`<div>${Dados.logradouro}, ${Dados.bairro} - ${Dados.localidade} - ${Dados.uf} </div> <p></p> Normal  <p></p> 1 dia útil
               <p></p> <h3>R$ 5,00 </h3>`)
            },
            error:function(Dados) {
                retorno = $ ('.resultado_cep').html('').append('CEP não encontrado. Tente novamente ou click em "Não sei o CEP"');
            }
        });
    });
});

const switcher = document.querySelector("#themeswitcher");

function themeswitch() {

    if(document.getElementById('checkboxdarkmode').checked){
        document.documentElement.setAttribute('data-theme', 'light')
        switcher.setAttribute('src', '/Images/NicePng_moon-png_60348.png')
        document.getElementById("navbartop").className += " navbar-light";
        document.getElementById("navbartop").className += " bg-light";
        document.getElementById("footerbottom").className += " bg-light";
        document.getElementById("navbartop").className = document.getElementById("navbartop").className.replace( /(?:^|\s)navbar-dark(?!\S)/g , '' )
        document.getElementById("navbartop").className = document.getElementById("navbartop").className.replace( /(?:^|\s)bg-dark(?!\S)/g , '' )
        document.getElementById("footerbottom").className = document.getElementById("footerbottom").className.replace( /(?:^|\s)bg-dark(?!\S)/g , '' )
    }else{
        document.documentElement.setAttribute('data-theme', 'dark')
        switcher.setAttribute('src', '/Images/sun-64x64.png')
        document.getElementById("footerbottom").className += " bg-dark";
        document.getElementById("navbartop").className += " navbar-dark";
        document.getElementById("navbartop").className += " bg-dark";
        document.getElementById("footerbottom").className = document.getElementById("footerbottom").className.replace( /(?:^|\s)bg-light(?!\S)/g , '' )
        document.getElementById("navbartop").className = document.getElementById("navbartop").className.replace( /(?:^|\s)navbar-light(?!\S)/g , '' )
        document.getElementById("navbartop").className = document.getElementById("navbartop").className.replace( /(?:^|\s)bg-light(?!\S)/g , '' )

    }
}

function mascara(t, mask){
    var i = t.value.length;
    var saida = mask.substring(1,0);
    var texto = mask.substring(i)
    if (texto.substring(0,1) != saida){
    t.value += texto.substring(0,1);
    }
}

let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal-content');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal="";
var CEP = document.querySelector('#cep')

for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}

btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});