const perguntas = document.querySelectorAll('.perguntas');

perguntas.forEach(function(pergunta) {
    const btnResposta = pergunta.querySelector('.btn-resposta');
    const resposta = pergunta.querySelector('.resposta');

    btnResposta.addEventListener('click', function() {
        // Fecha todas as outras respostas antes de abrir a clicada
        perguntas.forEach(function(item) {
            if (item !== pergunta) {
                item.querySelector('.resposta').classList.remove('mostrar-resposta');
            }
        });

        // Alterna a exibição da resposta associada ao botão clicado
        resposta.classList.toggle('mostrar-resposta');
    });
});
