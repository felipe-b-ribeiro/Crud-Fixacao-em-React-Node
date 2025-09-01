import * as UsuarioModel from '../models/userModel.js';

export const criarUsuario = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const novoUsuario = await UsuarioModel.criarUsuario(email, senha);
        res.status(201).json(novoUsuario);
    } catch (err) {
        console.error('Erro ao criar usuário:', err);
        res.status(500).json({ message: 'Erro do servidor' });
    }
};

export const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.listarUsuarios();
        res.status(200).json(usuarios);
    } catch (err) {
        console.error('Erro ao listar usuários:', err);
        res.status(500).json({ message: 'Erro do servidor' });
    }
};

export const buscarUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await UsuarioModel.buscarUsuarioPorId(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(usuario);
    } catch (err) {
        console.error('Erro ao buscar usuário:', err);
        res.status(500).json({ message: 'Erro do servidor' });
    }
}

export const atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, senha } = req.body;

        const usuarioExistente = await UsuarioModel.buscarUsuarioPorId(id);
        if (!usuarioExistente) {
            return res.status(404).json({ message: 'Usuário não existe' });
        }

        const usuarioAtualizado = await UsuarioModel.atualizarUsuario(id, email, senha);
        res.status(200).json(usuarioAtualizado);
    } catch (err) {
        console.error('Erro ao atualizar usuário:', err);
        res.status(500).json({ message: 'Erro do servidor' });
    }
};

export const deletarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await UsuarioModel.deletarUsuario(id);
        res.status(204).send();
    } catch (err) {
        console.error('Erro ao deletar usuário:', err);
        res.status(500).json({ message: 'Erro do servidor' });
    }
};
