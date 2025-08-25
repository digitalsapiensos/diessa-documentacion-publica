---
sidebar_position: 1
---

# Línea Temporal del Proyecto

Evolución cronológica detallada del proyecto DIESSA "Administración con IA" con registro de comunicaciones, reuniones y pruebas técnicas.

## Mayo 2025 - Inicio del Proyecto

### 15 Mayo 2025 - Arranque del Proyecto
**Actor**: Higini Moré (GSC)  
**Medio**: Email enviado a las 21:04  
**Destinatarios**: Andrés Escribano (ARES) + CC: Juan Olayo, Miguel Moreta, Olga Manzano, Fernando López, Valentín Ayesa

Higini envía email formal solicitando información técnica para iniciar el proyecto:
- Documentación API OData de Navision
- Acceso a entorno Sandbox para pruebas
- Contacto técnico directo en ARES
- Especificaciones de autenticación y límites de API

**Documento adjunto**: <a href="/assets/DIESSA-Integracion-API-Navision.pdf" target="_blank" rel="noopener noreferrer">📄 DIESSA - Integración API Navision.pdf</a>

### 23 Mayo 2025 - Infraestructura y Conectividad
**Actor**: Higini Moré (GSC)  
**Medio**: Email "GSC | Status Semana 2"  
**Acciones realizadas por GSC**:
- VPS contratado y configurado
- Conectividad con Navision verificada exitosamente
- Solicitud de sandbox pendiente de respuesta ARES

### 25 Mayo 2025 - Confirmación Gerencia
**Actor**: Miguel Moreta (Gerente DIESSA)  
**Medio**: Email respuesta a las 01:11  
**Acción**: Confirma recepción del status con emoji 👌

### 27 Mayo 2025 - Preparación Entorno IA
**Actor**: Fernando López (DIESSA)  
**Medio**: Email a las 19:10  
**Destinatarios**: Paco y Antonio (Inforshop)  
**Acciones solicitadas**:
- Crear cuenta de correo iadiessa@diessa.es
- Habilitar carpeta en servidor "IA Diessa"
- Proveer rutas de acceso para desarrolladores GSC

### 30 Mayo 2025 - Coordinación Técnica
**Actor**: Juan Olayo (DIESSA)  
**Medio**: Email "Tema instalación navision local"  
**Acción**: Miguel Moreta insiste en incluir a Olga Manzano en todas las comunicaciones técnicas

## Junio 2025 - Primeras Reuniones y Diferencias

### 3 Junio 2025 - Reunión Técnica APIs
**Medio**: Reunión Teams - 27 minutos  
**Participantes**: Fernando López, Olga Manzano (DIESSA), Higini Moré, Valentín Ayesa (GSC), Andrés Escribano (ARES)  
**Grabación**: Disponible en Fathom

**Acciones y compromisos ARES (Andrés)**:
- Confirma tener 4 web services preparados (cabeceras/líneas venta y compra)
- Reconoce necesitar "cambiar una serie de cosas" para habilitar pruebas
- Compromete "durante esta semana deberíamos tenerlo"
- Advierte: NO tocar producción hasta validación completa

**Decisiones tomadas**:
- GSC comenzará con solo lectura de datos
- Foco inicial en cruce facturas/albaranes (80% tiempo Olga)
- Empezar con proveedores nacionales (menos complejidad)

## Julio 2025 - Crisis y Punto de Inflexión

### 11 Julio 2025 - Detección del Problema
**Actor**: Fernando López (DIESSA)  
**Medio**: Email a las 13:45  
**Asunto**: "Reunión de todo el equipo para seguimiento"

Fernando identifica: "Navision e IA no se están llevando demasiado bien"  
Convoca reunión urgente y solicita disponibilidad para semana siguiente

### 11 Julio 2025 - Insistencia en Inclusión ARES
**Actor**: Fernando López  
**Medio**: Email a las 16:36  
**Mensaje clave**: "Si no va Andrés, la reunión perderá todo el sentido"

### 14 Julio 2025 - Informe de Estado Crítico
**Actor**: Higini Moré (GSC)  
**Medio**: Email "Informe de Situación - Proyecto Administración con IA"  
**Documento**: Informe formal detallando bloqueos

**Bloqueos documentados**:
1. Entorno de pruebas sin habilitar tras 6 semanas
2. Sin documentación técnica API completa
3. Sin datos de prueba en entorno sandbox
4. Imposibilidad de avanzar con desarrollo

### 16 Julio 2025 - Comunicación Gerencial
**Actor**: Miguel Moreta (Gerente DIESSA)  
**Medio**: Email a las 20:15  
**Asunto**: "Re: Invitación: DIESSA: Alineación AI vie 18 de jul"

**Contenido crítico**:
- Confirma "práctica paralización del desarrollo"
- Identifica "necesidad de alineación en metodologías y procesos"
- Advierte: "proyecto en riesgo real de no continuar"
- Establece que reunión 18 julio debe resolver o cancelar

### 18 Julio 2025 - Reunión Crítica de Alineación
**Medio**: Reunión presencial/Teams a las 9:00  
**Participantes**: Todos los stakeholders confirmados  
**Resultado**: Punto de inflexión - alineación estratégica y compromisos concretos

## Julio-Agosto 2025 - Cambio y Colaboración

### 23 Julio 2025 - Inicio Documentación Compartida
**Actor**: Valentín Ayesa (GSC)  
**Medio**: Email a Pablo Caballero  
**Acción**: Comparte primera documentación técnica con ARES post-reunión

### 28 Julio 2025 - Documentación ODATA ARES
**Actor**: Andrés Escribano (ARES)  
**Medio**: Email con documentación técnica
**Destinatario**: Valentín Ayesa (GSC)

**Documentación compartida**:
- Especificación endpoints ODATA para facturación de compras
- URLs base para entornos de pruebas y producción
- Esquema de autenticación y permisos
- Estructura de datos de los endpoints principales:
  - `ODATA_Cab_Borrador_Fra_Compra` (Cabeceras borradores facturas)
  - `ODATA_Lin_Borrador_Fra_Compra` (Líneas borradores facturas)
  - `ODATA_Lin_Albaran_Compra` (Líneas albaranes compra)
  - `ODATA_Cab_Fra_Compra` (Cabeceras facturas registradas)

### 28 Julio 2025 - Primera Prueba Técnica
**Actor**: Valentín Ayesa (GSC)  
**Medio**: Email a las 16:18  
**Asunto**: "Re: Diessa - ODATA pruebas"  
**Destinatario**: Andrés Escribano (ARES)

**Pruebas realizadas**:
- Test endpoint: https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39_PRUEBAS/ODataV4/$metadata
- Resultado: Endpoints no funcionan correctamente
- Incluye captura de pantalla del error

**URLs técnicas proporcionadas por ARES**:
- URL Base pruebas: `https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39_PRUEBAS/ODataV4/$metadata`
- URL Base producción: `https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39/ODataV4/$metadata`

### 29 Julio 2025 - Resolución Técnica Rápida
**Actor**: Andrés Escribano (ARES)  
**Medio**: Diálogo email con Valentín  
**Acciones**:
- Andrés aclara problemas de permisos y configuración
- Proporciona soluciones específicas
- Diálogo técnico fluido establecido

### 30 Julio 2025 - Provisión Datos de Prueba
**Actor**: Juan Olayo (DIESSA)  
**Medio**: Email "Olga - ejemplos para Valentín"  
**Acción**: Coordina con Olga para proveer datos reales de prueba a GSC

### 4 Agosto 2025 - Identificación Nueva Necesidad
**Actor**: Valentín Ayesa (GSC)  
**Medio**: Email a las 09:08  
**Asunto**: "Re: Diessa - ODATA pruebas"

**Problema detectado**:
- Tablas vacías en entorno de pruebas
- Imposibilidad de crear borradores sin datos
- Solicitud específica de datos para poder avanzar

**Juan Olayo mismo día**: Convoca UAT sistema desplegado

### 7 Agosto 2025 - Descubrimiento Campo Crítico
**Actor**: Olga Manzano (DIESSA)  
**Medio**: Email "Consulta sobre proceso de compras"  
**Destinatario**: Andrés Escribano (ARES)

**Contenido técnico**:
- Identifica necesidad campo "Nº albarán proveedor"
- Explica imposibilidad matching sin este campo
- Adjunta 3 imágenes del proceso en Navision
- Solicita endpoints referencias cruzadas

### 8 Agosto 2025 - Respuesta Técnica Detallada
**Actor**: Andrés Escribano (ARES)  
**Medio**: Email marcado [AE]  
**Acciones**:
- Analiza petición de Olga
- Propone 2 opciones técnicas de implementación
- Explica viabilidad endpoints referencias cruzadas

### 11 Agosto 2025 - Coordinación Durante Vacaciones
**Actor**: Juan Olayo (DIESSA)  
**Medio**: Email a Andrés  
**Contexto**: Olga de vacaciones  
**Acción**: Juan mantiene momentum solicitando implementación cambios

### 12 Agosto 2025 - Implementación Solución
**Actor**: Andrés Escribano (ARES)  
**Medio**: Email "Ya tenéis los cambios hechos"  
**Hora**: 14:06  
**Adjunto**: "ODATA para facturación de compras - SD 253091 - rev1.1.pdf"

**Cambios implementados**:
- ✅ Añadida columna "Nº albarán proveedor" en endpoint `ODATA_Lin_Albaran_Compra`
- ✅ Creados 3 endpoints referencias cruzadas:
  - `ODATA_RefCruz_Productos_C`
  - `ODATA_RefCruz_Productos_M`
  - `ODATA_RefCruz_Productos_K`
- ✅ Documentación técnica actualizada y enviada
- ✅ Solución completa en 5 días desde petición

**Documento técnico adjunto**: <a href="/assets/ODATA-facturacion-compras-SD253091-rev1.1.pdf" target="_blank" rel="noopener noreferrer">📄 ODATA para facturación de compras - SD 253091 - rev1.1.pdf</a>

### 21 Agosto 2025 - Análisis del Avance
**Medio**: Reunión técnica GSC (Valentín + Higini)  
**Descubrimiento**: Campo [Nº albarán proveedor] resuelve problema de 196 variaciones formato

**Análisis técnico realizado**:
- Revisión de datos proveedor PR001147
- Identificación de 196 variaciones en formato albaranes
- Confirmación que nuevo campo normaliza todas las variaciones
- Proyecto pasa de crítico a viable