const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
populateData();

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

   if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  };
  
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  dataForm = {};
}

function onTextareaInput() {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function populateData() {
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
      }
}
