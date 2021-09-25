exports.inicio = (req, res) => {
    res.render('layouts', {
        nombre: 'Inicio - Mini Bank'
    });
}

exports.registro = (req, res) => {
    res.render('Registro',{
        nombre: 'Registro - Mini Bank'
    });
}

exports.cargaSaldo = (req, res) => {
    res.send('Carga Saldo');
}

exports.retiroSaldo = (req, res) => {
    res.send('Retiro Saldo');
}

exports.transferencia = (req, res) => {
    res.send('Transferencia');
}

exports.movimientos = (req, res) => {
    res.send('Movimientos');
}
