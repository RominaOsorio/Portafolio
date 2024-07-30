// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

const mostrarMensaje = () => {
  const titulo = document.getElementById('titulo-header').innerHTML = 'Soy Romina Osorio'
  const subTitulo1 = document.getElementById('subtitulo1-header').innerHTML = 'Ingeniera Comercial'
  const subTitulo2 = document.getElementById('subtitulo2-header').innerHTML = 'Desarrolladora Frontend trainee'
}
