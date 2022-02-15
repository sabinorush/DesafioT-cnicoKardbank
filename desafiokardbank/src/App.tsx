import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CadastroUsuario from './components/CadastroUsuario';

function App() {
  return (

    <Router>

      <Routes>
        <Route path="/" element={<CadastroUsuario />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
