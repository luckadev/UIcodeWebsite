const img = document.getElementById('img-ig');
img.addEventListener('click', () => {
    window.location.href = 'https://instagram.com/devcodepro'
});

// menu
let menu = document.getElementById("menu")
menu.addEventListener('click', openMenu);
menu.addEventListener('touchstart', openMenu);

function openMenu(e) {
    if(e.type == 'touchstart') e.preventDefault();
    let list = document.getElementById('list');
    list.classList.toggle('menu-active');

    if(list.classList.contains('menu-active')) {
        menu.innerHTML = `<i class="fa-solid fa-xmark fa-2x"></i>`
    } else {
        menu.innerHTML = `<i class="fa-solid fa-bars fa-2x"></i>`
    }
}