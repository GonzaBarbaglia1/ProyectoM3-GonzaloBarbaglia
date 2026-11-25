
# CharacterAI — Documentación técnica

**Proyecto Integrador M3 | Henry — CH80**  
**Autor:** Gonzalo Barbaglia.

## 1. Descripción del proyecto

CharacterAI es una aplicación web que permite conversar con personajes ficticios mediante inteligencia artificial.

La temática está inspirada en la serie argentina Casados con Hijos, incluyendo a Pepe, Moni, Coqui y Paola Argento.

Cada personaje cuenta con su propia personalidad, saludo inicial e historial de conversación independiente.

## 2. Funcionalidades

- Galería dinámica de personajes.
- Chat integrado con Google Gemini.
- System prompts personalizados.
- Historial independiente por personaje.
- Indicadores de carga y escritura.
- Manejo de errores y reintentos.
- Navegación SPA mediante History API.
- Vista personalizada para rutas inexistentes.
- Diseño responsive con metodología Mobile First.

## 3. Tecnologías utilizadas

- HTML5, CSS3 y JavaScript (ES Modules).
- Fetch API y History API.
- Google Gemini API.
- Node.js y Vercel.
- Vitest.
- Git y GitHub.

## 4. Instalación y ejecución local

### Clonar el repositorio

```bash
git clone https://github.com/GonzaBarbaglia1/ProyectoM3-GonzaloBarbaglia.git
cd ProyectoM3-GonzaloBarbaglia
```

### Instalar dependencias

```bash
npm ci
```

### Instalar Vercel CLI

```bash
npm install -g vercel
```

### Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto utilizando `.env.example` como referencia.

```env
GEMINI_API_KEY=tu_api_key_aqui
```

### Ejecutar la aplicación

```bash
vercel dev
```

Ingresar a http://localhost:3000 o a la dirección indicada por la terminal.

Se utiliza Vercel Dev para ejecutar el frontend y la función serverless.

## 5. Arquitectura del proyecto

```text
ProyectoM3-GonzaloBarbaglia/
├── api/                 # Función serverless
├── assets/images/       # Recursos visuales
├── src/
│   ├── services/        # Servicios, personajes y prompts
│   ├── transform/       # Procesamiento de datos
│   ├── ui/              # Utilidades de interfaz
│   ├── views/           # Vistas de la aplicación
│   ├── main.js          # Inicialización
│   ├── navigation.js    # Navegación
│   ├── router.js        # Gestión de rutas
│   └── styles.css       # Estilos responsive
├── tests/               # Pruebas automatizadas
├── documentacion/       # Documentación técnica y académica
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

## 6. Funcionamiento de la aplicación

El usuario selecciona un personaje y envía un mensaje. La aplicación prepara el historial y el system prompt correspondiente, realiza una solicitud al endpoint `/api/chat` y procesa la respuesta de Gemini.

El chat utiliza tres estados: `idle`, `loading` y `error`.

Ante un error HTTP 429, se realiza un reintento automático con cuenta regresiva. También existe la posibilidad de reintentar manualmente.

### Optimización de tokens

- Historial enviado a Gemini: últimos 12 mensajes.
- Máximo de tokens de salida: 200.
- Temperatura: 0.9.

Se decidió limitar el contexto enviado para reducir el consumo de tokens. El historial visual se conserva durante la sesión, pero no persiste después de recargar la página.

### Navegación SPA

| Ruta | Vista |
|---|---|
| `/` o `/home` | Galería de personajes |
| `/chat` | Chat |
| `/about` | Información del proyecto |
| Ruta inexistente | Not Found |

La selección del personaje se realiza mediante parámetros de URL.

Ejemplo: `/chat?character=pepe`.

## 7. Diseño responsive

Se priorizó la experiencia desde dispositivos móviles utilizando Flexbox, CSS Grid, media queries y unidades relativas.

| Dispositivo | Distribución |
|---|---|
| Mobile | 1 columna |
| Tablet (768 px) | 2 columnas |
| Desktop (1024 px) | 4 columnas |

La identidad visual está inspirada en la ambientación de la casa de la familia Argento.

## 8. Testing

Las pruebas automatizadas se realizan mediante Vitest.

```bash
npm test
```

Para ejecutar los tests una sola vez:

```bash
npm test -- --run
```

| Archivo | Tests aprobados |
|---|---|
| aiClient.test.js | 2 |
| chatPayload.test.js | 5 |
| Total | 7 |

Resultados correspondientes a la última ejecución verificada.

Se utiliza un mock de Gemini para realizar pruebas sin depender del servicio externo.

## 9. Seguridad y despliegue

La API key se administra mediante variables de entorno y se utiliza desde la función serverless, evitando exponerla al navegador.

El archivo `.gitignore` excluye las credenciales privadas, las dependencias y los archivos locales de Vercel.

Para desplegar en producción:

```bash
vercel --prod
```

La variable `GEMINI_API_KEY` debe estar configurada en Vercel.

- [Aplicación web](https://proyecto-m3-gonzalo-barbaglia.vercel.app/)
- [Repositorio GitHub](https://github.com/GonzaBarbaglia1/ProyectoM3-GonzaloBarbaglia)

## 10. Uso de inteligencia artificial

Durante el desarrollo se utilizó ChatGPT como herramienta de aprendizaje, asistencia técnica, generación y modificación de código, revisión y resolución de errores.

La documentación del proceso se encuentra disponible en:

- [Guía de aprendizaje](../uso-ia/GUIA-DE-APRENDIZAJE.md).
- [Prompts utilizados](../uso-ia/PROMPTS-UTILIZADOS.md).

---

Proyecto desarrollado con fines educativos.

Gonzalo Barbaglia | Henry — CH80.
