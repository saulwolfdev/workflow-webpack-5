import { Modal } from 'node_modules/bootstrap';

const mainNav = require('./main-nav');
const wizard = require('./solicitud-limpieza');

document.addEventListener('DOMContentLoaded', function() {
    mainNav.initiateNav(false);
	wizard.default.init();
});

const devHelper = require('./dev-helpers'); //ELIMINAR EN PRODUCCION
devHelper.init();
