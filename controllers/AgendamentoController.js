import Agendamento from '../models/Agendamento.js'

export default class AgendamentoController {
    constructor() {
        this.add = async (req, res) => {
            try {
                const resultado = await Agendamento.create({
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    email: req.body.email,
                    telefone: req.body.telefone,
                    tipoexame: req.body.tipoexame,
                    especialista: req.body.especialista,
                    unidade: req.body.unidade,
                    data: req.body.data,
                    observacoes: req.body.observacoes
                });

                console.log('Agendamento salvo com sucesso:', resultado);

              res.redirect('/site/agendamento?sucesso=1');

            } catch (erro) {
                console.log('Erro ao salvar agendamento:', erro);
                res.status(500).send('Erro ao salvar o agendamento. Verifique o terminal.');
            }
        };
    }
}