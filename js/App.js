const btnEncrypt = document.querySelector('.main__buttons__encrypt');
const btnDencrypt = document.querySelector('.main__buttons__dencrypt');
const textEncrypt = document.querySelector('.main__section__encrypt');
const aviso = document.querySelector('.main__section__aviso__text');
const answr = document.querySelector('.main__section2__card__test');
const card = document.querySelector('.main__section2__card');
const btnCopy = document.querySelector('.main__section2__card__copybutton');

btnEncrypt.addEventListener("click", e=>{
    e.preventDefault();
    let text = (textEncrypt.value).normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" ); /* QUITO LOS ACENTOS Y LOS CARACTERES ESPECIALES */ 
    text = text.toLowerCase();
    

    if(text ==  ""){
        aviso.style.background = '#080b2b';
        aviso.style.color = '#FFFFFF';
        aviso.textContent = 'El texto no puede estar vacio.';
        aviso.style.fontweight = '1500';
        text = "";

        setTimeout(() => {
            aviso.removeAttribute('style')
        }, 500);
    }else if(text !==  textEncrypt.value){

        aviso.style.background = '#080b2b';
        aviso.style.color = '#FFFFFF';
        aviso.textContent = 'El texto debe estar en minusculas y NO puede contener caracteres especiales.';
        aviso.style.fontweight = '1500';
        text = "";

        setTimeout(() => {
            aviso.removeAttribute('style')
        }, 500);
    }else
     text = text.replace(/e/mg, 'enter' )
                .replace(/i/mg, 'imes' )
                .replace(/o/mg, 'ober' )
                .replace(/a/mg, 'ai')
                .replace(/u/mg, 'ufat' );
      card.style.visibility = 'hidden';
      answr.innerHTML = text;
      btnCopy.style.visibility = 'visible';


});

btnDencrypt.addEventListener("click", e=>{
    e.preventDefault();
    let text = (textEncrypt.value).normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" ); /* QUITO LOS ACENTOS Y LOS CARACTERES ESPECIALES */ 
    text = text.toLowerCase();
    

    if(text ==  ""){
        aviso.style.background = '#080b2b';
        aviso.style.color = '#FFFFFF';
        aviso.textContent = 'El texto no puede estar vacio.';
        aviso.style.fontweight = '1500';
        text = "";

        setTimeout(() => {
            aviso.removeAttribute('style')
        }, 500);
    }else if(text !==  textEncrypt.value){

        aviso.style.background = '#080b2b';
        aviso.style.color = '#FFFFFF';
        aviso.textContent = 'El texto debe estar en minusculas y NO puede contener caracteres especiales.';
        aviso.style.fontweight = '1500';
        text = "";

        setTimeout(() => {
            aviso.removeAttribute('style')
        }, 500);
    }else
     text = text.replace(/enter/mg, 'e' )
                .replace(/imes/mg, 'i' )
                .replace(/ober/mg, 'o' )
                .replace(/ai/mg, 'a')
                .replace(/ufat/mg, 'u' );
      card.style.visibility = 'hidden';
      answr.innerHTML = text;
      btnCopy.style.visibility = 'visible';
      btnDencrypt.addEventListener("click", e=>{
        e.preventDefault();

      });

});

btnCopy.addEventListener("click", e=>{
    e.preventDefault();
    let copy = answr;
    copy.select();
    document.execCommand('copy');
    textEncrypt.value = '';  // clear the text area before paste the encrypted text.
});