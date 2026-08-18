import{j as e}from"./index-Bn9gOaZG.js";import{L as a}from"./LegalDocumentPage-0sfOO_IQ.js";import"./BlogPostMarkdown-D-p1KHEh.js";import"./index-DgS_UNEg.js";const n=`# Política de Cookies y Almacenamiento Local de Copero

**Última actualización:** 28 de julio de 2026

Esta política explica qué cookies y tecnologías de almacenamiento utiliza Copero, para qué sirven y cómo puede administrarlas el usuario.

## 1. Tecnologías utilizadas

Las cookies son pequeños archivos que un sitio guarda en el navegador. \`localStorage\` y \`sessionStorage\` permiten conservar preferencias o estados funcionales en el dispositivo. Copero separa estas tecnologías entre necesarias para prestar el servicio y analíticas opcionales.

## 2. Cookies y almacenamiento necesarios

Estas tecnologías no se desactivan desde el banner porque sostienen funciones solicitadas por el usuario, seguridad o preferencias básicas:

### 2.1 Cookie técnica de sesión

- **Finalidad:** mantener y renovar de forma segura una sesión autenticada.
- **Tipo:** técnica y necesaria.
- **Atributos:** \`HttpOnly\`, \`SameSite=Strict\` y \`Secure\` en producción.
- **Duración:** hasta aproximadamente 7 días, salvo cierre de sesión, revocación o vencimiento anticipado.

### 2.2 \`localStorage\`

Puede almacenar preferencias de interfaz, continuidad de sesión y la preferencia de consentimiento.

### 2.3 \`sessionStorage\`

Puede almacenar estados temporales de autenticación, preferencias y estados de la experiencia. Normalmente se elimina al cerrar la pestaña o sesión del navegador.

## 3. Google Analytics

Con aceptación, Copero utiliza Google Analytics 4 para conocer de forma agregada cómo se navega y utiliza la plataforma. Puede medir páginas vistas, sesiones, navegador, dispositivo, ubicación aproximada y eventos como la finalización de un minijuego.

Google Analytics puede crear cookies propias del dominio:

- **\`_ga\`:** distingue navegadores o usuarios y tiene una duración predeterminada de hasta 2 años.
- **\`_ga_<identificador>\`:** conserva el estado de una sesión y tiene una duración predeterminada de hasta 2 años.

La duración efectiva puede variar por configuración, navegador, eliminación manual o revocación del consentimiento.

## 4. Consent Mode avanzado

Antes de que el usuario elija, Copero configura como denegados el almacenamiento analítico y todos los permisos relacionados con publicidad. La etiqueta de Google puede cargarse con ese estado y enviar mediciones limitadas sin cookies ni identificadores persistentes.

Si el usuario acepta, se habilita \`analytics_storage\` y Google Analytics puede crear sus cookies. Si rechaza, esas cookies permanecen deshabilitadas y las mediciones se limitan a señales agregadas sin cookies. Copero mantiene siempre denegados \`ad_storage\`, \`ad_user_data\` y \`ad_personalization\` mientras no exista una implementación publicitaria activa.

La tasa de aceptación o rechazo obtenida mediante estas señales es orientativa y modelada; no constituye un registro individual exacto ni auditable de cada visitante.

## 5. Cómo administrar la elección

En la primera visita se muestra un banner inferior con las opciones “Rechazar analítica” y “Aceptar analítica”. No elegir equivale a mantener denegada la analítica opcional y no impide navegar por el sitio.

La decisión puede modificarse desde “Configurar cookies” en el pie de página. Al revocar una aceptación, Copero actualiza el estado de consentimiento e intenta eliminar las cookies \`_ga\` y \`_ga_*\` creadas para su dominio.

El usuario también puede eliminar o bloquear almacenamiento desde la configuración del navegador. Borrar la cookie de sesión cerrará la sesión persistente y borrar almacenamiento funcional puede restablecer preferencias o progreso local.

## 6. Tecnologías no utilizadas actualmente

Copero no utiliza actualmente cookies de publicidad conductual, remarketing ni perfilado comercial intersitio. Tampoco sirve anuncios en la implementación actual.

Si se incorporan tecnologías publicitarias o nuevos proveedores, esta política y el mecanismo de consentimiento deberán actualizarse antes o al momento de su activación.

## 7. Cambios a esta política

Copero puede actualizar esta política cuando cambien sus tecnologías, proveedores o finalidades. La fecha de última actualización identifica la versión vigente.

## 8. Contacto

Las consultas sobre cookies, almacenamiento o consentimiento deben enviarse a **coperoweb@gmail.com**.
`;function t(){return e.jsx(a,{title:"Política de Cookies y Almacenamiento Local",summary:"Qué tecnologías de almacenamiento utiliza Copero, para qué se usan y cómo impactan en la experiencia.",content:n})}export{t as default};
