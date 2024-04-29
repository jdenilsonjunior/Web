
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;