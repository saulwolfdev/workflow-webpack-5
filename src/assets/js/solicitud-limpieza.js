
export default {
    ventanaContainer: document.querySelector('.ventanas'),
    frequencyContainer: document.querySelector('.modalidades'),
    rangeSelector: 'input[type=range]',

    init: function() {
        if (null != this.ventanaContainer) { //innecesario si se modulariza bien
            this.vidrieraRange();
        }
        if (null != this.frequencyContainer) { //innecesario si se modulariza bien
            this.subscriptionFrequency();
        }
    },
    vidrieraRange: function() {
        let self = this;
        this.ventanaContainer.addEventListener('change', function(event) {
            let possibleTargets = self.ventanaContainer.querySelectorAll(self.rangeSelector);
            let target = event.target;

            for (let i = 0, l = possibleTargets.length; i < l; i++) {
              let el = target;
              let p = possibleTargets[i];

              while (el && el !== self.ventanaContainer) {
                if (el === p) {
                    let modificacion = [];
                    modificacion.vidriera = target.dataset.vidriera;
                    modificacion.variable = target.dataset.variable;
                    modificacion.value = target.value;
                    self.updateTextInput(modificacion);
                    self.updateVidriera(modificacion);
                }
                el = el.parentNode;
              }
            }
          });
    },
    updateTextInput: function(modificacion) {
        document.querySelector('input.form-aux[data-vidriera="' + modificacion.vidriera + '"][data-variable="' + modificacion.variable + '"]').value = modificacion.value;
    },
    updateVidriera: function(modificacion) {
        let vidriera = document.querySelector('#vidriera' + modificacion.vidriera);
        let maxWidth = vidriera.dataset.maxwidth;
        let maxHeight = vidriera.dataset.maxheight;

        if ('alto' == modificacion.variable) {
            vidriera.dataset.alto = modificacion.value;
            vidriera.style.height = (100 * modificacion.value / maxHeight)  + '%';
        }
        if ('ancho' == modificacion.variable) {
            vidriera.dataset.ancho = modificacion.value;
            vidriera.style.width = (100 * modificacion.value / maxWidth) + '%';
        }
        this.vidrieraMetrosCuadrados(modificacion.vidriera);
    },
    vidrieraMetrosCuadrados: function(numVidriera) {
        let vidriera = document.querySelector('#vidriera' + numVidriera);
        let metroscuadrados = vidriera.dataset.alto * vidriera.dataset.ancho;
        vidriera.querySelector('.value').innerHTML = metroscuadrados + 'm<sup>2</sup>';
    },
    subscriptionFrequency: function() {
        let modalidades = this.frequencyContainer.querySelectorAll('.modalidad');
        modalidades.forEach(function(modalidad) {
            modalidad.addEventListener('click',  (e) => {
                modalidades.forEach((mod) => {
                    mod.classList.remove('active');
                });
                let active = (e.target.matches('.modalidad')) ? e.target : e.target.closest('.modalidad');
                active.classList.add('active');

                let activeForm = active.dataset.form;
                let frequencyForms = document.querySelectorAll('.frequency-form');

                frequencyForms.forEach((form) => {
                    if (form.matches(activeForm)) {
                        form.classList.add('active');
                    } else {
                        form.classList.remove('active');
                    }
                });
            });
        }, self);
    }
};
