const review = [
    {
        id: 1,
        img: "https://www.course-api.com/images/people/person-1.jpeg",
        nome: "Cristina Silva",
        job: "Médica",
        info: "Realizar consultas e atendimentos médicos; tratar pacientes; implementar ações para promoção da saúde; coordenar programas e serviços em saúde, efetuar perícias, auditorias e sindicâncias médicas; elaborar documentos e difundir conhecimentos da área médica"
    },

    {
        id: 2,
        img: "https://www.course-api.com/images/people/person-2.jpeg",
        nome: "Elaine Costa",
        job: "Desenvolvedora Back-end",
        info: "Ela tem a responsabilidade de planejar, programar, testar e manter a estrutura de códigos que faz a interface entre um site, o servidor e o banco de dados. Sua atuação é fundamental para garantir a eficiência e a segurança do sistema."
    },

    {
        id: 3,
        img: "https://www.course-api.com/images/people/person-3.jpeg",
        nome: "Thiago Gomes",
        job: "Desenvolvedor de jogos",
        info: "Ele responsáveis por criar e programar os elementos que compõem um jogo, como personagens, ambientes, mecânicas de jogo e interfaces interativas. Eles trabalham em equipes multidisciplinares, colaborando com artistas, designers, músicos e outros profissionais para dar vida aos jogos."
    },

    {
        id: 4,
        img: "https://www.course-api.com/images/people/person-4.jpeg",
        nome: "André Silva",
        job: "Desenvolvedor Front-end",
        info: "Ele é o responsável por colocar em prática, através de códigos, o design de um site ou interface. Enquanto o web design projeta o visual de um site, o desenvolvimento front-end implementa esse design através de códigos, como HTML, CSS e JavaScript."
    },
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
    nome.textContent = item.nome
    job.textContent = item.job
    info.textContent = item.info;
})

function mostrarPessoa(pessoa) {
    let item = review[pessoa];
    img.src = item.img;
    nome.textContent = item.nome;
    job.textContent = item.job;
    info.textContent = item.info;
}

btnNext.addEventListener('click', function(){
    currentItem++;
    if(currentItem > review.length - 1) 
        {
            currentItem = 0
        }
        mostrarPessoa(currentItem);
})

btnPrev.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0) 
        {
            currentItem = review.length - 1;
        }
        mostrarPessoa(currentItem);
})

btnRandom.addEventListener('click', function(){

    currentItem = Math.floor(Math.random() * review.length);
    mostrarPessoa(currentItem);
})