import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from "./componentes/Inicio";
import SobreMim from "./componentes/SobreMim";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobremim' element={<SobreMim />} />
        <Route path='*' element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
