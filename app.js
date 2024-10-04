document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nombre = document.getElementsByName('nombre')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var asunto = document.getElementsByName('asunto')[0].value;
    var mensaje = document.getElementsByName('mensaje')[0].value;

    // Validación básica
    if (nombre === '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }

    if (email === '') {
        alert('Por favor, ingresa tu email.');
        return false;
    }

    if (asunto === '') {
        alert('Por favor, ingresa el asunto.');
        return false;
    }

    if (mensaje === '') {
        alert('Por favor, ingresa tu mensaje.');
        return false;
    }

    // Si todo está correcto
    alert('Formulario enviado exitosamente.');
    this.submit(); 
});
