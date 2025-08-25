---
id: workflow-n8n-crear-facturas
title: Workflow n8n - Crear Facturas Compra
sidebar_label: Workflow Crear Facturas
---

# Workflow n8n - Crear Facturas de Compra

## Descripción General

Workflow automatizado para la creación de facturas de compra en Navision utilizando los endpoints ODATA disponibles. Este flujo forma parte de la implementación actual del proyecto DIESSA.

## Información del Archivo

**Ubicación**: `/PRUEBAS DIESSA/semana del 25 de agosto de 2025/workflow-n8n-crearfacturas.json`

**Fecha**: 25 agosto 2025

**Estado**: En desarrollo y pruebas

## Componentes del Workflow

### Nodo Principal: Crear Cabecera Compra

**Tipo**: HTTP Request (POST)

**Endpoint**: `ODATA_Cab_Compra`

**URL**: `https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39_PRUEBAS/ODataV4/Company('Diessa')/ODATA_Cab_Borrador_Fra_Compra`

#### Configuración Técnica

**Método**: POST

**Autenticación**: HTTP Basic Auth

**Credenciales**: Diessa test (ID: YFGdVWu1Xu9cZcth)

#### Headers Configurados
```json
{
  "Accept": "application/json",
  "Content-Type": "application/json",
  "authorization": "Basic RGllc3NhX1dTX2Jhc2ljbzo4PW9hRzE0YyRVNlN4P1U5cTBzVDdBZzFFQTk2eGY4T3hJTzVzcEh0OXhvclhRWDI="
}
```

#### Cuerpo JSON
```json
{
  "Document_Type": "Invoice",
  "No": "{{ $json.numero_borrador }}",
  "Buy_from_Vendor_No": "{{ $json.numero_proveedor }}",
  "Pay_to_Vendor_No": "{{ $json.numero_proveedor_pago }}",
  "Document_Date": "{{ $json.fecha_documento }}",
  "Posting_Date": "{{ $json.fecha_registro }}",
  "Due_Date": "{{ $json.fecha_vencimiento }}",
  "Vendor_Invoice_No": "{{ $json.numero_factura_proveedor }}",
  "Posting_Description": "{{ $json.descripcion_registro }}",
  "VAT_Bus_Posting_Group": "{{ $json.grupo_iva_negocio }}"
}
```

## Campos de Entrada Requeridos

### Datos de Factura
- **`numero_borrador`**: Número del borrador de factura
- **`numero_factura_proveedor`**: Número de factura del proveedor
- **`descripcion_registro`**: Descripción del registro

### Datos de Proveedor  
- **`numero_proveedor`**: Código del proveedor (compra desde)
- **`numero_proveedor_pago`**: Código del proveedor (pago a)

### Fechas
- **`fecha_documento`**: Fecha del documento original
- **`fecha_registro`**: Fecha de registro en sistema
- **`fecha_vencimiento`**: Fecha de vencimiento de pago

### Configuración Fiscal
- **`grupo_iva_negocio`**: Grupo de IVA de negocio

## Endpoint Utilizado

### ODATA_Cab_Borrador_Fra_Compra
**Función**: Crear cabecera de borrador de factura de compra

**Tipo**: Endpoint de escritura (POST)

**Entorno**: Pruebas Navision 2018 CU39

## Configuración de Seguridad

### Certificados
**`allowUnauthorizedCerts: true`** - Permitir certificados no autorizados para entorno de pruebas

### Credenciales
**Usuario**: Diessa_WS_basico

**Codificación**: Base64 en header Authorization

## Flujo de Datos

```mermaid
graph TD
    A[Datos Entrada JSON] --> B[Nodo Crear Cabecera]
    B --> C[POST ODATA_Cab_Borrador_Fra_Compra]
    C --> D[Respuesta Navision]
    D --> E[Procesar Resultado]
```

## Estado Actual

### Desarrollo Activo
- **Semana del 25 agosto 2025**: Workflow en pruebas
- **Endpoint confirmado**: Funcionando según documentación ARES rev1.1
- **Credenciales**: Configuradas y validadas

### Integración con Avance Técnico
Este workflow utiliza los endpoints confirmados tras el **avance importante del 21 agosto**, donde el campo [Nº albarán proveedor] fue añadido por ARES, resolviendo el problema de las 196 variaciones de formato.

## Próximos Pasos

1. **Completar nodos adicionales** para líneas de factura
2. **Implementar validaciones** de campos obligatorios  
3. **Añadir manejo de errores** HTTP específicos
4. **Integrar matching** con albaranes existentes
5. **Pruebas end-to-end** con datos reales

## Consideraciones Técnicas

### Limitaciones Actuales
- **Solo cabecera**: Falta implementar líneas de factura
- **Entorno pruebas**: No probado en producción
- **Validación manual**: Sin validaciones automáticas implementadas

### Recomendaciones
- **Implementar validación** campos obligatorios antes del POST
- **Añadir manejo errores** 400, 401, 500 específicos
- **Logging detallado** para troubleshooting
- **Rollback mechanism** en caso de fallo parcial

---

*Información del workflow actualizada: 25 agosto 2025*

*Basado en configuración ODATA ARES SD 253091 rev1.1*