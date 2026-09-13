import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="top"><div>Consejo Mexicano de Cardiología</div><div>55 5485 1405 · 9:00 a 16:00 hrs</div></div>
      <header>
        <Link to="/" className="brand"><span className="heart">♥</span><span>CONSEJO MEXICANO<br /><b>DE CARDIOLOGÍA</b></span></Link>
        <nav><Link to="/">Inicio</Link><Link to="/certificacion">Certificación</Link><Link to="/recertificacion">Recertificación</Link><Link to="/cursos">Cursos</Link><Link to="/directorio">Directorio</Link><Link to="/paciente">Paciente</Link></nav>
      </header>
    </>
  );
}

function Footer() {
  return <footer><div><b>CONSEJO MEXICANO DE CARDIOLOGÍA</b><p>Calle Juan Badiano No. 1, Edif. Santiago Galas 1er piso, Col. Belisario Domínguez Sección XVI, Tlalpan, CDMX.</p></div><div><b>Contacto</b><p>55 5485 1405<br />Horario: 9:00 a 16:00 hrs</p></div></footer>;
}

export function Layout({ children }) { return <><Header />{children}<Footer /></>; }

export function Page({ title, children }) {
  return <Layout><main className="page"><span className="eyebrow">CONSEJO MEXICANO DE CARDIOLOGÍA</span><h1>{title}</h1>{children}</main></Layout>;
}
