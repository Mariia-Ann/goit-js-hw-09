const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
populateData();


function onFormInput() {
    dataForm = { email: email.value.trim(), message: message.value.trim() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(dataForm);
  
     if (email.value === '' || message.value === '') {
      return alert('Please fill in all the fields!');
    };
    
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
    dataForm = {};
  }

function populateData() {
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
      }
}
