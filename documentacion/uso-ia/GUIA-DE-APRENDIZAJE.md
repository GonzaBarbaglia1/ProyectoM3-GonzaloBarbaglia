
# Guía de aprendizaje y asistencia de IA

**Autor:** Gonzalo Barbaglia  
**Henry — CH80 | Módulo 3**

## 1. Introducción

Durante el desarrollo del Proyecto Integrador del Módulo 3 utilicé ChatGPT como herramienta de asistencia técnica y aprendizaje.

Mi objetivo fue desarrollar una aplicación funcional y, al mismo tiempo, comprender los conceptos de programación utilizados durante su implementación.

## 2. Metodología de trabajo

El desarrollo se realizó de manera progresiva:

1. Identificar la funcionalidad a implementar.
2. Consultar posibles soluciones.
3. Analizar el código propuesto.
4. Solicitar explicaciones de las funciones y líneas de código.
5. Implementar los cambios en Visual Studio Code.
6. Comprobar su funcionamiento.
7. Corregir posibles errores.
8. Registrar los avances mediante commits descriptivos.

Solicité que las explicaciones fueran adaptadas a mi nivel de desarrollador junior, evitando avanzar sobre nuevas funcionalidades sin comprender las anteriores.

## 3. Conceptos trabajados

### JavaScript y arquitectura modular

Aprendí a organizar el código en archivos con responsabilidades específicas, utilizando importaciones y exportaciones.

Trabajamos con funciones, objetos, arrays, parámetros, métodos y manipulación del DOM.

La IA me ayudó a comprender la finalidad de los módulos y cómo se relacionan entre sí.

### Programación asíncrona

Trabajamos con los siguientes conceptos:

- async y await.
- Promesas.
- Fetch API.
- try y catch.
- Manejo de errores HTTP.

La asistencia consistió en explicar el flujo de las solicitudes, desde el envío de un mensaje hasta la recepción de la respuesta.

### Integración con Google Gemini

Trabajamos sobre la construcción del payload, los system prompts, el historial de conversación y la normalización de las respuestas.

Aprendí a diferenciar las responsabilidades del frontend y del servidor, comprendiendo por qué la API key debe permanecer protegida.

### Gestión de estados

Comprendí la utilidad de los estados idle, loading y error para controlar el comportamiento de la interfaz.

También trabajamos con objetos independientes para conservar las conversaciones de cada personaje.

### Navegación SPA

La IA me ayudó a comprender el funcionamiento de:

- history.pushState().
- Evento popstate.
- Intercepción de enlaces.
- Parámetros de URL.
- Renderizado dinámico de vistas.

También trabajamos sobre el acceso directo a las rutas y la gestión de páginas inexistentes.

### Diseño responsive

Se trabajó siguiendo la metodología Mobile First.

Aprendí a utilizar Flexbox, CSS Grid, media queries y unidades relativas para adaptar la interfaz a diferentes dispositivos.

Solicité priorizar especialmente la experiencia desde celulares.

### Testing

Trabajamos con Vitest para comprobar el comportamiento de distintas funciones.

Aprendí la importancia de conservar los tests existentes al modificar funcionalidades y de utilizar mocks para evitar depender de servicios externos durante las pruebas.

### Git y GitHub

Durante el desarrollo registré los avances mediante commits descriptivos en español.

La IA me ayudó a interpretar los resultados de git status, gestionar archivos y verificar qué información estaba siendo incluida en el repositorio.

### Seguridad y despliegue

Trabajamos sobre la protección de variables de entorno, la configuración de .gitignore y la integración con Vercel.

Comprendí la diferencia entre ejecutar una página estática y ejecutar una aplicación que necesita funciones serverless.

## 4. Decisiones tomadas durante el desarrollo

- Adaptar la temática original a Casados con Hijos.
- Incorporar cuatro personajes con personalidades diferentes.
- Mantener conversaciones independientes.
- Priorizar el diseño Mobile First.
- Limitar el historial enviado a Gemini a 12 mensajes para reducir el consumo de tokens.
- Conservar los mocks utilizados por los tests.
- Registrar los avances mediante commits en español.
- Separar la documentación técnica de la documentación de aprendizaje.

## 5. Alcance de la asistencia de inteligencia artificial

ChatGPT participó activamente durante el desarrollo mediante:

- Explicaciones de conceptos y líneas de código.
- Propuestas de implementación.
- Generación y modificación de fragmentos de código.
- Revisión de funciones existentes.
- Identificación y resolución de errores.
- Propuestas de diseño y arquitectura.
- Asistencia en testing, seguridad y despliegue.
- Redacción y organización de la documentación.

La asistencia no se limitó a responder consultas teóricas, sino que también incluyó propuestas directas de código que fueron incorporadas al proyecto.

Mi participación consistió en implementar, revisar, probar y registrar los cambios, además de tomar decisiones sobre las funcionalidades y el diseño.

## 6. Reflexión personal

Este proyecto me permitió relacionar los conceptos estudiados durante el módulo con el desarrollo de una aplicación real.

La metodología de trabajo incremental me ayudó a comprender mejor la estructura del código, detectar errores y evaluar las consecuencias de cada modificación.

Considero que la inteligencia artificial es una herramienta útil para acompañar mi formación como desarrollador, siempre que su utilización esté acompañada de revisión, práctica y comprensión del código.

## 7. Registro de prompts

Los ejemplos de consultas realizadas durante el desarrollo se encuentran en:

[Prompts utilizados](./PROMPTS-UTILIZADOS.md)
