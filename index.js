const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const mail = document.getElementById("mail").value;
  const contrasena = document.getElementById("contrasena").value;
  const edad = document.getElementById("edad").value;

  const data = {
    nombre: nombre,
    apellido: apellido,
    mail: mail,
    contrasena: contrasena,
    edad: edad,
  };

  fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
