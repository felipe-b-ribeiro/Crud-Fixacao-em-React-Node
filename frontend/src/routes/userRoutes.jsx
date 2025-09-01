import { Routes, Route } from 'react-router-dom';
import PaginaPrincipal from '../pages/Principal';
import PaginaListar from '../pages/Listar';
import PaginaEditar from '../pages/Editar';

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/listar" element={<PaginaListar />} />
      <Route path="/editar/:id" element={<PaginaEditar />} />
    </Routes>
  )
}