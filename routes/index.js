const express = require('express');
const router = express.Router();


module.exports = function(){

    router.get('/', (req, res) => {
        res.send('home');
    });

    router.get('/rergistro', (req, res) => {
        res.send('nosotros');
    });

    router.get('/operaciones/carga-saldo', (req, res) => {
        res.send('carga-saldo');
    });

    router.get('/operaciones/retiro-saldo', (req, res) => {
        res.send('retiro-saldo');
    });

    router.get('/operaciones/transferencia', (req, res) => {
        res.send('transferencia');
    });

    router.get('/operaciones/movimientos', (req, res) => {
        res.send('movimientos');
    });

    return router;
}