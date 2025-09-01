import { useState } from 'react';
import { Titulo, Input, Texto, Form } from './styles';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';

export function PaginaPrincipal() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { email, senha };
            const resposta = await fetch('http://localhost:5000/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (resposta.ok) {
                alert('Usuário cadastrado com sucesso!');
                window.location = '/listar';
            } else {
                alert('Erro ao cadastrar usuário.');
            }
        } catch (err) {
            console.error(err.message);
        }
    }

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
            <Titulo>Página Principal</Titulo>
            <Form onSubmit={onSubmitForm}>
                <div className='campo'>
                    <Texto>Digite seu email:</Texto>
                    <Input placeholder="Digite algo..." type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='campo'>
                    <Texto>Digite sua senha:</Texto>
                    <Input placeholder="Digite algo..." type='password' value={senha} onChange={(e) => setSenha(e.target.value)}/>
                </div>
                <button type='submit'>Cadastrar</button>
            </Form>
            <Link style={{alignSelf: 'center' }} to="/listar">Ir para a Página de Listagem</Link>
        </Container>
        </>
    );
}

export default PaginaPrincipal;