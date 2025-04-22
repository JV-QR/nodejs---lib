export default function trataErros(erro) {
    if(erro.code === 'ENOENT') {
        throw new Error('Arquivo não encontrado');
        // return 'Arquivo não encontrado';
    } else if(erro.code === 'EISDIR') {
        throw new Error('Esperado um arquivo, mas foi encontrado um diretório');
    } else {
        return 'Erro na aplicação';
    }
};
