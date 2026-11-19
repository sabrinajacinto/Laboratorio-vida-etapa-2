import express from 'express';

const router = express.Router();

// Busca o UnidadeController
import UnidadeController from '../controllers/UnidadeController.js'

const controle = new UnidadeController();

const caminhobase = 'unidade/'

router.get('/' + caminhobase + 'add', controle.openAdd)

router.post('/' + caminhobase + 'add', controle.add)

router.get('/' + caminhobase + 'lst', controle.list)

router.post('/' + caminhobase + 'find', controle.find)

router.get('/' + caminhobase + 'del/:id', controle.del)

router.get('/' + caminhobase + 'edt/:id', controle.openEdt)

router.post('/' + caminhobase + 'edt/:id', controle.edt)

export default router