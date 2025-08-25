# Dieseltechnic

## Información General
- **Código**: PR001XXX
- **Volumen**: Máximo volumen, facturas cada 15 días
- **Complejidad**: MUY ALTA - Estructura dual
- **Canal**: Portal web + Email

## Características Especiales

### Estructura Dual de Albaranes
1. **Albaranes de Transporte**
   - Aparecen al inicio y mitad de factura
   - Importes fijos y predecibles
   - Se suman automáticamente (confianza alta)
   - Identificador: palabra "transporte" en descripción

2. **Albaranes de Piezas**
   - Distribuidos por toda la factura (100+ páginas)
   - Verificación individual requerida
   - Referencias productos variables
   - Mayor complejidad de matching

### Portal Web
- URL específica con credenciales
- Descarga manual de albaranes PDF
- Información completa de entregas
- Identificación del gestor responsable

## Casuísticas y Escenarios

### Caso 1: Factura Estándar
- **Frecuencia**: 80% de casos
- **Patrón**: Transportes al inicio + piezas después
- **Solución**: Sumar transportes automático, validar piezas

### Caso 2: Solo Transportes
- **Frecuencia**: 10% de casos
- **Identificación**: Factura menor a 5 páginas
- **Solución**: Aprobación automática alta confianza

### Caso 3: Discrepancias en Piezas
- **Frecuencia**: 10% de casos
- **Problema**: Referencias no coinciden exactamente
- **Solución**: Fuzzy matching + validación manual

## Reglas de Negocio

1. **Transportes**: Aprobar automáticamente si palabra "transporte" presente
2. **Tolerancia importes**: ±2€ en totales
3. **Prioridad**: Procesar primero por alto volumen
4. **Validación**: Requerir aprobación si más de 5 albaranes con discrepancia

## Configuración Sistema

```javascript
{
  "proveedor": "DIESELTECHNIC",
  "algoritmo": "dual_structure",
  "parametros": {
    "transporteAuto": true,
    "umbralConfianza": 0.85,
    "toleranciaImporte": 2.0,
    "portalWeb": true,
    "batchSize": 50  // Por volumen alto
  }
}
```

## Métricas Específicas
- **Tiempo proceso actual**: 20-30 min/factura
- **Objetivo automatización**: 2-3 min/factura
- **Tasa error actual**: 15%
- **Objetivo error**: menor 3%

---

*Proveedor crítico por volumen - Prioridad máxima automatización*