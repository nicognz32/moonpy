/*para que llegue manensaje por correo ----[INICIO]*/
const btn = document.getElementById('button');
 
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
    btn.value = 'Enviado...';
    document.getElementById("button").disabled = true;
   const serviceID = 'default_service';
   const templateID = 'template_6epdh8d';
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
   
      mostrarModal();
      document.getElementById("button").disabled = false;
    }, (err) => {
       btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

/*MODAL CONTACTOS----[INICIO]*/
function mostrarModal(){
let modal = document.getElementById("miModal");
modal.style.display = "block";
setTimeout(function () {
modal.querySelector(".modal-contenido").classList.add("mostrar");
});
//document.getElementById("miModal").style.display = "block";

let nombre = document.getElementById("from_name").value;
let email = document.getElementById("email_id").value;
let mensaje = document.getElementById("message").value;
let gracias = document.getElementById("gracias").value;

gracias = "¡Gracias por comunicarte con nosotros, "+nombre+"!";
document.getElementById('gracias').innerHTML = gracias;

nombre = "";
email = "";
mensaje = "";

document.getElementById('from_name').value = nombre;
document.getElementById('email_id').value = email;
document.getElementById('message').value = mensaje;

}

function cerrarModal(){
let modal = document.getElementById("miModal");
modal.style.display = "none";

modal.querySelector(".modal-contenido").classList.remove("mostrar");
document.getElementById("button").disabled = false;

}
/*MODAL CONTACTOS---[FIN]*/
/*para que llegue mensaje  por correo ----[FIN]*/
