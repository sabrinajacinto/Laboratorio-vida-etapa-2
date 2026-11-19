import Unidade from '../models/Unidade.js'

export default class UnidadeController {

    constructor(caminhoBase = 'unidade/') {
        this.caminhoBase = caminhoBase

        // Abrir tela de cadastro
        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add")
        }

        // Cadastrar unidade
        this.add = async (req, res) => {

            await Unidade.create({
                nome: req.body.nome
            })

            res.redirect('/' + caminhoBase + 'lst')
        }

        // Listar unidades
        this.list = async (req, res) => {

            const resultado = await Unidade.find({})

            res.render(caminhoBase + 'lst', {
                unidades: resultado
            })
        }

        // Pesquisar unidade
        this.find = async (req, res) => {

            const filtro = req.body.filtro

            const resultado = await Unidade.find({
                nome: {
                    $regex: filtro,
                    $options: "i"
                }
            })

            res.render(caminhoBase + 'lst', {
                unidades: resultado
            })
        }

        // Abrir tela de edição
        this.openEdt = async (req, res) => {

            const id = req.params.id

            const unidade = await Unidade.findById(id)

            res.render(caminhoBase + "edt", {
                unidade: unidade
            })
        }

        // Editar unidade
        this.edt = async (req, res) => {

            await Unidade.findByIdAndUpdate(
                req.params.id,
                req.body
            )

            res.redirect('/' + caminhoBase + 'lst')
        }

        // Excluir unidade
        this.del = async (req, res) => {

            await Unidade.findByIdAndDelete(req.params.id)

            res.redirect('/' + caminhoBase + 'lst')
        }
    }
}