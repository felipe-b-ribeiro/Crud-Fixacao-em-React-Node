import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());    

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: false
}));

app.use('/api', userRoutes);

app.listen(5000, () => {
    console.log('O Servidor está rodando na porta 5000');
});