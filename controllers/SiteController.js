import TipoExame from '../models/TipoExame.js'
import Especialidade from '../models/Especialidade.js'
import Unidade from '../models/Unidade.js'
 export default class SiteController {
 
    constructor() {
        this.home = async (req, res) => {
          res.render('site/index')
        };

        this.login =  (req, res) => {

          res.render('site/login');
        };

    this.agendamento = async (req, res) => {
    const tipoexames = await TipoExame.find({})
    const especialidades = await Especialidade.find({})
    const unidades = await Unidade.find({})
    res.render('site/agendamento', {tipoexames, especialidades, unidades});
};
        this.exames = async (req, res) => {
    const tipoexames = await TipoExame.find({})
    res.render('site/exames', {tipoexames});
};
        this.prevencao =  (req, res) => {

          res.render('site/prevencao');
        };
        this.unidades =  (req, res) => {

          res.render('site/unidades');
        };
    }
 }

