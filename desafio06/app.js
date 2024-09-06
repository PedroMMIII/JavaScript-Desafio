const perguntas = document.querySelectorAll('.perguntas');

perguntas.forEach(function(pergunta) {
    const btnResposta = pergunta.querySelector('.btn-resposta');
    const resposta = pergunta.querySelector('.resposta');

    btnResposta.addEventListener('click', function() {

        perguntas.forEach(function(item) {
            if(item !== pergunta) {
                item.querySelector('.resposta').classList.remove('mostrar-resposta')
            }
        });
        resposta.classList.toggle('mostrar-resposta');
    });
});