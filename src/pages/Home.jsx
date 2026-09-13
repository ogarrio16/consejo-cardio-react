import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout } from '../components/Layout';

const services = [
  ['Certificación de especialistas', 'Requisitos para inscripción a examen teórico-práctico.', '/certificacion'],
  ['Vigencia o recertificación', 'Requisitos para solicitud por currículo o por examen.', '/recertificacion'],
  ['Aval de eventos de Educación Médica Continua', 'Cursos avalados, próximos eventos y requisitos.', '/cursos'],
  ['Paciente', 'Verifique que su médico tratante tiene certificación.', '/paciente'],
];

const HOME_SLIDES = [
  { imageUrl: 'https://consejomexcardio.org/Portals/0/ConsejoNacionalDeCardiologia/Imagenes/Avisos/Convocatoria%20ENC%202026_Tercera.jpg?ver=2026-08-04-211202-913' },
  { imageUrl: 'https://consejomexcardio.org/Portals/0/ConsejoNacionalDeCardiologia/Imagenes/Avisos/Avisos%20para%20sitio%20web.jpg?ver=2025-10-26-194832-573' },
  { imageUrl: 'https://consejomexcardio.org/Portals/0/ConsejoNacionalDeCardiologia/Imagenes/Avisos/2_Difusio%CC%81n%20del%20documento%20%E2%80%9CEsta%CC%81ndares%20de%20calidad%20en%20evaluacio%CC%81n%20del%20CONACEM%E2%80%9D%20%282%29.png?ver=2025-09-22-154748-303', linkUrl: 'https://drive.google.com/file/d/1TZ8ovnNv1_VGnsYuktVAguXfcq4rzI2g/view' },
  { imageUrl: 'https://consejomexcardio.org/Portals/0/ConsejoNacionalDeCardiologia/Imagenes/Avisos/1%20Para%20el%20banner.png?ver=2025-05-26-213226-790', linkUrl: 'https://drive.google.com/file/d/1UM9I4S4CmuwrM2sGe-FVOqc05fJOfQAM/view' },
  { imageUrl: 'https://consejomexcardio.org/Portals/0/ConsejoNacionalDeCardiologia/Imagenes/Avisos/Aviso%20CMC.jpg?ver=2025-05-13-204619-200' },
  { imageUrl: 'https://consejomexcardio.org/Portals/0/ConsejoNacionalDeCardiologia/Imagenes/Avisos/Carrusel1.png', linkUrl: 'https://consejomexcardio.org/Cursos' },
  { imageUrl: 'https://consejomexcardio.org/Portals/0/ConsejoNacionalDeCardiologia/Imagenes/Avisos/Carrusel2.png', linkUrl: 'https://consejomexcardio.org/Portals/0/ConsejoNacionalDeCardiologia/Documentos/MOTU_CORDIS_SEP_2023.pdf?ver=2023-10-03-151756-467' },
  { imageUrl: 'https://consejomexcardio.org/Portals/0/ConsejoNacionalDeCardiologia/Imagenes/Avisos/Carrusel5.png', linkUrl: 'https://consejomexcardio.org/Directorio/moduleId/550/controller/Home/action/Busqueda' },
];

function ServiceIcon({ index }) {
  const paths = ['M8 4h8v3h3v13H5V7h3V4Zm2 3h4V6h-4v1Zm-2 3v7h8v-7H8Zm3 1h2v2h2v2h-2v2h-2v-2H9v-2h2v-2Z', 'M7 3h8l4 4v14H7V3Zm8 2v4h3M10 11l1.7 6L13 12l1.3 5 1.7-6', 'M12 3v7a4 4 0 0 1-8 0V8m2-3v5a2 2 0 0 0 4 0V3m4 6v3a4 4 0 0 1-4 4h-1m7-8v5a5 5 0 0 1-5 5v3m3-11v3', 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8v-2a5 5 0 0 1 10 0v2H5Zm12-7a3 3 0 0 1 3 3v4h-4v-3a5 5 0 0 0-2.1-4.1A3 3 0 0 1 17 13Z'];
  return <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true"><path d={paths[index]} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const location = useLocation();
  const slide = HOME_SLIDES[current];
  useEffect(() => { const timer = window.setInterval(() => setCurrent((value) => (value + 1) % HOME_SLIDES.length), 6500); return () => window.clearInterval(timer); }, []);
  const selectSlide = (index) => setCurrent((index + HOME_SLIDES.length) % HOME_SLIDES.length);
  const slideImage = <div className="slide-image" style={{ backgroundImage: `url(${slide.imageUrl})` }} />;
  return <Layout><section className="home-slider" aria-label="Información destacada">{slide.linkUrl ? <a className="slide-link" href={slide.linkUrl} target="_blank" rel="noreferrer" aria-label="Abrir información relacionada">{slideImage}</a> : slideImage}<button className="slider-control previous" onClick={() => selectSlide(current - 1)} aria-label="Diapositiva anterior">‹</button><button className="slider-control next" onClick={() => selectSlide(current + 1)} aria-label="Siguiente diapositiva">›</button><div className="slider-dots">{HOME_SLIDES.map((item, index) => <button key={item.imageUrl} onClick={() => selectSlide(index)} aria-label={`Ver diapositiva ${index + 1}`} aria-current={current === index} className={current === index ? 'active' : ''} />)}</div></section><section className="services-section"><div className="section-head centered"><span className="eyebrow">ACCESOS PRINCIPALES</span><h2>Servicios</h2></div><div className="service-circles">{services.map(([title, description, url], index) => <Link className={`service-circle ${location.pathname === url ? 'featured' : ''}`} to={url} key={title}><ServiceIcon index={index} /><h3>{title}</h3><p>{description}</p><span>Ver más</span></Link>)}</div></section><section className="notice"><div><span className="eyebrow">EXAMEN NACIONAL DE CERTIFICACIÓN 2026</span><h2>Tercera convocatoria</h2><p>Examen teórico: sábado 24 de octubre de 2026. Examen práctico: fecha asignada por el Consejo entre el 22 y 30 de octubre, en Ciudad de México.</p></div><Link className="btn" to="/certificacion">Consultar convocatoria</Link></section><section className="section light"><div className="columns"><div><span className="eyebrow">CURSOS AVALADOS</span><h2>Educación Médica Continua</h2><p>Consulta actividades académicas y eventos que cuentan con aval del Consejo y puntos curriculares válidos para el proceso de vigencia.</p><Link className="textlink" to="/cursos">Ver cursos →</Link></div><div><span className="eyebrow">CONACEM</span><h2>Idoneidad 2023–2028</h2><p>Información institucional y documentos regulatorios del Consejo Mexicano de Cardiología.</p><Link className="textlink" to="/regulacion">Ver regulación →</Link></div></div></section></Layout>;
}
