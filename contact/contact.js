function sendEmail () {
  Email.send({
    SecureToken: "a500802f-b71c-49b8-93ba-3be360209614",
    To : 'jacek_kozakowski_dev@wp.pl',
    From : document.getElementById('e-mail').value,
    Subject : "Nowa wiadomosc",
    Body : "Imie i nazwisko: " + document.getElementById('full-name').value 
    + "\nE-mail: " + document.getElementById('e-mail').value 
    + "\nWiadomosc: " + document.getElementById('message').value
  }).then(
    message => alert("Wiadomość została poprawnie wysłana")
  );
}