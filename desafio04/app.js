const nav = document.querySelector('.nav-toggle');
const link = document.querySelector('.links');

nav.addEventListener('click', function() {
    link.classList.toggle('show-links');   
})