// Seleciona todos os elementos que terão animação
const elementos = document.querySelectorAll('.reveal');

// Função responsável por ativar a animação
function animarScroll() {

  // Percorre todos os elementos
  elementos.forEach(elemento => {

    // Distância do elemento até o topo da tela
    const distanciaTopo = elemento.getBoundingClientRect().top;

    // Se o elemento estiver visível na tela
    if (distanciaTopo < window.innerHeight - 100) {
      // Adiciona a classe que ativa a animação
      elemento.classList.add('active');
    }
  });
}

// Executa a função sempre que o usuário rolar a página
window.addEventListener('scroll', animarScroll);

// Executa a função quando a página carrega
animarScroll();
