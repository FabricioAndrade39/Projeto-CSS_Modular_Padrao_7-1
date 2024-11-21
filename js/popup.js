const popup = document.getElementById('popup');
const openButtons = document.querySelectorAll('.open-popup');
const closeButton = document.getElementById('close-popup');
console.log(openButtons);

openButtons[0].addEventListener('click', function () {
  popup.classList.add('popup--open');
});

openButtons[1].addEventListener('click', function () {
  popup.classList.add('popup--open');
});

function closePopup() {
  popup.classList.remove('popup--open');
}

closeButton.addEventListener('click', closePopup);
