---
id: documentacion-ares
title: Documentación Compartida por ARES
sidebar_label: Documentación ARES
---

# Documentación Compartida por ARES

Esta sección contiene la documentación técnica compartida por ARES (Andrés Escribano de Mingo) como parte del proceso de integración con Navision.

## Documento Principal: ODATA para Facturación de Compras

### Información del Documento
- **Título**: ODATA para facturación de compras - SD 253091
- **Versión**: rev1.1
- **Fecha**: 12 de agosto de 2025
- **Archivo**: 20250812_1406 - ODATA para facturación de compras - SD 253091 - rev1.1.pdf

### Contenido del Documento

El documento contiene la especificación técnica completa de los endpoints ODATA implementados en Navision para el proyecto de facturación de compras. Incluye:

1. **Endpoints Principales** (7 endpoints documentados)
   - ODATA_Lin_Albaran_Compra
   - ODATA_Lin_Pedido_Compra
   - ODATA_Cab_Borrador_Fra_Compra
   - ODATA_Lin_Borrador_Fra_Compra
   - ODATA_RefCruz_Productos_C
   - ODATA_RefCruz_Productos_M
   - ODATA_RefCruz_Productos_K

2. **URLs Base**
   - Producción: https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39/ODataV4/
   - Pruebas: https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39_PRUEBAS/ODataV4/

3. **Cambios Críticos en Revisión 1.1**
   - **Campo añadido**: [Nº albarán proveedor] en ODATA_Lin_Albaran_Compra
   - Este campo es fundamental para resolver el problema de las 196 variaciones de formato detectadas

### Evolución de la Documentación

La documentación ha evolucionado a través del siguiente proceso colaborativo:

1. **Julio 2025**: Entrega inicial de endpoints básicos
2. **7 agosto 2025**: Olga identifica necesidad del campo albarán proveedor
3. **8 agosto 2025**: Andrés propone dos opciones de implementación
4. **11 agosto 2025**: Juan confirma implementación de la opción 2
5. **12 agosto 2025**: Andrés implementa y entrega documentación actualizada rev1.1

### Acceso al Documento Completo

Para acceder al documento PDF completo con todas las especificaciones técnicas:
- Ruta: `/05_DOCUMENTACIÓN_HIGINI/20250812_1406 - ODATA para facturación de compras - SD 253091 - rev1.1.pdf`

---

*Nota: Esta es información suministrada por ARES.*