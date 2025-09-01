import { Router } from 'express';
import * as Controlador from '../controllers/userController.js';

const router = Router();

router.post('/usuarios', Controlador.criarUsuario);

router.get('/usuarios', Controlador.listarUsuarios);

router.get('/usuarios/:id', Controlador.buscarUsuarioPorId);

router.patch('/usuarios/:id', Controlador.atualizarUsuario);

router.delete('/usuarios/:id', Controlador.deletarUsuario);

export default router;