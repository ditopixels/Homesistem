const d = document,
    c = 'Chatra',
    w = window

d.addEventListener('DOMContentLoaded', () => {
    const $inputs = d.querySelectorAll('[inputAnimated] input,[inputAnimated] textarea');
    console.log($inputs)
    $inputs.forEach(
        input => {
            const inputParent = input.parentElement
            if (!input.value.trim() == 0) inputParent.classList.add('focus')
            input.addEventListener('focus', () => {
                inputParent.classList.add('focus')
            })
            input.addEventListener('blur', () => {
                input.value = input.value.trim();
                if (input.value.trim() == 0) inputParent.classList.remove('focus')
            })
            input.addEventListener('change', () => {
                input.value = input.value.trim();
                if (input.value == 0) inputParent.classList.remove('focus')
                else inputParent.classList.add('focus')
            })
        }
    )
    emailjs.init("user_uZNn3rv7efKouydx8XRha")
    const $form = d.getElementById('contactForm')
    const $send = d.getElementById('send')
    $send.addEventListener('click', e => {
        e.preventDefault()
        sendMail()
    })


    w.ChatraID = 'CycYj6ZJwXj2zdsud';
    var s = d.createElement('script');
    w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
    };
    s.async = true;
    s.src = 'https://call.chatra.io/chatra.js';
    if (d.head) d.head.appendChild(s);


    window.ChatraSetup = {
        colors: {
            buttonText: '#f0f0f0',
            /* chat button text color */
            buttonBg: '#19AFFE' /* chat button background color */
        }
    }
    const $menu = d.getElementById('menu-button')
    const $nav = d.getElementById('nav-ul')
    const $header = d.querySelector('header')
    $menu.addEventListener('click', () => {
        $nav.classList.toggle('active')
        $header.classList.toggle('active')
    })

    const $service2 = d.getElementById('btn-cables'),
        $service3 = d.getElementById('sellCp'),
        $service1 = d.getElementById('btn-sellCp')

    $service1.addEventListener('click', e => {
        e.preventDefault()
        d.getElementById('checkbox-1').checked = true
        location.hash = 'Contactanos'
    })
    $service2.addEventListener('click', e => {
        e.preventDefault()
        d.getElementById('checkbox-2').checked = true
        location.hash = 'Contactanos'
    })
    $service3.addEventListener('click', e => {
        e.preventDefault()
        d.getElementById('checkbox-3').checked = true
        location.hash = 'Contactanos'
    })

    function sendMail() {
        var tempParams = {
            to_name: d.getElementById('name').value,
            reply_to: d.getElementById('email').value,
            message: `
            Cliente: ${d.getElementById('name').value}
            Télefono:${d.getElementById('phone').value}
            Correo electrónico: ${d.getElementById('email').value}
            Servicios:
                Compra de hardware: ${d.getElementById('checkbox-1').checked?'Si':'No'}
                Instalación de servicios: ${d.getElementById('checkbox-2').checked?'Si':'No'}
                Reparación o mantenimiento de equipos: ${d.getElementById('checkbox-3').checked?'Si':'No'}
                Otro servicio: ${d.getElementById('checkbox-4').checked?'Si':'No'}
            Mensaje: ${d.getElementById('message').value}
            `,
        }

        emailjs.send('service_nfwp76c', 'template_q8fu5tk', tempParams)
            .then(() => {
                console.log("Mensaje enviado")
            })
            .catch(e => console.log(e))
    }
})