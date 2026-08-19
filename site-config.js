window.FOUN_CONFIG = {
  "previewMode": false,
  "siteName": "La FOUN al dIA con la IA",
  "sessions": {
    "general-1": {
      "type": "Sesión general 01",
      "title": "¿Qué puede hacer la inteligencia artificial por la Facultad hoy?",
      "audience": "Docentes y Administrativos",
      "routes": [
        "docentes",
        "administrativos"
      ],
      "duration": "120 minutos",
      "releaseDate": "2026-08-10",
      "description": "Sesión introductoria orientada a conocer qué es la inteligencia artificial generativa, qué puede hacer actualmente y cómo puede apoyar diferentes tareas académicas, administrativas y de aprendizaje en la Facultad de Odontología. La sesión presenta conceptos básicos, herramientas disponibles, ejemplos prácticos, riesgos y buenas prácticas para utilizar la IA con criterio, manteniendo la revisión y responsabilidad humana.",
      "presentation": "assets/presentations/S_GEN_1.pdf",
      "attendance": "#",
      "next": {
        "docentes": "general-2",
        "administrativos": "general-2"
      }
    },
    "general-2": {
      "type": "Sesión general 02",
      "title": "¿Cómo aplicar IA en tareas de la Facultad?",
      "audience": "Docentes y Administrativos",
      "routes": [
        "docentes",
        "administrativos"
      ],
      "duration": "120 minutos",
      "releaseDate": "2026-08-11",
      "description": "Sesión orientada a pasar de una comprensión general de la inteligencia artificial a la identificación de aplicaciones concretas en tareas de la Facultad. Retoma los principios básicos de la sesión anterior, presenta el marco institucional de buen uso y apropiación ética de la IA en la Universidad Nacional de Colombia, revisa criterios específicos para Odontología y muestra dos casos reales de uso de IA para construir soluciones digitales y automatizaciones. La sesión cierra con la identificación de oportunidades de aplicación en tareas académicas y administrativas.",
      "presentation": "assets/presentations/S_GEN_2.pdf",
      "attendance": "https://docs.google.com/forms/d/e/1FAIpQLSf7K9PW2e9wMHVtSn1OW-xQUXMVnxvvlGyyehhFBIkjSOoYmw/viewform",
      "next": {
        "docentes": "docentes-1",
        "administrativos": "administrativos-1"
      }
    },
    "docentes-1": {
      "type": "Sesión específica · Docentes 01",
      "title": "Preparar clases, seminarios y evaluaciones con IA",
      "audience": "Docentes",
      "routes": [
        "docentes"
      ],
      "duration": "120 minutos",
      "releaseDate": "2026-08-12",
      "description": "Taller aplicado para docentes orientado a utilizar herramientas de inteligencia artificial como apoyo para diseñar o mejorar clases, seminarios, actividades y recursos evaluativos. La sesión trabaja la construcción de propuestas iniciales de clase a partir del contexto, el resultado de aprendizaje, la secuencia, la participación, la evidencia y las condiciones de la sesión; posteriormente aborda el diseño de rúbricas, bancos de preguntas, cuestionarios e instrucciones. El principio de trabajo es que la IA propone primeras versiones y el docente verifica, ajusta y decide.",
      "presentation": "assets/presentations/S_ESP_DOC_1.pdf",
      "attendance": "https://docs.google.com/forms/d/e/1FAIpQLSf7K9PW2e9wMHVtSn1OW-xQUXMVnxvvlGyyehhFBIkjSOoYmw/viewform",
      "next": {
        "docentes": "docentes-2"
      }
    },
    "docentes-2": {
      "type": "Sesión específica · Docentes 02",
      "title": "IA para lectura académica, investigación y creación de materiales",
      "audience": "Docentes",
      "routes": [
        "docentes"
      ],
      "duration": "120 minutos",
      "releaseDate": "2026-08-13",
      "description": "Taller aplicado para docentes enfocado en trabajar con información académica mediante herramientas de IA. La sesión diferencia el papel de Perplexity para explorar y localizar fuentes, NotebookLM para consultar documentos cargados y ChatGPT o Gemini para organizar y transformar información. Los participantes practican el análisis trazable de una fuente académica en NotebookLM y realizan una búsqueda real en Perplexity, con énfasis en revisar la fuente original, distinguir afirmaciones de inferencias y verificar autoría, fecha, tipo de evidencia y correspondencia con las afirmaciones.",
      "presentation": "assets/presentations/S_ESP_DOC_2.pdf",
      "attendance": "https://docs.google.com/forms/d/e/1FAIpQLSf7K9PW2e9wMHVtSn1OW-xQUXMVnxvvlGyyehhFBIkjSOoYmw/viewform",
      "next": {}
    },
    "administrativos-1": {
      "type": "Sesión específica · Administrativos 01",
      "title": "Reuniones, acuerdos y seguimiento con IA",
      "audience": "Administrativos",
      "routes": [
        "administrativos"
      ],
      "duration": "120 minutos",
      "releaseDate": "2026-08-17",
      "description": "Sesión práctica orientada a transformar el contenido de una reunión en información clara, verificable y útil mediante herramientas de inteligencia artificial. Los participantes conocerán alternativas para registrar y transcribir reuniones, trabajarán con una transcripción ficticia en Gemini, verificarán información mediante citas y páginas, identificarán datos que requieren aclaración, construirán un acta y crearán un prompt reutilizable para aplicar el procedimiento en futuras reuniones. La sesión desarrolla un flujo completo: reunión → transcripción → verificación → aclaraciones → acta → seguimiento.",
      "presentation": "assets/presentations/S_ESP_ADM_1.pdf",
      "attendance": "https://forms.gle/cXAoyrAXGrskuVTp6",
      "next": {
        "administrativos": "administrativos-2"
      }
    },
    "administrativos-2": {
      "type": "Sesión específica · Administrativos 02",
      "title": "Google Sheets, fórmulas y primeros pasos en Apps Script",
      "audience": "Administrativos",
      "routes": [
        "administrativos"
      ],
      "duration": "120 minutos",
      "releaseDate": "2026-08-19",
      "description": "Sesión práctica orientada a convertir una base de información en un seguimiento más claro mediante Google Sheets, Gemini y Google Apps Script. Los participantes trabajarán con una base ficticia de solicitudes, aprenderán a pedir a la IA fórmulas sencillas para calcular y clasificar fechas, construirán un resumen de solicitudes y darán sus primeros pasos en Apps Script para registrar fechas de revisión. Posteriormente ampliarán el código para incorporar nuevas acciones y procesar varias filas, manteniendo la verificación humana como parte del proceso.",
      "presentation": "assets/presentations/S_ESP_ADM_2.pdf",
      "attendance": "#",
      "next": {
        "administrativos": "administrativos-3"
      }
    },
    "administrativos-3": {
      "type": "Sesión específica · Administrativos 03",
      "title": "Sesión Específica Administrativos 3",
      "audience": "Administrativos",
      "routes": [
        "administrativos"
      ],
      "duration": "Por definir",
      "releaseDate": null,
      "description": "Tercera sesión específica de la ruta para administrativos.",
      "presentation": "assets/presentations/administrativos-3.pdf",
      "attendance": "#",
      "next": {}
    },
    "estudiantes-general": {
      "type": "Sesión general · Estudiantes",
      "title": "Sesión General Estudiantes",
      "audience": "Estudiantes",
      "routes": [
        "estudiantes"
      ],
      "duration": "Por definir",
      "releaseDate": null,
      "description": "Sesión general exclusiva de la ruta para estudiantes.",
      "presentation": "assets/presentations/estudiantes-general.pdf",
      "attendance": "#",
      "next": {
        "estudiantes": "estudiantes-1"
      }
    },
    "estudiantes-1": {
      "type": "Sesión específica · Estudiantes 01",
      "title": "Sesión Específica Estudiantes 1",
      "audience": "Estudiantes",
      "routes": [
        "estudiantes"
      ],
      "duration": "Por definir",
      "releaseDate": null,
      "description": "Primera sesión específica de la ruta para estudiantes.",
      "presentation": "assets/presentations/estudiantes-1.pdf",
      "attendance": "#",
      "next": {
        "estudiantes": "estudiantes-2"
      }
    },
    "estudiantes-2": {
      "type": "Sesión específica · Estudiantes 02",
      "title": "Sesión Específica Estudiantes 2",
      "audience": "Estudiantes",
      "routes": [
        "estudiantes"
      ],
      "duration": "Por definir",
      "releaseDate": null,
      "description": "Segunda sesión específica de la ruta para estudiantes.",
      "presentation": "assets/presentations/estudiantes-2.pdf",
      "attendance": "#",
      "next": {}
    }
  },
  "routes": {
    "docentes": {
      "label": "Docentes",
      "title": "Ruta para docentes",
      "headline": "Explora la IA como apoyo para tu práctica docente",
      "description": "Recorre las sesiones generales y específicas diseñadas para apoyar actividades docentes, académicas y de trabajo con información.",
      "accent": "docentes",
      "sessions": [
        "general-1",
        "general-2",
        "docentes-1",
        "docentes-2"
      ]
    },
    "administrativos": {
      "label": "Administrativos",
      "title": "Ruta para administrativos",
      "headline": "Incorpora la IA en tareas administrativas cotidianas",
      "description": "Explora usos prácticos de la inteligencia artificial para apoyar la gestión de información, la comunicación y otras tareas administrativas.",
      "accent": "administrativos",
      "sessions": [
        "general-1",
        "general-2",
        "administrativos-1",
        "administrativos-2",
        "administrativos-3"
      ]
    },
    "estudiantes": {
      "label": "Estudiantes",
      "title": "Ruta para estudiantes",
      "headline": "Usa la IA como apoyo para aprender y trabajar mejor",
      "description": "Recorre una sesión general y dos sesiones específicas orientadas al aprendizaje y al trabajo académico con inteligencia artificial.",
      "accent": "estudiantes",
      "sessions": [
        "estudiantes-general",
        "estudiantes-1",
        "estudiantes-2"
      ]
    }
  }
};
