function sendEmail () {
  Email.send({
    SecureToken: "11f28dbe-2ea7-4ce9-8491-c861f17376cb",
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