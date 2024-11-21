const popup = document.getElementById('popup');
const openButtons = document.querySelectorAll('.open-popup');
const closeButton = document.getElementById('close-popup');

if (openButtons.length > 0 && popup) {
  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      popup.classList.add('popup--open');
    });
  });
}

function closePopup() {
  popup.classList.remove('popup--open');
}

if (closeButton) {
  closeButton.addEventListener('click', closePopup);
} else {
  console.warn('Botão de fechar não encontrado!');
}
