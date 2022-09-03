let btnEncriptar = document.getElementById('btnEncriptar');
let btnDesencriptar = document.getElementById('btnDesencriptar');
document.getElementById("btnCopiar").addEventListener("click", copy);

btnEncriptar.addEventListener("click", function(event) {
    event.preventDefault();
    let areaMensaje = document.querySelector('.AreaMensaje');
    let identificador = 'Encriptar'
    modificarAlerta(areaMensaje, identificador);
});

btnDesencriptar.addEventListener("click", function(event) {
    event.preventDefault();
    let areaMensaje = document.querySelector('.AreaMensaje');
    let identificador = 'Desencriptar'
    modificarAlerta(areaMensaje, identificador);
});

function modificarAlerta(areaMensaje, identificador) {
    let banderaMensaje;
    let divContenido = document.querySelector('.divGifTexto');
    let divMensajeContenido = document.querySelector('.divMensajeContenido');
    let divTextoEncriptadoDesencriptado = document.querySelector('.divTextoEncriptadoDesencriptado');
    let areaEncriptado = document.querySelector('.AreaEncriptado');
    let mensaje;

    if (areaMensaje.value.length > 0) {
        banderaMensaje = validarAcentoMayuscula(areaMensaje);
    } else {
        document.getElementById("labelAcentos").textContent = "Ingresar alguna frase a Encriptar o Desincriptar";
        if (document.getElementById("labelAcentos").classList.contains('labelMayAcentos')) {
            document.getElementById("labelAcentos").classList.remove('labelMayAcentos');
            document.getElementById("labelAcentos").classList.add("labelMayAcentosRojos");
            if (areaEncriptado.value != '') {
                areaEncriptado.value = '';
            }
        }
    }

    if (banderaMensaje) {
        document.getElementById("labelAcentos").textContent = "No ingresar mayusculas o acentos";
        if (document.getElementById("labelAcentos").classList.contains('labelMayAcentos')) {
            document.getElementById("labelAcentos").classList.remove('labelMayAcentos');
            document.getElementById("labelAcentos").classList.add("labelMayAcentosRojos");
            if (areaEncriptado.value != '') {
                areaEncriptado.value = '';
            }
        }
    }
    if (banderaMensaje === false) {
        document.getElementById("labelAcentos").textContent = "Solo letras minúsculas y sin acentos";
        document.getElementById("labelAcentos").classList.remove('labelMayAcentosRojos');
        document.getElementById("labelAcentos").classList.add("labelMayAcentos");
        divContenido.style.display = 'none';
        divTextoEncriptadoDesencriptado.style.display = 'flex';
        divMensajeContenido.style.display = 'flex';
        console.log(divMensajeContenido.style.display);

        mensaje = areaMensaje.value;
        if (identificador == "Encriptar") {
            mensaje = encriptarMensaje(mensaje);
            areaEncriptado.value = mensaje;
        }
        if (identificador == "Desencriptar") {
            mensaje = desencriptarMensaje(mensaje);
            areaEncriptado.value = mensaje;
        }
    }
}

function validarAcentoMayuscula(areaMensaje) {
    for (var i = 0; i < areaMensaje.value.length; i++) {
        if (areaMensaje.value.charAt(i) == "á" || areaMensaje.value.charAt(i) == "é" || areaMensaje.value.charAt(i) == "í" || areaMensaje.value.charAt(i) == "ó" || areaMensaje.value.charAt(i) == "ú" || /[A-Z]/.test(areaMensaje.value.charAt(i))) {
            banderaMensaje = true;
            break;
        } else {
            banderaMensaje = false;
        }
    }
    return banderaMensaje;
}

function encriptarMensaje(mensaje) {
    mensaje = mensaje.replace(new RegExp("e", "g"), "enter");
    mensaje = mensaje.replace(new RegExp("i", "g"), "imes");
    mensaje = mensaje.replace(new RegExp("a", "g"), "ai");
    mensaje = mensaje.replace(new RegExp("o", "g"), "ober");
    mensaje = mensaje.replace(new RegExp("u", "g"), "ufat");
    return mensaje;
}

function desencriptarMensaje(mensaje) {
    mensaje = mensaje.replace(new RegExp("enter", "g"), "e");
    mensaje = mensaje.replace(new RegExp("imes", "g"), "i");
    mensaje = mensaje.replace(new RegExp("ai", "g"), "a");
    mensaje = mensaje.replace(new RegExp("ober", "g"), "o");
    mensaje = mensaje.replace(new RegExp("ufat", "g"), "u");
    return mensaje;
}

function copy() {
    let copyText = document.querySelector(".AreaEncriptado");
    copyText.select();
    document.execCommand("copy");
}