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
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
};

function limpaPlavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
};

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    // objeto[propriedade] = valor;
    listaPalavras.forEach((palavra) => {
        if(palavra.length >= 3) {
            const palavraLimpa = limpaPlavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
    });
    return resultado;
};