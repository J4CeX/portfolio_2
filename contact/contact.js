function sendEmail () {
  Email.send({
    SecureToken: "ffc53151-b8ba-435d-9890-ab362dfb725e",
    To : 'jacek.kozakowski.dev@gmail.com',
    From : document.getElementById('e-mail').value,
    Subject : "Nowa wiadomosc",
    Body : "Imie i nazwisko: " + document.getElementById('full-name').value 
    + "<br>E-mail: " + document.getElementById('e-mail').value 
    + "<br>Wiadomosc: " + document.getElementById('message').value
  }).then(
    message => alert("Wiadomość została wysłana poprawnie")
  );
}