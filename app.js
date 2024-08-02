import express from 'express';

const servidor = express();
servidor.use(express.json());

servidor.get('/helloworld', (req, resp) => {

    resp.send('Hello World!');
})

servidor.get('/mensagem/boasvindas', (req, resp) => {
    resp.send('Olá! Sejam muito bem vindos(as)')

})

servidor.get('/v2/mensagem/boasvindas', (req, resp) => {
    resp.send('SEU BOSTINHA')

})

servidor.get('/mensagem/ocupado', (req, resp) => {
    resp.send('No me clamas')

})

servidor.get('/mensagem/ocupado/recado', (req, resp) => {
    resp.send('No me clamas, mas hablas oque tu quieres')

})

servidor.get('/calculadora/somar/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let soma = n1 + n2
    resp.send('A soma é ' + soma)

})

servidor.post('/media', (req, resp) => {
    //parâmetro de corpo
    let n1 = req.body.nota1;
    let n2 = req.body.nota2;
    let n3 = req.body.nota3;

    let media = (n1+n2+n3) / 3;

    resp.send('A média é ' + media);

})

servidor.post('/loja/pedido', (req, resp) => {
    let total = req.body.total;
    let parcelas = req.body.parcelas;
    let cupom = req.query.cupom;

    if (parcelas > 1) {
        let juros = total * 0.05;
        total += juros
    }

    if (cupom == 'QUERO100'){
        total -= 100;
    }

    resp.send('O total do pedido ficou em R$ ' + total)
})

servidor.post('/loja/pedido/completo', (req, resp) =>{
    let parcelas = req.body.parcelas;
    let itens = req.body.itens;
    let cumpom = req.query.cupom;

    let total = 0
    for(let produto of itens){
        total += produto.preco
    }

    if (parcelas > 1){
        let juros = total + 0.05;
        total += juros
    }

    if (cupom == 'QUERO100'){
        total -= 100;
    }

resp.send('O total a pagar é R$ ' + total)
})

servidor.listen(
    5001,
    () => console.log("API subida com sucesso!"));