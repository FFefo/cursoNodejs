import express from 'express';

const servidor = express();

servidor.get('/helloworld', (req, resp) => {

    resp.send('Hello World!');
})

servidor.get('/mensagem/boasvindas', (req, resp) => {
    resp.send('Olá! Sejam muito bem vindos(as)')

})

servidor.get('/v2/mensagem/boasvindas', (req, resp) =>{
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

servidor.listen(
    5001,
    () => console.log("API subida com sucesso!"));