document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;

    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});



