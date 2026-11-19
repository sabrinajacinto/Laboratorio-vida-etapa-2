import mongoose from 'mongoose'

const AgendamentoSchema = new mongoose.Schema({

    nome: String,
    cpf: String,
    email: String,
    telefone: String,
    tipoexame: String,
    especialista: String,
    unidade: String,
    data: Date,
    observacoes: String

})

export default mongoose.model('Agendamento', AgendamentoSchema)