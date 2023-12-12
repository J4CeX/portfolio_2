const submit = document.querySelector('.form-contact');
const eMail = document.getElementById('e-mail');
const message = document.getElementById('message');
const fullName = document.getElementById('full-name');

submit.addEventListener('submit', (e) => {
  e.preventDefault();

  let ebody = `
    Imie i nazwisko:
    <br> 
    ${fullName.value}
    <br>
    Wiadomosc:
    <br>
    ${message.value}
  `;

  Email.send({
    SecureToken: '843bacad-e91c-4d6f-b3e9-13e5ba69ce60',
    To : 'jacek.kozakowski.dev@gmail.com',
    From : 'jacek.kozakowski.dev@gmail.com',
    Subject : "Portfolio: " + eMail.value,
    Body : ebody
  }).then(
    message => alert("Wiadomość została wysłana!")
  );
})