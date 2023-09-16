const frmContacto = document.getElementById("contacto");

frmContacto.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById("mail").value;

    alert(email);
});