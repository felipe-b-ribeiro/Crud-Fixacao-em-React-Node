import banco from '../config/db.js';
import argon2 from 'argon2';

export const criarUsuario = async (email, senha) => {
  try {
    // Gera o hash da senha com argon2
    const senhaCriptografada = await argon2.hash(senha);

    const result = await banco.query(
      'INSERT INTO usuarios (email, senha) VALUES ($1, $2)',
      [email, senhaCriptografada]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw new Error('Erro interno ao criar usuário');
  }
};

export const listarUsuarios = async () => {
    const result = await banco.query('SELECT * FROM usuarios ORDER BY id');
    return result.rows;
};

export const buscarUsuarioPorId = async (id) => {
    const result = await banco.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return result.rows[0];
};

export const atualizarUsuario = async (id, email, senha) => {
    const senhaCriptografada = await argon2.hash(senha);
    const result = await banco.query(
        'UPDATE usuarios SET email = $1, senha = $2 WHERE id = $3',
        [email, senhaCriptografada, id]
    );
    return result.rows[0];
};

export const deletarUsuario = async (id) => {
    await banco.query('DELETE FROM usuarios WHERE id = $1', [id]);
};
