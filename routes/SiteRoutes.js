import express from 'express';

const router = express.Router();

// Busca o EspecialidadeController
import SiteController from '../controllers/SiteController.js'

const controle = new SiteController();

const caminhobase = 'site/'

router.get('/' + caminhobase, controle.home)
router.get('/' + caminhobase +'login', controle.login)
router.get('/' + caminhobase +'agendamento', controle.agendamento)
router.get('/' + caminhobase +'exames', controle.exames)
router.get('/' + caminhobase +'prevencao', controle.prevencao)
router.get('/' + caminhobase +'unidades', controle.unidades)

export default router