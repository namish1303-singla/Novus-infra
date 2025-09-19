const scriptURL = 'https://script.google.com/macros/s/AKfycbwyGBlKzkRExboa43adGBZwP6fghZvHRsMsP_XRmALxhyVRVnBaM-qCWBq9PWygxoW6/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => .error('Error!', error.message))
})