const btnModal = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const btnClose = document.querySelector('.close-btn');

btnModal.addEventListener('click', function() {
    modal.classList.add('open-modal');
})

btnClose.addEventListener('click', function() {
    modal.classList.remove('open-modal');
})