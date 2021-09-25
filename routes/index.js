const express = require('express');
const router = express.Router();

const applicationController = require('../controllers/applicationController');


module.exports = function(){
    router.get('/', applicationController.inicio);
    router.get('/registro', applicationController.registro);
    router.get('/cargaSaldo', applicationController.cargaSaldo);
    router.get('/retiroSaldo', applicationController.retiroSaldo);
    router.get('/transferencia', applicationController.transferencia);
    router.get('/movimientos', applicationController.movimientos);

    return router;
}

