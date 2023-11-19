function sendEmail () {
  Email.send({
    SecureToken: "b5b402b1-166b-4d15-b1de-42b4b0a4684a",
    To : 'jacek_kozakowski_dev@wp.pl',
    From : document.getElementById('e-mail').value,
    Subject : "Nowa wiadomosc",
    Body : "Imie i nazwisko: " + document.getElementById('full-name').value 
    + "<br>E-mail: " + document.getElementById('e-mail').value 
    + "<br>Wiadomosc: " + document.getElementById('message').value
  }).then(
    message => alert("Wiadomość została poprawnie wysłana")
  );
}