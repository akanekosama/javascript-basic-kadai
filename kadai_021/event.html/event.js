const button = document.getElementById('btn');

const h2 = document.getElementById('text');

setTimeout(() => {
  btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
  });
}, 2000);

