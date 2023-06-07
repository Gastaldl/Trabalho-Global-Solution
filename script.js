alert('Seja bem-vindo')


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    });
  } else {
    alert("Geolocalização não é suportada por este navegador.");
  }
}

window.onload = getLocation;

// Mudar a cor de fundo
var corOriginal = true;
var corCinza = "gray";

function mudarCorFundo() {
  if (corOriginal) {
    document.body.style.backgroundColor = corCinza;
  } else {
    document.body.style.backgroundColor = "white";
  }
  corOriginal = !corOriginal;
}


//Carrossel de Imagens
var slides = document.querySelectorAll('.container-sec5-img .children-sec5-img');
var currentSlide = 0;

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

setInterval(nextSlide, 3000);

showSlide();

alert('Seja bem-vindo')

// JavaScript para filtrar os produtos com base nos seletores

var marketFilter = document.getElementById('market-filter');
var foodTypeFilter = document.getElementById('food-type-filter');

var productCards = document.getElementsByClassName('product-card');

marketFilter.addEventListener('change', filterProducts);
foodTypeFilter.addEventListener('change', filterProducts);

function filterProducts() {
  var selectedMarket = marketFilter.value;
  var selectedFoodType = foodTypeFilter.value;

  for (var i = 0; i < productCards.length; i++) {
    var card = productCards[i];
    var market = card.getAttribute('data-market');
    var foodType = card.getAttribute('data-food-type');

    if (
      (selectedMarket === 'todos' || market === selectedMarket) &&
      (selectedFoodType === 'todos' || foodType === selectedFoodType)
    ) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
}

function validarFormulario() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var formularioValido = true;

  if (nome === "") {
    formularioValido = false;
    document.getElementById("nome").classList.add("error");
  } else {
    document.getElementById("nome").classList.remove("error");
  }

  if (email === "") {
    formularioValido = false;
    document.getElementById("email").classList.add("error");
  } else {
    document.getElementById("email").classList.remove("error");
  }

  if (!formularioValido) {
    alert("Por favor, preencha todos os campos corretamente.");
  }

  return formularioValido;
}

// Java para adicionar data e hora do navegador

var yearElement = document.getElementById("year");

// Obtém a data e hora atual
var date = new Date();


// Obtém o ano, mês, dia e hora atual
var year = date.getFullYear();
var month = date.getMonth() + 1; // Os meses são indexados a partir de 0
var day = date.getDate();
var hours = date.getHours();

// Atualiza o conteúdo do elemento <span> com os valores obtidos
yearElement.textContent = year + " ano - " + month + " mês - " + day + " dia - " + hours + ":00 horas -";