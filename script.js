// Painel produtos

const btnhid = document.querySelector('#btnhid');
const pnlhid = document.querySelector('#pnlhid');

btnhid.addEventListener('click', function(){
    pnlhid.classList.toggle('hid');
    intvida.classList.add('hid');
    intsaude.classList.add('hid');
    intfinan.classList.add('hid');
})


//painel produtos interno

const vida = document.querySelector('#vida')
const saude = document.querySelector('#saude')
const finan = document.querySelector('#finan')

const intvida = document.querySelector('#intvida')
const intsaude = document.querySelector('#intsaude')
const intfinan = document.querySelector('#intfinan')

const intvida1 = document.querySelector('#intvida1')
const intsaude1 = document.querySelector('#intsaude1')
const intfinan1 = document.querySelector('#intfinan1')

vida.addEventListener('click', function(){
    intvida.classList.toggle('hid');
    intsaude.classList.add('hid');
    intfinan.classList.add('hid');

    intvida1.classList.toggle('hid');
    intsaude1.classList.add('hid');
    intfinan1.classList.add('hid');



})

saude.addEventListener('click', function(){
    intvida.classList.add('hid');
    intsaude.classList.toggle('hid');
    intfinan.classList.add('hid');

    intvida1.classList.add('hid');
    intsaude1.classList.toggle('hid');
    intfinan1.classList.add('hid');
})

finan.addEventListener('click', function(){
    intvida.classList.add('hid');
    intsaude.classList.add('hid');
    intfinan.classList.toggle('hid');

    intvida1.classList.add('hid');
    intsaude1.classList.add('hid');
    intfinan1.classList.toggle('hid');

})

//whats popup

const h4 = document.querySelectorAll('.btnwts');
const url = "https://wa.me/5541987299547?text=Olá,%20vim%20do%20site%20da%20GNSIX%20e%20gostaria%20de%20saber%20mais."

function openInNewTab(url){
    const win = window.open(url, '_blank');
    win.focus();
}

for (let i = 0; i < h4.length; i++){
    h4[i].addEventListener('click', function(){
        openInNewTab(url);
    })
}

