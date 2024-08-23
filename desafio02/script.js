let res = document.getElementById('res');
let contador = 0;

function btnAdicionar()
{
    contador++;
    res.textContent = `${contador}`;
    atualizarCor();
}

function btnLimpar()
{
    contador = 0;
    res.textContent = `${contador}`;
    atualizarCor();
}

function btnDecremento() 
{
    contador--;
    res.textContent = `${contador}`;
    atualizarCor();
}

function atualizarCor() 
{
    if(contador < 0) 
        {
            res.style.color = "red";
        }
    else if(contador > 0)
    {
        res.style.color = "green";
    }
    else 
    {
        res.style.color = "black";
    }
}