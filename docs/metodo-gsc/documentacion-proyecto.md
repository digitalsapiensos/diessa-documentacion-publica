---
id: documentacion-proyecto
title: Proyecto Admón con IA
sidebar_label: Proyecto Admón con IA
---

# Proyecto DIESSA - "Administración con IA"

## Documento de Solicitud de Integración

### Información del Documento
- **Título**: Exploración de Capacidades de Integración API Navision para el Proyecto DIESSA - "Administración con IA"
- **Fecha**: 15 de mayo de 2025
- **Preparado por**: Genai Sapiens Consulting
- **Para**: ARES (Atención: Andrés Escribano)
- **En Copia**: Miguel Moreta, Fernando López Yague, Olga Arias, Juan Olayo (DIESSA)

### Contexto del Proyecto

Este documento fue el punto de partida oficial del proyecto, compartido con todos los stakeholders para establecer las necesidades de integración con la API de Navision (Dynamics Nav 2018 CU63).

**Objetivo principal**: Automatizar y optimizar el procesamiento de las facturas de proveedor que DIESSA recibe, mediante:
- Extracción inteligente de datos de facturas
- Cruce y validación contra albaranes de proveedor en Navision
- Desarrollo de un agente IA de soporte
- Biblioteca de SOPs para el equipo administrativo

### Flujos de Proceso Identificados

#### Flujo 1: Procesamiento y Cruce de Factura-Albarán (Núcleo del Proyecto)
- **Problema**: El equipo invierte tiempo considerable en cruzar manualmente facturas con albaranes
- **Solución propuesta**: Sistema automatizado que:
  1. Verifique existencia de albaranes
  2. Obtenga detalles de líneas (productos, cantidades, precios)
  3. Compare información e identifique discrepancias
  4. Actualice estados en Navision

#### Flujo 2: Consultas del Agente IA
- Acceso a información actualizada de Navision
- Consulta de estados de facturas y albaranes
- Acceso a documentos PDF adjuntos

#### Flujo 3: Asistencia a Vendedores
- Validación en creación de pedidos de venta
- Consulta de datos de clientes y catálogo de productos
- Reducción de errores en pedidos manuales

### Necesidades Técnicas Identificadas

#### Para Consultas de Albaranes:
- Búsqueda por N° Albarán Proveedor + ID Proveedor
- Estado del albarán (Pendiente Facturar, Facturado, etc.)
- Detalle de líneas con códigos DIESSA
- Acceso a PDFs adjuntos

#### Para Operaciones de Escritura:
- Actualización de estados de albarán
- Creación/actualización de borradores de factura
- Vinculación factura-albarán

### Solicitudes Realizadas a ARES

1. **Documentación de la API**: Endpoints de Navision 2018 CU63
2. **Discusión Técnica**: Sesión para revisar capacidades
3. **Entorno Sandbox**: Acceso a entorno de pruebas
4. **Información Adicional**: Autenticación, límites, formatos (JSON preferido)
5. **Punto de Contacto Técnico**: Canal de consultas

### Acceso al Documento Original

Para acceder al documento completo del proyecto con todas las especificaciones técnicas:

**[📄 Ver Documento del Proyecto (PDF)](/assets/DIESSA%20-%20Integración%20API%20Navision.pdf)**

- **Fecha**: 15 de mayo de 2025
- **Tamaño**: 122.1 KB
- **Contenido**: Solicitud oficial de integración API Navision

:::info Documento Inicial
Este PDF contiene la solicitud oficial enviada a ARES el 15 de mayo de 2025, marcando el inicio formal del proyecto de integración.
:::

---

Este documento marcó el inicio formal del proyecto y estableció las bases para todas las interacciones posteriores con ARES.