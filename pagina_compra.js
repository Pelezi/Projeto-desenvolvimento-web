$(document).ready(function(){
    $('#btn_cep').on('click',function(event){
        event.preventDefault();
        var Dados=$(this).serialize();
        var cep=$ ('#cep').val();
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            method:'get',
            dataType:'json',
            data: Dados,
            success:function(Dados){
                    $ ('.resultado_cep').html('').append(`<div>${Dados.logradouro}, ${Dados.bairro} - ${Dados.localidade} - ${Dados.uf} </div> <p></p> Normal  <p></p> 1 dia útil
                    <p></p> <h3>R$ 20,00 </h3>`)
            },
            error:function(Dados) {
                $ ('.resultado_cep').html('').append('Cep não encontrado. Tente novamento ou click em "Não sei o CEP"');
            }
        });
    });
});

let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal-content');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal="";

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

