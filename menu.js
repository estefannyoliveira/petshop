const btnMobile = document.getElementById("btn-mobile");

function alternarMenu(){
    const nav = document.getElementById("nav");
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', alternarMenu)