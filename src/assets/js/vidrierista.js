import { Modal, Accordion } from 'node_modules/bootstrap';

const mainNav = require('./main-nav');

document.addEventListener('DOMContentLoaded', function() {
    mainNav.initiateNav(false);
});

const devHelper = require('./dev-helpers'); //ELIMINAR EN PRODUCCION
devHelper.init();
