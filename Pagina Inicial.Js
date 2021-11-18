const switcher = document.querySelector("#themeswitcher");

function themeswitch(){
    if(document.getElementById('checkboxdarkmode').checked){
        document.documentElement.setAttribute('data-theme', 'light')
        switcher.setAttribute('src', '/Images/NicePng_moon-png_60348.png')
        document.getElementById("navbartop").className += " navbar-light";
        document.getElementById("navbartop").className += " bg-light";
        document.getElementById("footerbottom").className += " bg-light";
        document.getElementById("navbartop").className = document.getElementById("navbartop").className.replace( /(?:^|\s)navbar-dark(?!\S)/g , '' )
        document.getElementById("navbartop").className = document.getElementById("navbartop").className.replace( /(?:^|\s)bg-dark(?!\S)/g , '' )
        document.getElementById("footerbottom").className = document.getElementById("footerbottom").className.replace( /(?:^|\s)bg-dark(?!\S)/g , '' )
        document.getElementById("carrinho").className = document.getElementById("carrinho").className.replace( /(?:^|\s)btn-dark(?!\S)/g , '' )
        cartswitcher.setAttribute('src', 'Images/shopping-cart.png');
    }else{
        document.documentElement.setAttribute('data-theme', 'dark')
        switcher.setAttribute('src', '/Images/sun-64x64.png')
        document.getElementById("footerbottom").className += " bg-dark";
        document.getElementById("navbartop").className += " navbar-dark";
        document.getElementById("navbartop").className += " bg-dark";
        document.getElementById("footerbottom").className = document.getElementById("footerbottom").className.replace( /(?:^|\s)bg-light(?!\S)/g , '' )
        document.getElementById("navbartop").className = document.getElementById("navbartop").className.replace( /(?:^|\s)navbar-light(?!\S)/g , '' )
        document.getElementById("navbartop").className = document.getElementById("navbartop").className.replace( /(?:^|\s)bg-light(?!\S)/g , '' )
        document.getElementById("carrinho").className = document.getElementById("carrinho").className.replace( /(?:^|\s)btn-light(?!\S)/g , '' )
        cartswitcher.setAttribute('src', 'Images/shopping-cart-white.png');

    }
}

 