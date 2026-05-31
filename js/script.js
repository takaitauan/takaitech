// Aguarda o carregamento total do documento HTML antes de executar os scripts
document.addEventListener('DOMContentLoaded', () => {
  
  // ── CONTROLE DO EFEITO DA NAVBAR COMPACTA AO ROLAR O MOUSE ───────
  const nav = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    // Se o usuário descer mais de 50 pixels da tela, adiciona a classe .scrolled
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      // Caso retorne ao topo absoluto da página, remove a classe
      nav.classList.remove('scrolled');
    }
  });

  // ── GERENCIADOR DO MENU RESPONSIVO MOBILE (HAMBURGUER) ───────────
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');

  // Adiciona evento de clique para abrir e fechar o menu no celular
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');  // Transforma o ícone de três traços em "X"
    links.classList.toggle('open'); // Exibe os links de navegação escondidos
  });

  // Fecha o menu de celular de forma automática quando o usuário escolhe uma seção
  links.querySelectorAll('a').forEach(linkA => {
    linkA.addEventListener('click', () => {
      links.classList.remove('open');
      ham.classList.remove('open');
    });
  });

  // ── ANIMAÇÃO INTERACTIVE SCROLL REVEAL (Efeito de surgimento ao rolar) ──
  const revealConfig = {
    threshold: 0.15,               // O elemento precisa estar 15% visível para surgir
    rootMargin: "0px 0px -40px 0px" // Dispara um pouco antes de alcançar o limite inferior da viewport
  };

  // Cria o Observador de Intersecção nativo do navegador
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Quando o card ou título entra na área visível da janela do usuário
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Aplica a classe que dispara a animação CSS
        scrollObserver.unobserve(entry.target); // Para de observar o elemento por questões de performance
      }
    });
  }, revealConfig);

  // Seleciona todos os elementos marcados para animação e os adiciona ao observador
  document.querySelectorAll('.reveal').forEach(element => scrollObserver.observe(element));
});