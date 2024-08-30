const review = [
    {
        id: 1,
        nome: "Ana Ribeiro",
        trabalho: "Moda",
        img: "https://www.course-api.com/images/people/person-1.jpeg",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sunt nemo blanditiis obcaecati! Cupiditate vel cumque ea quos dolore quae pariatur quaerat deleniti molestias omnis odio quis, non ratione similique!",
    },

    {
        id: 2,
        nome: "Claudia Moras",
        trabalho: "Investimentos",
        img: "https://www.course-api.com/images/people/person-2.jpeg",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sunt nemo blanditiis obcaecati! Cupiditate vel cumque ea quos dolore quae pariatur quaerat deleniti molestias omnis odio quis, non ratione similique!"
    },

    {
        id: 3,
        nome: "Thiago Gomes",
        trabalho: "TI",
        img: "https://www.course-api.com/images/people/person-3.jpeg",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sunt nemo blanditiis obcaecati! Cupiditate vel cumque ea quos dolore quae pariatur quaerat deleniti molestias omnis odio quis, non ratione similique!"
    },

    {
        id: 4,
        nome: "André Silva",
        trabalho: "Desenvolvedor de jogos",
        img: "https://www.course-api.com/images/people/person-4.jpeg",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sunt nemo blanditiis obcaecati! Cupiditate vel cumque ea quos dolore quae pariatur quaerat deleniti molestias omnis odio quis, non ratione similique!"
    }
]

const img = document.querySelector("#pessoa-img");
const nome = document.getElementById("nome");
const trabalho = document.getElementById("trabalho");
const info = document.getElementById("info");

const btnAnterior = document.querySelector(".anterior-btn");
const btnProximo = document.querySelector(".proximo-btn");
const btnAleatorio = document.querySelector(".aleatorio-btn");

let antigoItem = 0;

window.addEventListener('DOMContentLoaded', function() 
{
    const item = review[antigoItem];
    img.src = item.img;
    nome.textContent = item.nome;
    trabalho.textContent = item.trabalho;
    info.textContent = item.info;
})

function mostrarPessoa(pessoa) 
{
    const item = review[pessoa];
    img.src = item.img;
    nome.textContent = item.nome;
    trabalho.textContent = item.trabalho;
    info.textContent = item.info;
}

btnProximo.addEventListener('click', function() 
{
    antigoItem++;
    if(antigoItem > review.length - 1) 
        {
            antigoItem = 0;
        }
        mostrarPessoa(antigoItem)
})

btnAnterior.addEventListener('click', function() 
{
    antigoItem--;
    if(antigoItem< 0) 
        {
            antigoItem = review.length - 1;
        }
        mostrarPessoa(antigoItem);
})

btnAleatorio.addEventListener('click', function() 
{
    console.log('ola')

    antigoItem = Math.floor(Math.random() * review.length);
    mostrarPessoa(antigoItem);
})