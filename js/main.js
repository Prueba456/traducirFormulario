var title = document.getElementById("form-signin-heading");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var remember = document.getElementsByTagName("span")[0];
var button = document.getElementsByClassName("btn")[0];
function traslate(){
  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesión";
}
var areaImprimir = document.getElementById("area");
button.addEventListener('click', function datos(event){
  event.preventDefault();
var respuesta =  "El correo electronico ingresado es: "+ "<br>"+ email.value + "<br>" +
                         "La clave ingresada es: "+ "<br>"+ password.value + "<br>";
areaImprimir.innerHTML = respuesta;
});
traslate();
