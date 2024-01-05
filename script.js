const botao = document.querySelector('#botao');




function clickEvent() {
    const email = document.querySelector('#e-mail').value;
    const senha = document.querySelector('#senha').value;
    const text = document.querySelector('#text');
    const text2 = document.querySelector('#text2');
    const text3 = document.querySelector('#text3');
    
    if (email == "caiki538" && senha == "caiki123") {
        text3.style.visibility = 'visible';
        text2.style.visibility = 'hidden';
        text.style.visibility = 'hidden';
    } else if(email == "" || senha == ""){
        text.style.visibility = 'visible';
        text2.style.visibility = 'hidden';
        text3.style.visibility = 'hidden';
       
    }else{
        text2.style.visibility = 'visible';
        text.style.visibility = 'hidden';
        text3.style.visibility = 'hidden';
        
    }
    
}




function mostrarSenha(){
    const eyeClosed = document.querySelector('#eyeClosed');
    const eyeOpen = document.querySelector('#eyeOpen');
    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type', 'text')
        eyeOpen.style.display = 'flex';
        eyeClosed.style.display = 'none';
    }else{
        senha.setAttribute('type', 'password');
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'flex'
    }

};



botao.addEventListener('click', clickEvent);


