// imports do react
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// imports nativos
import Container from '../../components/Container';

export function PaginaListar() {
    const [usuarios, setUsuarios] = useState([]); // hook de estado para armazenar os usuários

    // função principal para listar todos os usuários
    const listarTodosUsuarios = async () => {
        try {
            const resposta = await fetch('http://localhost:5000/api/usuarios', {
                method: 'GET'
            });
            const jsonData = await resposta.json();
            setUsuarios(jsonData); // Armazena os dados no estado
        } catch (err) {
            console.error('Erro ao buscar usuários:', err.message);
        }
    }

    // hook pra side effects, só carrega a function listarTodosUsuarios() uma vez
    useEffect(() => {
        listarTodosUsuarios();
    }, []);

    const excluirUsuario = async (id) => {

        const confirmado = window.confirm('Tem certeza que deseja excluir este usuário?');

        if (!confirmado) return;
        
        try {
        const resposta = await fetch(`http://localhost:5000/api/usuarios/${id}`, {
            method: 'DELETE'
        });

        // se fetch dar status 2xx, atualiza a lista removendo o usuário excluído
        if (resposta.ok) {
            setUsuarios((prevUsuarios) => prevUsuarios.filter((usuario) => usuario.id !== id));
        }
        else {
            console.error('Erro ao excluir usuário');
            alert('Não foi possível excluir o usuário.');
        }
        }
        // se fetch e atualização da lista não forem bem sucedidos, aponta o erro
        catch (error) {
        console.error('Erro ao excluir usuário:', error);
        alert('Erro ao tentar excluir o usuário.');
        }
    };
return (
    <>
        <Container>
            <table align='center' border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th style={{ color: 'blue' }}>Editar</th>
                        <th style={{ color: 'red' }}>Excluir</th>
                    </tr>
                </thead>
                <tbody align="center">
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.senha}</td>
                            <td>
                                <button style={{ color: 'blue' }}><Link to={`/editar/${usuario.id}`}>Editar</Link></button>
                            </td>
                            <td>
                                <button
                                    style={{ color: 'red', cursor: 'pointer' }}
                                    onClick={() => excluirUsuario(usuario.id)}
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link style={{ textDecoration: 'none', alignSelf: 'center' }} to="/">Ir para a Página Inicial</Link>
        </Container>
    </>
);
}

export default PaginaListar;
