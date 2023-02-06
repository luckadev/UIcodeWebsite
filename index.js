const btnMobile = document.getElementById("btnMobile");

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Animation with JS - observe the elements that are hidden and take them
const observer = new IntersectionObserver( entries => {

    Array.from(entries).forEach( entry => {
        if (entry.intersectionRatio >= 1){
            entry.target.classList.add('init-hidden-off')
        }
    })
}, {
    threshold: [0, .5, 1]
}) 

Array.from(document.querySelectorAll('.init-hidden')).forEach( element => {
    observer.observe(element)
})
