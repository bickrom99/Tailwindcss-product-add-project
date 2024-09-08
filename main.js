let produc_card_add = document.querySelector('#produc_card_add');
let show_eye = document.querySelector('#show_eye');
let produc_display = document.querySelector('#produc_display');
let product_description_close = document.querySelector('#product_description_close');
let body_bg_color = document.querySelector('#body_bg_color');
// Product color checker here
let color_result = document.querySelector('#color_result');
let color_1 = document.querySelector('#color_1');
let color_2 = document.querySelector('#color_2');
let color_3 = document.querySelector('#color_3');

// Pruduct Show or Hide js work here
show_eye.addEventListener('click', (e)=>{
    e.preventDefault();
    produc_card_add.style.display = 'none';
    produc_display.style.display = 'block';
    body_bg_color.style.backgroundColor = '#9095A0';
})

product_description_close.addEventListener('click', ()=> {
    produc_display.style.display = 'none';
    produc_card_add.style.display = 'block'
    body_bg_color.style.backgroundColor = 'white';
})


color_1.addEventListener('click', ()=> {
    color_result.style.backgroundColor = 'white';
    color_result.style.border = '1px solid #E5E7EB';

})
color_2.addEventListener('click', ()=> {
    color_result.style.backgroundColor = '#E5E7EB';
})

color_3.addEventListener('click', ()=> {
    color_result.style.backgroundColor = 'black';
})




