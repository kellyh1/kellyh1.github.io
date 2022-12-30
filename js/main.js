$(document).ready(function() {
  $('[data-toggle]').click(function() {
    const target = $(this).data('toggle');
    $('#' + target).toggle();
  });
});

function toggleVisibility(id) {
  const element = document.getElementById(id);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

document.querySelector('[data-toggle]').addEventListener('click', function() {
  toggleVisibility(this.dataset.toggle);
});
