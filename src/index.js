const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    quebraEmParagrafos(texto);
    // verificaPalavrasDuplicadas(texto);
});

// criar um array com as palavras - OK
// contar as ocorrências - OK
// montar um objeto com o resultado - ok

// {
//     "web": 5,
//     "computador": 4,
// }

// organizar os paragafos

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo) => {
        return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
};

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    // objeto[propriedade] = valor;
    listaPalavras.forEach((palavra) => {
        resultado[palavra] = (resultado[palavra] || 0) + 1;
    });
    return resultado;
};