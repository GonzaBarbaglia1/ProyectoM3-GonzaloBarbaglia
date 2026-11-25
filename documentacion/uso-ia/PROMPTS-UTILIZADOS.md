
# Registro de prompts y asistencia de IA

**Autor:** Gonzalo Barbaglia  
**Henry — CH80 | Módulo 3**

## 1. Introducción

Durante el desarrollo de CharacterAI utilicé ChatGPT como herramienta de asistencia técnica y aprendizaje.

Los siguientes prompts son reconstrucciones representativas de las consultas realizadas durante el desarrollo. No constituyen una transcripción literal ni completa de las conversaciones.

## 2. Prompts utilizados

### Prompt 01 — Metodología de aprendizaje

**Consulta:**

> Necesito que me expliques el código paso a paso, teniendo en cuenta que soy un desarrollador junior. Prefiero comprender cada función antes de continuar con la siguiente.

**Asistencia recibida:** explicaciones detalladas de funciones, variables, parámetros, métodos y estructuras de JavaScript.

**Aplicación:** desarrollo incremental y comprobación de cada funcionalidad.

### Prompt 02 — Arquitectura modular

**Consulta:**

> ¿Cómo podemos organizar los archivos para que cada uno tenga una responsabilidad específica y el código sea más fácil de mantener?

**Asistencia recibida:** propuestas de organización mediante servicios, vistas, transformaciones y utilidades.

**Aplicación:** separación de responsabilidades e implementación de ES Modules.

### Prompt 03 — Programación asíncrona

**Consulta:**

> Explicame cómo funcionan async, await, try y catch dentro de una solicitud a una API y qué sucede en cada línea.

**Asistencia recibida:** explicación del flujo asíncrono, las promesas y el manejo de errores.

**Aplicación:** comunicación entre el chat y el servicio de inteligencia artificial.

### Prompt 04 — Integración con Gemini

**Consulta:**

> ¿Cómo podemos enviar los mensajes a Gemini y procesar la respuesta para mostrarla dentro del chat?

**Asistencia recibida:** propuestas de código para construir el payload, realizar solicitudes y normalizar las respuestas.

**Aplicación:** implementación de aiClient.js y chatPayload.js.

### Prompt 05 — Optimización de tokens

**Consulta:**

> Quiero mantener la función que limita el historial de conversación para reducir el consumo de tokens. ¿Cómo podemos conservarla?

**Asistencia recibida:** explicación del recorte de mensajes y sus consecuencias sobre el contexto de la conversación.

**Aplicación:** envío de los últimos 12 mensajes a Gemini mediante getTrimmedHistory().

### Prompt 06 — Manejo de errores

**Consulta:**

> ¿Cómo podemos controlar el error 429 y hacer que la aplicación espere antes de volver a intentar la solicitud?

**Asistencia recibida:** propuestas de implementación de reintentos, tiempos de espera y estados de carga.

**Aplicación:** cuenta regresiva, reintento automático y opción de reintento manual.

### Prompt 07 — Personalidades de los personajes

**Consulta:**

> Quiero adaptar la aplicación a Casados con Hijos y que cada integrante de la familia Argento tenga su propia personalidad y forma de expresarse.

**Asistencia recibida:** colaboración en la construcción de system prompts, saludos iniciales y características individuales.

**Aplicación:** incorporación de Pepe, Moni, Coqui y Paola Argento.

### Prompt 08 — Conversaciones independientes

**Consulta:**

> ¿Cómo podemos hacer para que cada personaje conserve su propia conversación sin mezclar los mensajes con los demás?

**Asistencia recibida:** explicación y propuesta de una estructura de estados independientes identificados por el ID de cada personaje.

**Aplicación:** implementación de chatStates y gestión individual de conversaciones.

### Prompt 09 — Navegación SPA

**Consulta:**

> Explicame cómo funciona la navegación sin recargar la página y cómo podemos solucionar los errores al ingresar directamente a una ruta.

**Asistencia recibida:** explicación de History API, pushState, popstate, parámetros de URL y reglas de redireccionamiento.

**Aplicación:** configuración del router, navegación y vercel.json.

### Prompt 10 — Diseño Mobile First

**Consulta:**

> Quiero que prioricemos siempre la experiencia desde el celular y después adaptemos el diseño a tablet y computadora.

**Asistencia recibida:** propuestas y modificaciones de CSS mediante Flexbox, Grid, media queries y unidades relativas.

**Aplicación:** diseño responsive de la galería y de la interfaz del chat.

### Prompt 11 — Testing

**Consulta:**

> Antes de eliminar archivos o modificar funciones, quiero comprobar que no afectemos los tests que ya funcionan.

**Asistencia recibida:** revisión de dependencias entre módulos, explicación de mocks y ejecución de pruebas.

**Aplicación:** conservación de mockGeminiApi.js y verificación de los tests automatizados.

### Prompt 12 — Seguridad

**Consulta:**

> ¿Cómo puedo comprobar que mi API key y los archivos privados no se estén subiendo a GitHub?

**Asistencia recibida:** explicación de variables de entorno, gitignore y comandos de verificación de archivos rastreados por Git.

**Aplicación:** protección de credenciales y exclusión de archivos locales de Vercel.

### Prompt 13 — Control de versiones

**Consulta:**

> Quiero registrar los avances mediante commits descriptivos en español y comprobar los cambios antes de continuar.

**Asistencia recibida:** orientación sobre comandos de Git y propuestas de mensajes descriptivos.

**Aplicación:** registro incremental de funcionalidades, correcciones y mejoras.

### Prompt 14 — Documentación y despliegue

**Consulta:**

> ¿Cómo podemos organizar la documentación para que otra persona pueda instalar, ejecutar y desplegar el proyecto desde su computadora?

**Asistencia recibida:** propuestas de estructura, instrucciones de instalación, configuración de variables de entorno y despliegue.

**Aplicación:** creación del README principal y del README técnico.

## 3. System prompts de la aplicación

Los system prompts utilizados por Gemini se encuentran en:

[src/services/prompts.js](../../src/services/prompts.js)

Estos definen la personalidad, el vocabulario, las expresiones y el comportamiento de cada personaje.

Se trabajó sobre ellos de manera colaborativa, incorporando características y expresiones representativas de la familia Argento.

## 4. Alcance de la asistencia

La inteligencia artificial proporcionó explicaciones, propuestas de implementación, generación y modificación de código, revisión de funciones y asistencia en la resolución de errores.

Las propuestas fueron incorporadas y comprobadas progresivamente durante el desarrollo.

Se priorizó una metodología de aprendizaje adaptada a mi nivel de desarrollador junior.

## 5. Conclusión

El uso de inteligencia artificial acompañó el proceso de desarrollo y aprendizaje, permitiéndome consultar dudas, comprender conceptos y evaluar diferentes soluciones técnicas.

La documentación complementaria se encuentra en:

[Guía de aprendizaje](./GUIA-DE-APRENDIZAJE.md)
