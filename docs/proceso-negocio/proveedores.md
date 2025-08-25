---
id: proveedores
title: Proveedores - Casuísticas y Escenarios
sidebar_label: Proveedores
---

# Proveedores - Casuísticas y Escenarios

## Visión General

DIESSA trabaja con aproximadamente 50-60 proveedores activos, cada uno con sus propias particularidades en formato de facturas, sistemas de gestión y procesos. A continuación se documentan los proveedores principales y sus casuísticas específicas.

## Proveedores Principales

### 1. DIESEL TECHNIC IBERIA SL (PR000578)

**Características**:
- Uno de los proveedores con mayor volumen
- **Particularidad clave**: 196 variaciones de formato detectadas en sus albaranes
- Portal web propio para descarga de facturas
- Múltiples albaranes por factura frecuente

**Casuísticas**:
- Formato de albarán cambia según almacén de origen
- Números de albarán en diferentes ubicaciones del documento
- Usa códigos propios que requieren referencia cruzada constante

**Escenarios de Negocio**:
- Facturas consolidadas semanales con 10-20 albaranes
- Notas de abono frecuentes por devoluciones
- Descuentos por volumen aplicados a nivel factura

### 2. LEO INDUSTRIAL SA (PR001147)

**Características**:
- Proveedor de componentes industriales
- Envío de facturas por email con PDF adjunto
- Sistema propio de codificación de productos

**Casuísticas**:
- Facturas con referencias a pedidos antiguos
- Albaranes parciales frecuentes
- Precios variables según fecha de pedido

**Escenarios de Negocio**:
- Entregas parciales que generan múltiples albaranes por pedido
- Facturas que incluyen servicios adicionales (portes, embalajes especiales)
- Rappels trimestrales que ajustan precios retroactivamente

### 3. SAMPA IBERICA S.L. (PR002415)

**Características**:
- Proveedor estratégico de recambios
- Portal B2B para gestión de pedidos
- Integración EDI parcial

**Casuísticas**:
- Usa número de albarán interno diferente al comunicado
- Facturas en formato EDI y PDF simultáneamente
- Códigos de producto con variantes complejas

**Escenarios de Negocio**:
- Pedidos urgentes con sobrecostes de transporte
- Kits de productos que se facturan como líneas individuales
- Promociones temporales que afectan al matching de precios

### 4. RECAMBIOS EUROTRUCK SL (PR001498)

**Características**:
- Especializado en recambios de camión
- Facturas mensuales consolidadas
- Sistema de bonificaciones complejo

**Casuísticas**:
- Albaranes con códigos de referencia múltiples
- Descuentos aplicados por línea y por total
- Facturas rectificativas frecuentes

**Escenarios de Negocio**:
- Devoluciones que generan abonos parciales
- Pedidos especiales bajo demanda con precios negociados
- Facturación de servicios adicionales (pre-montaje, certificaciones)

## Matriz de Complejidad por Proveedor

| Proveedor | Volumen Mensual | Complejidad | Problemas Frecuentes |
|-----------|----------------|-------------|---------------------|
| Diesel Technic | Alto (50-70) | Muy Alta | Formato variable, múltiples albaranes |
| Leo Industrial | Medio (30-40) | Alta | Entregas parciales, precios variables |
| Sampa | Alto (40-60) | Media | Discrepancias EDI/PDF |
| Eurotruck | Medio (20-30) | Alta | Descuentos complejos |
| Cojali | Bajo (10-15) | Baja | Formato estándar |
| Air Fren | Bajo (5-10) | Media | Referencias cruzadas |

## Escenarios Comunes

### Escenario 1: Factura Multi-Albarán
**Frecuencia**: 40% de las facturas
**Proveedores afectados**: Todos los principales
**Solución actual**: Búsqueda manual uno por uno
**Solución propuesta**: Matching paralelo con validación conjunta

### Escenario 2: Discrepancia de Precios
**Frecuencia**: 25% de las facturas
**Proveedores afectados**: Leo, Eurotruck
**Causa**: Cambios de tarifa entre pedido y factura
**Solución propuesta**: Tolerancia configurable + alertas

### Escenario 3: Albaranes No Encontrados
**Frecuencia**: 15% de las facturas
**Proveedores afectados**: Diesel Technic principalmente
**Causa**: Variación en formato de número de albarán
**Solución propuesta**: Campo [Nº albarán proveedor] + fuzzy matching

### Escenario 4: Facturas Rectificativas
**Frecuencia**: 10% mensual
**Proveedores afectados**: Todos
**Complejidad**: Requiere anular factura original
**Solución propuesta**: Flujo específico con trazabilidad

## Reglas de Negocio por Proveedor

### Reglas Generales
1. **Tolerancia de precios**: ±2% sin requerir validación
2. **Diferencia de fechas**: Máximo 30 días entre albarán y factura
3. **IVA**: Siempre 21% salvo excepciones documentadas

### Reglas Específicas

**Diesel Technic**:
- Aceptar facturas con hasta 20 albaranes
- Ignorar albaranes de muestras (importe 0€)
- Consolidar líneas de mismo producto

**Leo Industrial**:
- Validar siempre contra pedido original
- Permitir facturas parciales
- Rappel trimestral como factura separada

**Sampa**:
- Priorizar datos EDI sobre PDF en caso de discrepancia
- Validar kits contra componentes individuales
- Aplicar descuentos por volumen automáticamente

## Catálogo Completo de Proveedores DIESSA

### Proveedores Activos - Listado Oficial

| Código | Nombre Proveedor | Estado | Prioridad |
|--------|------------------|--------|-----------|
| PR000012 | CASALS NADAL SL | Activo | Media |
| PR000114 | AIR FREN SL | Activo | Media |
| PR000455 | COJALI S.L. | Activo | Media |
| PR000564 | DENAPARTS, S.L. | Activo | Media |
| PR000577 | DIESEL PARTS, S.A. | Activo | Media |
| PR000578 | DIESEL TECHNIC IBERIA SL | Activo | **Alta** |
| PR000592 | DIRECCIONES DE LEVANTE SL | Activo | Media |
| PR000644 | ELMER AUTOMOCION SL | Activo | Media |
| PR000732 | FAYCOM PRODUCCION Y COMERC.,S.A. | Activo | Media |
| PR001147 | LEO INDUSTRIAL SA | Activo | **Alta** |
| PR001298 | MONTCADA ARTICULOS TECNICOS SL | Activo | Media |
| PR001359 | NRF ESPAÑA SA | Activo | Media |
| PR001448 | POS SERVICE HOLLAND (ES), S.A. | Activo | Media |
| PR001498 | RECAMBIOS EUROTRUCK SL | Activo | **Alta** |
| PR001502 | RECAMBIOS AUTO DIESEL SA | Activo | Media |
| PR001738 | BPW TRAPACO S.L. | Activo | Media |
| PR001934 | TRUCKFRENOS, S.L. | Activo | Media |
| PR001944 | TURBO SERVICE IBERICA CO. SL | Activo | Media |
| PR001967 | UNITRUCK LTD | Activo | Media |
| PR001987 | VEINLUC, S.A. | Activo | Media |
| PR002066 | ECOALBORÁN | Activo | Media |
| PR002090 | JUMASA PARTS, S.L.U. | Activo | Media |
| PR002167 | TVS 2017, S.L. | Activo | Media |
| PR002191 | AUTOMOCION RUBIO RODRIGO, S.A. | Activo | Media |
| PR002257 | INTEGRAL DEALER SERVICES, S.L. | Activo | Media |
| PR002297 | EUSKO MOTOR, S.L. | Activo | Media |
| PR002304 | POLIPLAST | Activo | Media |
| PR002309 | TALLERES SAGASTA S.L. | Activo | Media |
| PR002358 | LUCINVE TRUCKS PARTS | Activo | Media |
| PR002415 | SAMPA IBERICA S.L. | Activo | **Alta** |
| PR002448 | VENTIMEC SOC. MICROEMPRESA COOP. | Activo | Baja |

### Criterios de Priorización

**Prioridad Alta**: Proveedores con mayor volumen transaccional, mayor complejidad de casuísticas o impacto crítico en operaciones.
- DIESEL TECHNIC IBERIA SL (PR000578): Mayor volumen, 196 variaciones formato
- LEO INDUSTRIAL SA (PR001147): Alto volumen, entregas parciales complejas  
- RECAMBIOS EUROTRUCK SL (PR001498): Facturación consolidada, descuentos complejos
- SAMPA IBERICA S.L. (PR002415): Integración EDI, códigos productos complejos

**Prioridad Media**: Proveedores con volumen moderado y casuísticas estándar.

**Prioridad Baja**: Proveedores con bajo volumen transaccional.

### Estadísticas del Catálogo

- **Total proveedores activos**: 31 proveedores
- **Proveedores prioridad alta**: 4 (13%)
- **Proveedores prioridad media**: 26 (84%)  
- **Proveedores prioridad baja**: 1 (3%)
- **Volumen total estimado**: 180-200 facturas/mes
- **Concentración**: Los 4 proveedores de alta prioridad representan aproximadamente el 60% del volumen