import conexao from '../config/conexao.js';

const Unidade = conexao.Schema({
    nome: {
        type: String,
        required: true
    }
});

export default conexao.model('Unidade', Unidade);