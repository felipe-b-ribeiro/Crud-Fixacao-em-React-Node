import { useEffect, useState } from 'react';
import { Titulo, Input, Texto, Form } from './styles';
import Container from '../../components/Container';
import { Link, useParams } from 'react-router-dom';

export function PaginaEditar() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { id } = useParams();

    const puxarDadosUsuario = async () => {
        const resposta = await fetch(`http://localhost:5000/api/usuarios/${id}`, {
            method: 'GET'
        });
        const usuario = await resposta.json();
        setEmail(usuario.email);
        setSenha(usuario.senha);
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { email, senha };
            const resposta = await fetch(`http://localhost:5000/api/usuarios/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (resposta.ok) {
                alert('Usuário atualizado com sucesso!');
                window.location = '/listar';
            } else {
                alert('Erro ao atualizar usuário.');
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        puxarDadosUsuario();
    }, []);

    return (
        <>
        <Container>
            <style>
                {`
          .campo {
            display: flex;
            padding: 12px;
            gap: 1px;
            align-items: center;
        `}
            </style>
            <Titulo>Página de Edição de Usuário</Titulo>
            <Form onSubmit={onSubmitForm}>
                <div className='campo'>
                    <Texto>Digite seu novo email:</Texto>
                    <Input placeholder="Digite algo..." type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='campo'>
                    <Texto>Digite sua nova senha:</Texto>
                    <Input placeholder="Digite algo..." type='password' value={senha} onChange={(e) => setSenha(e.target.value)}/>
                </div>
                <button type='submit'>Atualizar</button>
            </Form>
            <Link style={{alignSelf: 'center' }} to="/listar">Ir para a Página de Listagem</Link>
        </Container>
        </>
    );
}

export default PaginaEditar;