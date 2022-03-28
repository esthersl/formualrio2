const nombre = document. getElementById("myname");
const apellidos = document. getElementById("surname");
const correo = document. getElementById("email");
const celular = document. getElementById("mobile");
const contrasenia = document. getElementById("password");
const contrasenia2 = document. getElementById("repeatPassword");
const terminosYcondiciones = document. getElementById("termsAndConditions");
const form = document. getElementById("form");
const listInputs = document. querySelectorAll(".form-input");

form. addEventListener("submit", (e) => {
  and. preventDefault();
  let condition = validationForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form. lastElementChild. innerHTML = "";
  let condicion = true;
  listInputs. forEach((element) => {
    element. lastElementChild. innerHTML = "";
  });

  if (nombre. value. length < 1 || nombre. value. trim() == "") {
    showMessageError("myname", "Invalid Name*");
    condition = false;
  }
  if (apellidos. value. length < 1 || apellidos. value. trim() == "") {
    showMessageError("surname", "Invalid last name");
    condition = false;
  }
  if (correo. value. length < 1 || correo. value. trim() == "") {
    showMessageError("email", "Invalid mail*");
    condition = false;
  }
  if (
    celular. value. length != 9 ||
    celular. value. trim() == "" ||
    isNaN (cellular. value)
  ) {
    showMensajeError("mobile", "Mobile in valid*");
    condition = false;
  }
  if (contrasenia. value. length < 1 || contrasenia. value. trim() == "") {
    showMessageError("password","Invalid password*");
    condition = false;
  }
  if (contrasenia2. value != contrasenia. value) {
    showMessageError("repeatPassword", "Password error*");
    condition = false;
  }
  if (! terminosYcondiciones. checked) {
    showMessageError("termsAndConditions", "Accept*");
    condition = false;
  } else {
    mostrarMensajeError("termsAndConditions", "");
  }
  return condition;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector('.${claseInput}');
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form. reset();
  form. lastElementChild. innerHTML = "Listo !!";
}