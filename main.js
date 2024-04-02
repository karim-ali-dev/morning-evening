let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');

window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *4 + 'px';
    mountains3.style.top = value * 2+ 'px';
    mountains4.style.top = value * 1.5+ 'px';
    river.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value *3 + 'px';
    nouvil.style.fontSize = value + 'px';
    if (scrollY >= 84) {
        nouvil.style.fontSize = '84px'; // تحديد حجم الخط بوحدة القياس "px"
        nouvil.style.position = 'fixed'; // تحديد وضعية العنصر بوحدة القياس "fixed"
        if (scrollY >= 448) {
            nouvil.style.display = 'none'; // تحديد عرض العنصر بوحدة القياس "none"
        } else {
            nouvil.style.display = 'block'; // تحديد عرض العنصر بوحدة القياس "block"
        }
        if (scrollY >= 149) {
            document.querySelector('.main').style.background = 'linear-gradient(#3fa0e5, rgb(8, 0, 16))';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#7204bb,#080010)'

        }
        
    }
    
    
};


