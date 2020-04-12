const menuToggler = document.querySelector('.menu--toggler');
const aside = document.querySelector('.aside');
const modal = document.getElementById('formModal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementById('closeBtn');

// Toggle navigation for responsive view
menuToggler.addEventListener('click', event => {
  if (aside.classList.contains('show--sm')) {
    aside.classList.remove('show--sm');
  } else {
    aside.classList.add('show--sm');
  }
});

// Open Form Modal
modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close Form Modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close Modal if out side is click
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Custom input button
document.querySelectorAll('.file-upload__btn').forEach(button => {
  const hiddenInput = button.parentElement.querySelector('.file-upload__input');
  const label = button.parentElement.querySelector('.file-upload__label');
  const defaultLabelText = 'No file selected';

  // Set default text for label
  label.textContent = defaultLabelText;

  button.addEventListener('click', () => {
    hiddenInput.click();
  });

  hiddenInput.addEventListener('change', () => {
    const filenameList = Array.from(hiddenInput.files).map(file => file.name);
    label.textContent = filenameList.join(', ') || defaultLabelText;
  });
});

document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('click', event => {
    console.log(dropdown.nextElementSibling);
    // console.log(jsDropdown);
  });
});
