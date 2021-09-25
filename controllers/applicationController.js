exports.inicio = (req, res) => {
    res.render('layout', {
        nombre: 'Inicio - Mini Bank'
    });
}

exports.registro = (req, res) => {
    res.render('Registro',{
        nombre: 'Registro - Mini Bank'
    });
}

exports.cargaSaldo = (req, res) => {
    res.send('Carga Saldo',{
        nombre: 'Carga Saldo - Mini Bank'
    });
}

exports.retiroSaldo = (req, res) => {
    res.send('Retiro Saldo',{
        nombre: 'Retiro Saldo - Mini Bank'
    });
}

exports.transferencia = (req, res) => {
    res.send('Transferencia',{
        nombre: 'Transferencia - Mini Bank'
    });
}

exports.movimientos = (req, res) => {
    res.send('Movimientos',{
        nombre: 'Movimientos - Mini Bank'
    });
}
