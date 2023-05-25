//esse comando faz com que seja possivel mudar para a segunda aba do projeto

function clickMenu(){
    if(card_projetos2.style.display == 'none'){
        card_projetos2.style.display = 'flex'
        card_projetos.style.display = 'none'
    }else{
        card_projetos2.style.display = 'flex'
        card_projetos.style.display = 'none'
        
    }
    
}

//esse comando faz com que seja possivel mudar a terceira aba do projeto

function clickMenu2(){
    if(card_projetos3.style.display == 'none'){
        card_projetos3.style.display = 'flex'
        card_projetos2.style.display = 'none'
    }else{
        card_projetos3.style.display = 'flex'
        card_projetos2.style.display = 'none'
    }
}

//esse comando faz com que seja possivel mudar da 2° para a 1° aba dos projetos

function clickMenuVoltar2(){
    if(card_projetos2.style.display == 'flex'){
        card_projetos.style.display = 'flex'
        card_projetos2.style.display = 'none'
    }else{
        card_projetos.style.display = 'none'
    }
}


function clickMenuVoltar3(){
    if(card_projetos3.style.display == 'flex'){
        card_projetos2.style.display = 'flex'
        card_projetos3.style.display = 'none'
    }else{
        card_projetos2.style.display = 'none'
    }
}