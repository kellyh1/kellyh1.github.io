$(document).ready(function() {
  $('[data-toggle]').click(function() {
    const target = $(this).data('toggle');
    $('#' + target).toggle();
  });
});

function toggleVisibility(id) {
  const element = document.getElementById(id);
  const elements = document.getElementsByClassName(element.className);
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] !== element) {
      elements[i].style.display = "none";
    }
  }
  if (element.style.display === "none") {
    element.style.display = "block";
  }
}


document.querySelector('[data-toggle]').addEventListener('click', function() {
  toggleVisibility(this.dataset.toggle);
});
