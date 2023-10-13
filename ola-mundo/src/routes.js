import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from './componentes/Menu';
import PaginaPadrao from 'componentes/PaginaPadrao';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='sobremim' element={<SobreMim />} />
        </Route>

        <Route path='*' element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
