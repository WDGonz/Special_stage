# Special Stage — Cultura JDM

Sitio web estático dedicado a los automóviles deportivos japoneses y a la cultura JDM. Presenta un carrusel de vehículos, una galería informativa y secciones editoriales sobre la identidad del proyecto.

## Estructura del proyecto

```text
.
├── index.html       # Página principal y contenido del sitio
├── styles.css       # Estilos, tema visual y diseño adaptable
├── images/          # Fotografías, logotipo, iconos y otros recursos gráficos
└── .gitattributes   # Configuración de Git para los archivos del repositorio
```

La carpeta `images/` también contiene una copia adicional de `index.html` y `styles.css`. El punto de entrada principal del proyecto es el `index.html` ubicado en la raíz.

## Secciones y funcionamiento

- **Navegación:** enlaces internos a Inicio, El garage y Cultura JDM.

- **Carrusel principal:** 14 slides con indicadores, controles anterior/siguiente y reproducción automática cada seis segundos. Incluye un botón para pausar o reanudar; la reproducción se pausa al navegar con el teclado y comienza pausada si el sistema solicita movimiento reducido.

- **Garage:** galería de 14 tarjetas informativas con imagen, modelo y descripción. Las tarjetas son de presentación y no enlazan a páginas de detalle.

- **Cultura JDM:** sección editorial con imagen de fondo y texto sobre el propósito del sitio.

- **Cierre y pie de página:** llamada a volver al inicio e iconos de redes sociales.

- **Imágenes:** los recursos se sirven desde `images/`. Las imágenes secundarias usan carga diferida y la imagen del primer slide tiene prioridad de carga.

- **Adaptabilidad:** la galería usa tres columnas en escritorio, dos en tablet y una en pantallas pequeñas.

El carrusel usa Bootstrap cuando la biblioteca está disponible. Si no carga desde el CDN, conserva controles e indicadores con una implementación alternativa en JavaScript y estilos locales.

## Tecnologías

- **HTML5:** estructura semántica, navegación y contenido.
- **CSS3:** diseño visual, variables, transiciones y reglas responsive mediante media queries.
- **JavaScript vanilla:** controles alternativos del carrusel, preferencias de movimiento reducido y control de reproducción.
- **Bootstrap 5.3.3:** estilos y componente de carrusel, cargados desde jsDelivr.
- **Google Fonts:** Barlow Condensed y DM Sans.
- **Recursos locales:** imágenes AVIF, WebP, JPEG/JFIF, SVG y PNG.

El proyecto no requiere backend, proceso de compilación ni dependencias locales de npm. Bootstrap y Google Fonts sí requieren conexión a Internet; el sitio cuenta con estilos de respaldo para el carrusel si Bootstrap no está disponible.
