# Configuración del proyecto

## Propósito

Este proyecto implementa el sitio informativo del **Consejo Mexicano de Cardiología**. Está diseñado para presentar procesos de certificación, recertificación, educación médica continua e información útil para pacientes de forma clara, confiable y accesible.

## Tecnologías

| Tecnología | Uso en el proyecto |
| --- | --- |
| [React](https://react.dev/) | Construcción de la interfaz mediante componentes reutilizables. |
| [Vite](https://vite.dev/) | Servidor de desarrollo y generación de la versión de producción. |
| [React Router DOM](https://reactrouter.com/) | Navegación de una sola página entre las secciones del sitio. |
| CSS nativo | Sistema visual, diseño responsivo y estilos sin dependencias adicionales. |

El proyecto utiliza módulos ES (`type: module`) y requiere una versión actual de Node.js compatible con Vite.

## Puesta en marcha

```bash
npm install
npm run dev
```

Después, abre la dirección que Vite indique en la terminal. Para validar la compilación de producción:

```bash
npm run build
```

## Estructura principal

```text
src/
├── components/    # Elementos reutilizables: encabezado, pie y estructura común
├── pages/         # Vistas que corresponden a cada ruta o pestaña del sitio
├── App.jsx        # Mapa central de rutas
├── main.jsx       # Punto de entrada de React
└── styles.css     # Estilos globales y diseño responsivo
```

## Criterios de diseño

La experiencia visual debe conservar un tono institucional, cercano y fácil de usar:

- **Jerarquía clara:** títulos, textos de apoyo y llamadas a la acción deben permitir encontrar la información sin esfuerzo.
- **Paleta institucional:** azul profundo para confianza y estructura; rojo como acento para acciones y elementos relevantes.
- **Legibilidad:** tipografía sans serif, contraste suficiente, espacios generosos y líneas de texto de longitud cómoda.
- **Navegación predecible:** encabezado persistente, enlaces con nombres claros y rutas consistentes.
- **Diseño adaptable:** la interfaz debe funcionar correctamente en móvil, tableta y escritorio; no se deben fijar anchos que provoquen desplazamiento horizontal.
- **Interacción sutil:** las tarjetas y enlaces pueden comunicar que son interactivos mediante cambios discretos de color, elevación o foco, sin distraer del contenido.

## Convenciones para nuevos desarrollos

1. Crear componentes pequeños y reutilizables en `src/components/` cuando una sección aparezca en más de una página.
2. Crear cada nueva pestaña o vista dentro de `src/pages/` y agregar su ruta explícita en `App.jsx`.
3. Mantener los contenidos de interés médico en lenguaje preciso, respetuoso y comprensible para su audiencia.
4. Comprobar siempre la vista móvil antes de integrar una modificación visual.
5. Usar elementos HTML semánticos (`header`, `main`, `section`, `nav`, `footer`) y enlaces descriptivos para favorecer accesibilidad.

## Verificación antes de publicar

- Ejecutar `npm run build` sin errores.
- Revisar las rutas principales: Inicio, Certificación, Recertificación, Cursos, Directorio y Paciente.
- Confirmar que los botones y enlaces tienen destino válido.
- Validar el contenido y fechas institucionales con la fuente oficial antes de hacerlos públicos.
