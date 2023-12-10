// Menu

// Slide
let currentSlide = 0;
const slides = document.querySelectorAll(".boxInfo");
let itemsToShow = 4;

function showSlide() {
  slides.forEach((slide, i) => {
    const isInRange = i >= currentSlide && i < currentSlide + itemsToShow;
    slide.style.display = isInRange ? "flex" : "none";
  });
}

function prevSlide() {
  currentSlide = Math.max(currentSlide - itemsToShow, 0);
  showSlide();
}

function nextSlide() {
  currentSlide = Math.min(
    currentSlide + itemsToShow,
    slides.length - itemsToShow
  );
  showSlide();
}
showSlide();

// Função para verificar o tamanho da tela e trocar os ícones
function verificarTamanhoTela() {
  // Verifica se a largura da tela é menor que 600 pixels
  if (window.innerWidth < 768) {
    // Troca o ícone do botão de slide para cima
    document.getElementById("btnSlideInfoInicio").innerHTML =
      '<i class="fa-solid fa-arrow-up"></i>';

    // Troca o ícone do botão de slide para baixo
    document.getElementById("btnSlideInfoFinal").innerHTML =
      '<i class="fa-solid fa-arrow-down"></i>';
  } else {
    // Se a largura da tela for maior ou igual a 600 pixels, restaura os ícones originais
    document.getElementById("btnSlideInfoInicio").innerHTML =
      '<i class="fa-solid fa-arrow-left"></i>';
    document.getElementById("btnSlideInfoFinal").innerHTML =
      '<i class="fa-solid fa-arrow-right"></i>';
  }
}

// Chama a função quando a página carrega
verificarTamanhoTela();

// Adiciona um ouvinte de evento de redimensionamento da janela para verificar e trocar os ícones
window.addEventListener("resize", verificarTamanhoTela);

// Slide do Spoiler

let currentSlideSpoiler = 0;
const slidesSpoiler = document.querySelectorAll(".boxImgSpoiler");
const itemsToShowSpoiler = 4;
let intervalId;

function showSlideSpoiler() {
  slidesSpoiler.forEach((slide, i) => {
    const isVisible =
      i >= currentSlideSpoiler && i < currentSlideSpoiler + itemsToShowSpoiler;
    slide.style.display = isVisible ? "flex" : "none";
  });
}

function nextSlideSpoiler() {
  currentSlideSpoiler =
    (currentSlideSpoiler + 1) % (slidesSpoiler.length - itemsToShowSpoiler + 1);
  showSlideSpoiler();
}

function prevSlideSpoiler() {
  currentSlideSpoiler =
    (currentSlideSpoiler -
      1 +
      (slidesSpoiler.length - itemsToShowSpoiler + 1)) %
    (slidesSpoiler.length - itemsToShowSpoiler + 1);
  showSlideSpoiler();
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    nextSlideSpoiler();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

showSlideSpoiler();
startAutoSlide();

// Depoimentos
let depoimentosAtuais = 0;
const depoimentosSlide = document.querySelectorAll(".boxDepoimentos");
let depoimentosShow = 3;

function mostrarDepoimentos() {
  depoimentosSlide.forEach((depoimento, i) => {
    const mostrar =
      i >= depoimentosAtuais && i < depoimentosAtuais + depoimentosShow;
    depoimento.style.display = mostrar ? "flex" : "none";
  });
}

function prevDepoimento() {
  depoimentosAtuais = Math.max(depoimentosAtuais - depoimentosShow, 0);
  mostrarDepoimentos();
}

function nextDepoimento() {
  depoimentosAtuais = Math.min(
    depoimentosAtuais + depoimentosShow,
    depoimentosSlide.length - depoimentosShow
  );
  mostrarDepoimentos();
}

mostrarDepoimentos();


//

// Menu
document
  .getElementById("btnMobile")
  .addEventListener("click", toggleMobileMenu);

// Função para alternar a visibilidade do menu mobile
function toggleMobileMenu() {
  const mobileNav = document.querySelector(".navigation.mobile");
  mobileNav.style.display =
    mobileNav.style.display === "flex" ? "none" : "flex";
}

// Fecha o menu mobile quando um item é clicado
const mobileLinks = document.querySelectorAll(".navigation.mobile a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".navigation.mobile").style.display = "none";
  });
});
