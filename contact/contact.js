function sendEmail () {
  Email.send({
    SecureToken: "14091525-f50f-483c-b496-9b849f19b8e1",
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