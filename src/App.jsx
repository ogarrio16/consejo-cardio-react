import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Certification, Courses, Directory, Patient, Recertification, Regulation } from './pages/ContentPages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificacion" element={<Certification />} />
      <Route path="/recertificacion" element={<Recertification />} />
      <Route path="/cursos" element={<Courses />} />
      <Route path="/paciente" element={<Patient />} />
      <Route path="/directorio" element={<Directory />} />
      <Route path="/regulacion" element={<Regulation />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
