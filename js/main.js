function showWord(word) {
  document.getElementById('word-' + word).style.display = 'block';
}

function hideWord(word) {
  document.getElementById('word-' + word).style.display = 'none';
}

document.querySelectorAll('[data-word]').forEach(function(button) {
  button.addEventListener('click', function() {
    const word = this.dataset.word;
    for (let i = 1; i <= 3; i++) {
      if (i === word) {
        showWord(i);
      } else {
        hideWord(i);
      }
    }
  });
});
