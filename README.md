# La FOUN al dIA con la IA — Prototipo GitHub Pages

Sitio estático en HTML, CSS y JavaScript, listo para publicarse con GitHub Pages.

## Estructura
- `index.html`: portada.
- `docentes.html`, `administrativos.html`, `estudiantes.html`: páginas de ruta.
- 10 páginas de sesión.
- `site-config.js`: configuración central de fechas, títulos, duración, enlaces a presentaciones y formularios.
- `assets/presentations/`: presentaciones PDF.
- `assets/files/`: archivos de práctica.
- `assets/images/`: imágenes de identidad visual.

## Antes de publicar
1. Abre `site-config.js`.
2. Cambia `previewMode` a `false`.
3. Reemplaza títulos, descripciones, duraciones y fechas.
4. Reemplaza `attendance: "#"` por la URL de cada Google Form.
5. Carga las presentaciones en `assets/presentations/` con los nombres ya configurados, o cambia las rutas.
6. Carga los archivos de ejercicios en `assets/files/` y ajusta los enlaces en cada página de sesión.
7. Sustituye los prompts y textos entre corchetes por el contenido definitivo.
8. Ajusta la paleta en las variables `:root` de `styles.css` cuando se incorporen los colores exactos de la identidad visual.

## GitHub Pages
Sube todo el contenido a la raíz de un repositorio público.
En GitHub: Settings → Pages → Deploy from a branch → `main` / root.

## Contenido integrado en esta versión
- GEN-01: 3 ejercicios completos.
- GEN-02: 1 actividad completa, sin prompt copiable.
- DOC-01: 2 ejercicios completos.
- DOC-02: 2 ejercicios completos.
- Las sesiones administrativas y de estudiantes permanecen como plantillas.
- `previewMode` continúa en `true` para facilitar la revisión.

## Nombres definitivos de las presentaciones disponibles
- `assets/presentations/S_GEN_1.pdf`
- `assets/presentations/S_GEN_2.pdf`
- `assets/presentations/S_ESP_DOC_1.pdf`
- `assets/presentations/S_ESP_DOC_2.pdf`

Los botones de descarga de GEN-01, GEN-02, DOC-01 y DOC-02 ya apuntan a estos nombres.
