const message = document.querySelector('.message');

document.querySelector('button').addEventListener('click', () => {
  message.classList.remove('hidden');
  message.classList.add('popup-message');
});

message.addEventListener('animationend', () => {
  message.classList.remove('popup-message');
  message.classList.add('hidden');
});