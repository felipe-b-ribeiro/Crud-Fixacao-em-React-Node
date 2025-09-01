import { Pool } from 'pg';

const banco = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'teste',
    password: '230608',
    port: 5432,
});

try {
    await banco.connect();
    console.log('Conectado ao banco de dados com sucesso');
} catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
}

export default banco;
