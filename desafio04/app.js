const nav = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

nav.addEventListener('click', function() {
    links.classList.toggle("show-links");
})