import express from 'express';
const router = express.Router();

import AgendamentoController from '../controllers/AgendamentoController.js';

const controle = new AgendamentoController();

router.post('/agendamento/add', controle.add);

export default router;