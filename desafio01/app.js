const colors = ["#8C1F28", "#591C21", "#044040", "#D92525", "#F2F2F2"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function() 
{
    const RandomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[RandomNumber];
    color.textContent = colors[RandomNumber];
})

function getRandomNumber() 
{
    return Math.floor(Math.random() * colors.length);
}