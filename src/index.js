import "./styles/main.scss";

const mainNav = require("./assets/js/main-nav");
const wizard = require('./assets/js/solicitud-limpieza');

document.addEventListener('DOMContentLoaded', function() {
    mainNav.initiateNav(false);
	wizard.default.init();
});

const devHelper = require('./assets/js/dev-helpers'); //ELIMINAR EN PRODUCCION
devHelper.init();
