const review = [
    {
        id: 1,
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        nome: 'Ana Carolina',
        job: 'Desenvolvedor Front-end',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sunt nemo blanditiis obcaecati! Cupiditate vel cumque ea quos dolore quae pariatur quaerat deleniti molestias omnis odio quis, non ratione similique!'
    },

    {
        id: 2,
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        nome: 'Cristina Silva',
        job: 'Advogada',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sunt nemo blanditiis obcaecati! Cupiditate vel cumque ea quos dolore quae pariatur quaerat deleniti molestias omnis odio quis, non ratione similique!'
    },

    {
        id: 3,
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        nome: 'Thiago Costa',
        job: 'Desenvolvedor de jogos',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sunt nemo blanditiis obcaecati! Cupiditate vel cumque ea quos dolore quae pariatur quaerat deleniti molestias omnis odio quis, non ratione similique!'
    },

    {
        id: 4,
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        nome: 'Igor Silva',
        job: 'Cantor',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sunt nemo blanditiis obcaecati! Cupiditate vel cumque ea quos dolore quae pariatur quaerat deleniti molestias omnis odio quis, non ratione similique!'
    }
]

const img = document.getElementById('pessoa-img');
const nome = document.getElementById('name');
const job = document.getElementById('job');
const info = document.getElementById('info');

const btnPrev = document.querySelector('.prev-btn');
const btnNext = document.querySelector('.next-btn');
const btnRandom = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    let item = review[currentItem];
    img.src = item.img;
    nome.textContent = item.nome;
    job.textContent = item.job;
    info.textContent = item.info;
})

function mostrarPessoas(pessoa) {
    let item = review[pessoa];
    img.src = item.img;
    nome.textContent = item.nome;
    job.textContent = item.job;
    info.textContent = item.info;
}

btnNext.addEventListener('click', function() {
    currentItem++;
    if(currentItem > review.length - 1) 
        {
            currentItem = 0;
        }
        mostrarPessoas(currentItem);
})

btnPrev.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = review.length - 1;
    }
    mostrarPessoas(currentItem);
})

btnRandom.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * review.length)

    mostrarPessoas(currentItem);
})