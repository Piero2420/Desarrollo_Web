const icon = document.getElementById("icon");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main")

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
});

icon.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});



// Script About
document.addEventListener('DOMContentLoaded', () => {
    const typedText = document.querySelector('.typed-text');
    const textArray = ["Conoce un poco más de mí.", "Descubre mis proyectos.", "Explora mis habilidades."];
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, 1000);
        }
    }

    setTimeout(type, 1000);
});

// Script Tabla

function showTooltip(element, message) {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'block';
    tooltip.innerHTML = message;
    tooltip.style.top = element.getBoundingClientRect().top + window.scrollY + 20 + 'px';
    tooltip.style.left = element.getBoundingClientRect().left + window.scrollX + 'px';
}

function hideTooltip() {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
    tooltip.innerHTML = '';
}
