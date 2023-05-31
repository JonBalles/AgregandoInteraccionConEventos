window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let input = document.getElementById("titulo")
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener("mouseenter", ()=> {
        titulo.style.color = "red"
    })
    titulo.addEventListener("mouseleave", ()=> {
        titulo.style.color = "black"
    })


    let estadoSecreto = 0;
    input.addEventListener("keypress", (e) => {
        let key = e.key.toLowerCase();
        if (estadoSecreto == 0 && key == "s") return estadoSecreto = 1;
        if (estadoSecreto == 1 && key == "e") return estadoSecreto = 2;
        if (estadoSecreto == 2 && key == "c") return estadoSecreto = 3;
        if (estadoSecreto == 3 && key == "r") return estadoSecreto = 4;
        if (estadoSecreto == 4 && key == "e") return estadoSecreto = 5;
        if (estadoSecreto == 5 && key == "t") return estadoSecreto = 6;
        if (estadoSecreto == 6 && key == "o") {
            alert("SECRETO MAGICO")
           
        }
        return estadoSecreto = 0;
    })
    
}