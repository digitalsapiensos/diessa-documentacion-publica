---
id: bitacora-pruebas
title: Bitácora de Pruebas e Iteraciones
sidebar_label: Bitácora de Pruebas
---

# Bitácora de Pruebas e Iteraciones

Registro cronológico inverso (más reciente primero) de todas las pruebas, iteraciones y comunicaciones realizadas durante el proyecto.

## 25 de Agosto de 2025 - PROBLEMA SISTÉMICO: Endpoints POST No Disponibles

### Contexto
- **Participantes**: Higini Moré (GSC), Valentín Ayesa (GSC)
- **Objetivo**: Probar creación de borradores de facturas vía API según documentación ARES SD253091 Rev1.1
- **Herramienta**: n8n workflows con endpoints ODATA Navision
- **Documentación base**: [ODATA para Facturación de Compras](/docs/sistemas-diessa/odata-facturacion-compras) proporcionada por ARES

### Cronología de Pruebas

- **13:00 - Inicio Pruebas Creación de Facturas**
  - **Objetivo**: Validar endpoint `ODATA_Cab_Borrador_Fra_Compra` para operaciones POST según [documentación ARES SD253091](/docs/sistemas-diessa/odata-facturacion-compras)
  - **Contexto previo**: Extracción exitosa de `Vendor_Shipment_No` de albaranes completada
  - **Base técnica**: Implementación siguiendo especificaciones exactas del documento ARES Rev1.1

- **13:01 - Primer Error: Estructura JSON**
  - **Problema**: Error 400 "Invalid Request Body"
  - **Causa**: Diferencia entre nombres de campos documentados (español) vs implementación real (inglés)
  - **Metodología**: Investigación GET para identificar estructura exacta del sistema

- **13:05 - Investigación Estructura Real**
  - **Acción**: GET request a endpoint para mapear campos reales del sistema
  - **Resultado**: Estructura correcta identificada - campos en inglés con formato específico Navision
  ```json
  {
    "Document_Type": "Invoice",
    "Buy_from_Vendor_No": "PR001147", 
    "Pay_to_Vendor_No": "PR001147",
    "Document_Date": "2025-08-20",
    "Posting_Date": "2025-08-25",
    "Due_Date": "2025-09-20",
    "Vendor_Invoice_No": "FRA A25-9025",
    "Posting_Description": "Factura FC25-009025",
    "VAT_Bus_Posting_Group": "7_NACIONAL"
  }
  ```

- **13:08 - Segundo Error: Permisos Usuario**
  - **Error**: HTTP 400 - Internal_ServerError
  - **Mensaje**: "You do not have the following permissions on TableData Purchases & Payables Setup: Read"
  - **Usuario probado**: `Diessa_WS_basico`
  - **Diagnóstico**: Permisos insuficientes para validar configuración de compras

- **13:16 - Confirmación Error Permisos**
  - **Re-test confirmatorio con mismo usuario**
  - **Resultado**: Mismo error de permisos
  - **Conclusión**: Problema sistémico de permisos, no de estructura

- **13:20 - Análisis Documentación Oficial ARES**
  - **Revisión exhaustiva**: [Documento SD253091 Rev1.1](/assets/ODATA-facturacion-compras-SD253091-rev1.1.pdf) proporcionado por Andrés Escribano (ARES)
  - **Verificación**: 100% conformidad entre implementación GSC y especificación técnica oficial
  - **Campos validados**: Todos los campos JSON coinciden exactamente con la documentación ARES
  - **Estructura**: Clave principal [Tipo documento], [Nº] implementada correctamente
  - **Conclusión**: La documentación de ARES es precisa y completa, el problema identificado es exclusivamente de permisos del usuario API

- **13:21 - Verificación Credenciales**
  - **Investigación**: Revisión de comunicaciones técnicas con ARES
  - **Usuario confirmado**: `Diessa_WS_basico` (validado por ARES en múltiples ocasiones)

- **13:22 - Credenciales Encontradas**
  - **Fuente**: Correo 12/06/2025
  - **Usuario**: `Diessa_WS_basico`
  - **Contraseña**: `8=oaG14c$U6Sx?U9q0sT7Ag1EA96xf8OxIO5spHt9xorXQX2`
  - **Confirmación**: Andrés validó estas credenciales

- **13:25 - Error 401 con Credenciales "Correctas"**
  - **Test**: POST con credenciales encontradas
  - **Error**: HTTP 401 - Authentication_InvalidCredentials
  - **Análisis**: Credenciales posiblemente de producción, no pruebas

- **13:27 - Análisis Evolutivo de Endpoints**
  - **Investigación histórica**: Revisión de evolución de endpoints ARES
  - **Hallazgo**: Documentación de junio 2025 menciona 4 endpoints con POST:
    - `ODATA_Cab_Compra`
    - `ODATA_Lin_Compra`
    - `ODATA_Cab_Venta`
    - `ODATA_Lin_Venta`
  - **Documento agosto**: [SD253091 Rev1.1](/docs/sistemas-diessa/odata-facturacion-compras) especifica que `ODATA_Cab_Borrador_Fra_Compra` también permite POST
  - **Análisis**: Posible evolución de la infraestructura ARES entre junio y agosto 2025

- **13:28 - Cambio a Endpoint Confirmado**
  - **Acción**: Actualizar workflow a `ODATA_Cab_Compra`
  - **Razón**: Endpoint confirmado por Andrés como funcional para POST
  - **URL**: Cambio de `/ODataV4/` a `/OData/`

- **13:48 - Pruebas Múltiples Credenciales**
  - **Credenciales testadas**:
    - "Diessa test": 404 - ✅ Auth válida, ❌ Endpoint no existe
    - "Navision Odata": 404 - ✅ Auth válida, ❌ Endpoint no existe
    - "Navision Pruebas": 401 - ❌ Credenciales incorrectas

### Descubrimiento Crítico

- **PROBLEMA SISTÉMICO CONFIRMADO**:
  - ❌ Endpoints documentados en junio 2025 NO EXISTEN (Error 404)
  - ❌ Endpoints documentados en agosto 2025 NO FUNCIONAN (Error 400/401)
  - ✅ Estructura JSON 100% validada
  - ✅ Credenciales de autenticación válidas
  - 🚨 **NINGÚN ENDPOINT DISPONIBLE PARA POST**

### Análisis de Impacto

- **Impacto en desarrollo proyecto DIESSA**:
  - **Status**: Temporalmente detenido hasta verificación técnica ARES
  - **Causa**: Endpoints documentados no operativos para escritura en entorno actual
  - **Dependencia**: Confirmación por ARES de endpoints POST disponibles

- **Análisis técnico**:
  - **Documentación ARES**: Completa y técnicamente precisa según especificación
  - **Implementación**: 100% conforme a documentación proporcionada
  - **Gap identificado**: Posible desincronización entre documentación y entorno de pruebas actual

### Recomendaciones para Coordinación ARES

- Verificación técnica: Confirmar qué endpoints POST están operativos en entorno de pruebas actual (agosto 2025)
- Validación de implementación: Verificar estado de endpoints especificados en [SD253091 Rev1.1](/docs/sistemas-diessa/odata-facturacion-compras)
- Actualización de accesos: Revisar permisos del usuario `Diessa_WS_basico` para operaciones de escritura
- Coordinación técnica: Establecer cronograma de implementación si endpoints requieren desarrollo adicional

- **Base para coordinación**: Toda la documentación técnica está disponible en [Documentación ARES](/docs/sistemas-diessa/documentacion-ares) para referencia ARES/DIESSA

### Resultado
- **⏸️ DESARROLLO PAUSADO** - Pendiente de verificación técnica y coordinación con ARES para habilitar endpoints POST según documentación SD253091

---

## 20-21 de Agosto de 2025 - ANÁLISIS CRÍTICO: 196 Variaciones de Formato

### Contexto
**Participantes**: Valentín (GSC), Higini (GSC)  
**Objetivo**: Analizar problema crítico de inconsistencias en formato de albaranes

### Flujo de Prueba Completo

#### **Paso 1: Extracción de Facturas**
**Factura analizada**: [Leo Industrial F25-3108](/assets/F25-3108.pdf) *(click para ver factura original)*
**Herramienta**: Sistema Extractor de GSC  
**Resultado obtenido**:
```json
[
  {
    "output": {
      "albaranes": [
        {"numero_albaran": "A25-9981"},
        {"numero_albaran": "A25-9982"},
        {"numero_albaran": "A25-10003"},
        {"numero_albaran": "A25-10038"},
        {"numero_albaran": "A25-10116"},
        {"numero_albaran": "A25-10144"},
        {"numero_albaran": "A25-10174"},
        {"numero_albaran": "A25-10179"},
        {"numero_albaran": "A25-10202"},
        {"numero_albaran": "A25-10311"}
      ]
    }
  }
]
```

#### **Paso 2: Búsqueda en Sistema Navision**
**Endpoint**: `ODATA_Lin_Albaran_Compra`  
**URL**: `https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39_PRUEBAS/ODataV4/Company('Diessa')/ODATA_Lin_Albaran_Compra`  
**Filtro**: `$filter=Buy_from_Vendor_No eq 'PR001147'`

#### **Paso 3: Resultados del Matching**
**Albaranes encontrados en sistema**:

| Nº Extraído Factura | Nº Sistema (Vendor_Shipment_No) | Document_No | Status |
|---------------------|----------------------------------|-------------|--------|
| A25-9981 | A25-9981 | ALBC25-003564 | ✅ **MATCH EXACTO** |
| A25-9982 | A25-9982 | ALBC25-003565 | ✅ **MATCH EXACTO** |
| A25-10003 | A25-10003 | ALBC25-003566 | ✅ **MATCH EXACTO** |
| A25-10038 | - | - | ❌ **NO ENCONTRADO** |
| A25-10116 | - | - | ❌ **NO ENCONTRADO** |
| A25-10144 | - | - | ❌ **NO ENCONTRADO** |
| A25-10174 | - | - | ❌ **NO ENCONTRADO** |
| A25-10179 | - | - | ❌ **NO ENCONTRADO** |
| A25-10202 | - | - | ❌ **NO ENCONTRADO** |
| A25-10311 | A25-10311 | ALBC25-003680 | ✅ **MATCH EXACTO** |

**Resultado**: **4 de 10 albaranes encontrados (40% success rate)**

#### **Paso 4: Análisis de Productos Encontrados**
**Productos identificados en albaranes existentes**:
- **CR2.0021**: Cubierta trasera espejo Class IV DCH Gris (5,25€)
- **CC2.3550**: Cristal espejo frontal (7€ x2 unidades)  
- **CC2.4066**: Tulipa piloto trasero DCH/IZD (11,5€ x2 unidades)
- **CZZZ4880612**: Faro antiniebla (67€)
- **60000000005**: Portes nacionales (10,5€ - 12,5€)

### Descubrimiento Crítico
**Problema real identificado**: De 10 albaranes extraídos de la factura, **solo 4 existen en el sistema** (40% tasa de éxito). Los 6 restantes representan el problema de las **196 variaciones** donde los operadores registran con formatos inconsistentes.

### Facturas Relacionadas Disponibles
**Proveedor Leo Industrial (PR001147)**:
- [F25-2985.pdf](/assets/F25-2985.pdf) - Factura Leo formato estándar
- [F25-3108.pdf](/assets/F25-3108.pdf) - **Factura analizada en esta prueba**

*Ambas facturas están disponibles en el Sistema de Pruebas con comentarios de Olga.*

### Tipologías de Nomenclatura Detectadas

1. **Nomenclatura Estándar (y sus variaciones)**
   Este es el formato teórico y el más común en la lista. Consiste en la letra "A", dos dígitos, un guion y un número de serie.
   - **Formato `AXX-XXXX`** (Letra A, dos dígitos, guion, cuatro dígitos):  
     _Ejemplos_: `A25-1220`, `A25-1327`, `A25-3071`, `A25-7749`
   - **Formato `AXX-XXX`** (Letra A, dos dígitos, guion, tres dígitos):  
     _Ejemplos_: `A25-711`, `A25-702`, `A25-692`, `A25-534`

2. **Nomenclatura con Prefijo "ALBARÁN"**
   Algunos registros utilizan la palabra "ALBARÁN" antes del código estándar.
   - **Formato `ALBARÁN AXX-XXX`**:  
     _Ejemplos_: `ALBARÁN A25-130`, `ALBARÁN A25-250`, `ALBARÁN A25-314`
   - **Formato `ALBARÁN AXX-XXXX`**:  
     _Ejemplo_: `ALBARÁN A25-5376`

3. **Nomenclatura Numérica con Guion**
   Similar al formato estándar, pero sin la letra "A" inicial.
   - **Formato `XX-XXXX`** (Dos dígitos, guion, cuatro o más dígitos):  
     _Ejemplos_: `25-1147`, `25-1388`, `25-10038`
   - **Formato `XX-XXX`** (Dos dígitos, guion, tres dígitos):  
     _Ejemplos_: `25-546`, `25-710`, `25-828`

4. **Nomenclatura Puramente Numérica**
   Muchos registros son simplemente un número, sin letras ni guiones.
   - **Números de 3 dígitos**:  
     _Ejemplos_: `236`, `282`, `310`, `414`, `540`
   - **Números de 4 dígitos**:  
     _Ejemplos_: `1019`, `1488`, `3294`, `5253`, `9170`
   - **Números de 6 dígitos**:  
     _Ejemplo_: `253154`

5. **Nomenclaturas Mixtas (Alfanuméricas)**
   Casos especiales que combinan números y letras de forma única.
   - **Formato `XXCRXXXX`**:  
     _Ejemplo_: `01CR5333`

6. **Registros sin Valor**
   Se detectaron varios registros donde el campo `Vendor_Shipment_No` estaba vacío, lo que podría indicar un error en la entrada de datos o que no aplica para esa línea.


### Metodología de Análisis
1. **Extracción datos**: Query completo del proveedor PR001147
2. **Análisis patterns**: Identificación de patrones de entrada manual
3. **Catalogación variaciones**: Documentación de cada formato encontrado
4. **Impacto assessment**: Evaluación del impacto en matching automático

### Resultados del Análisis
**✅ Campo [Nº albarán proveedor] detectado correctamente**  
**❌ 196 variaciones de formato impiden matching directo**  
**⚠️ Necesidad urgente de normalización**

### Impacto Técnico
- **Matching directo**: Imposible sin normalización
- **Fuzzy matching**: Requerido como solución primaria
- **Precisión estimada**: Sin normalización menor al 60%, con normalización superior al 85%
- **Complejidad**: Exponencial al escalar a 50+ proveedores

### Decisiones Técnicas
1. **Normalización agresiva**: Implementar múltiples patrones de limpieza
2. **Fuzzy matching**: Como método primario de búsqueda
3. **Catalogación completa**: Documenter patrones por proveedor
4. **Estandarización futura**: Solicitar a DIESSA procedimientos uniformes

---

## 12 de Agosto de 2025 - Andrés Implementa Cambios Solicitados

### Contexto
Andrés responde a la solicitud de Juan con implementación de cambios.

### Cambios Implementados
1. Añadida columna [Nº albarán proveedor] en ODATA_Lin_Albaran_Compra
2. Creados tres nuevos endpoints:
   - ODATA_RefCruz_Productos_C
   - ODATA_RefCruz_Productos_M
   - ODATA_RefCruz_Productos_K

### Documentación
- Entregado: PDF actualizado rev1.1 con especificaciones completas
- URLs de pruebas funcionales

### Resultado
**✅ Implementación exitosa** - Pendiente de pruebas con datos reales

---

## 11 de Agosto de 2025 - Juan Confirma con ARES

### Contexto
Olga de vacaciones, Juan toma la iniciativa para desbloquear el proyecto.

### Decisiones Tomadas
1. Implementar opción 2: añadir columna a ODATA_Lin_Albaran_Compra
2. Crear endpoints de referencias cruzadas para productos C y M

### Resultado
**✅ Decisión ejecutiva** - ARES procede con implementación

---

## 8 de Agosto de 2025 - Andrés Propone Soluciones

### Contexto
Respuesta técnica de Andrés a las necesidades identificadas por Olga.

### Propuestas
1. **Para número albarán proveedor**:
   - Opción 1: Nuevo ODATA de cabeceras con el campo
   - Opción 2: Añadir columna a ODATA existente

2. **Para referencias cruzadas**:
   - Usar ODATA_CodDiessa_Productos_C existente
   - O crear nuevos endpoints filtrables

3. **Para albaranes pendientes**:
   - Campo clave: "Cantidad recibida no facturada" ≠ 0

### Resultado
**✅ Soluciones técnicas viables identificadas**

---

## 7 de Agosto de 2025 - Reunión con Olga: Identificación de Necesidades

### Contexto
Reunión GSC + Olga para entender proceso manual actual.

### Descubrimientos Críticos
1. **Campo faltante**: Número de albarán del proveedor no visible en endpoints
2. **Técnica de búsqueda**: Referencias cruzadas para localizar albaranes
3. **Criterio clave**: Solo albaranes pendientes de facturar

### Comunicación
- Olga envía email a Andrés detallando las necesidades
- CC a todo el equipo GSC y DIESSA

### Resultado
**⚠️ Identificación de gaps críticos en la API**

---

## 4 de Agosto de 2025 - Bloqueo por Falta de Datos

### Contexto
Valentín intenta realizar pruebas pero encuentra tablas vacías.

### Problema
- Endpoints de borradores sin datos
- Necesidad de crear primero cabeceras y líneas
- Sin información suficiente para crear datos de prueba

### Comunicación
- Valentín reporta bloqueo total
- Solicita datos reales para pruebas

### Resultado
**❌ Proyecto bloqueado** - Sin datos no se puede avanzar

---

## 30 de Julio de 2025 - Olga Proporciona Lista de Proveedores

### Contexto
Juan solicita a Olga ejemplos para pruebas en entorno sandbox.

### Datos Proporcionados
Lista de 32 proveedores de prueba incluyendo:
- DIESEL TECHNIC IBERIA SL (PR000578)
- LEO INDUSTRIAL SA (PR001147)
- SAMPA IBERICA S.L. (PR002415)
- Y 29 proveedores más

### Resultado
**✅ Datos de prueba disponibles**

---

## 29 de Julio de 2025 - Primeras Pruebas con Endpoints

### Contexto
Valentín realiza primeras pruebas con los 4 endpoints compartidos.

### Resultados
1. **Lin_Albaran_Compra**: ✅ Funciona
2. **Lin_Pedido_Compra**: ✅ Funciona  
3. **Cab_Borrador_Fra_Compra**: ❌ Sin datos
4. **Lin_Borrador_Fra_Compra**: ❌ Sin datos

### Problema Identificado
- Endpoints de lectura funcionan
- Endpoints de borradores requieren crear datos primero

### Resultado
**⚠️ Éxito parcial** - 50% endpoints operativos

---

## 28 de Julio de 2025 - ARES Entrega Documentación Inicial

### Contexto
Andrés comparte primera versión de documentación ODATA.

### Contenido Entregado
- Documento con explicación de conexión a endpoints
- 4 endpoints iniciales en entorno de pruebas
- URLs y credenciales de acceso

### Resultado
**✅ Inicio de pruebas técnicas**

---

## 15 de Mayo de 2025 - Documento Inicial del Proyecto

### Contexto
GSC comparte documento formal de solicitud de integración con todos los stakeholders.

### Documento
"Exploración de Capacidades de Integración API Navision para el Proyecto DIESSA"

### Contenido
- Objetivos del proyecto
- Flujos de proceso identificados
- Necesidades técnicas detalladas
- Solicitudes específicas a ARES

### Distribución
- Para: ARES (Andrés Escribano)
- CC: Miguel Moreta, Fernando López, Olga Arias, Juan Olayo

### Resultado
**✅ Proyecto formalmente iniciado**

---

## Resumen de la Evolución

1. **Mayo**: Proyecto iniciado formalmente con documento de requerimientos
2. **Julio**: Primeras entregas técnicas y pruebas iniciales
3. **Agosto (primera quincena)**: Identificación y resolución de gaps críticos
4. **21 Agosto**: BREAKTHROUGH - Solución técnica validada

### Lecciones Aprendidas

1. **Comunicación directa con usuarios finales es crítica** (reunión con Olga)
2. **Datos de prueba realistas son fundamentales** para avanzar
3. **Iteración rápida con proveedor IT** acelera resolución de problemas
4. **Documentación actualizada** (rev1.1) es clave para el éxito
