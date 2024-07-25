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

// Dark Mode
palanca.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
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

// Script active menu
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navegacion a[href^="#"]');
    const sections = Array.from(links).map(link => {
        const href = link.getAttribute('href');
        return document.querySelector(href);
    });

    function setActiveLink() {
        const viewportHeight = window.innerHeight;
        let activeIndex = -1;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionBottom = rect.top + rect.height;
            
            // Check if the section is in the viewport (75% visible)
            if (sectionTop <= viewportHeight * 0.75 && sectionBottom >= 0) {
                activeIndex = index;
            }
        });

        links.forEach(link => link.classList.remove('active'));
        if (activeIndex !== -1) {
            links[activeIndex].classList.add('active');
        }
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);

    // Active link based on initial hash in the URL
    const currentHash = window.location.hash;
    if (currentHash) {
        const activeLink = document.querySelector(`.navegacion a[href="${currentHash}"]`);
        if (activeLink) {
            links.forEach(link => link.classList.remove('active'));
            activeLink.classList.add('active');
        }
    }
});
