# Leo Industrial SA

## Información General
- **Código**: PR001147
- **Volumen**: 15-20 facturas/mes
- **Complejidad**: MEDIA
- **Canal**: Email

## Características

### Formato Facturas
- Llegada regular por email
- Formato PDF estándar
- Referencias claras en facturas
- Ocasional envío de albaranes por email

### Problema Principal: 196 Variaciones
Este proveedor fue donde se detectó el problema crítico de las 196 variaciones de formato para el mismo albarán.

**Ejemplos reales encontrados**:
- Original: "A25-9981"
- Variaciones sistema:
  - "259981"
  - "9981"
  - "ALBC A25-9981"
  - "A25/9981"
  - "A 25 - 9981"
  - "A259981"
  - Y 190 más...

## Casuísticas y Escenarios

### Caso 1: Referencia Estándar
- **Frecuencia**: 40% de casos
- **Patrón**: Formato "AXX-XXXX" consistente
- **Solución**: Matching directo con normalización

### Caso 2: Referencia Parcial
- **Frecuencia**: 35% de casos
- **Problema**: Solo últimos dígitos en sistema
- **Solución**: Búsqueda por sufijo + validación fecha

### Caso 3: Referencia con Prefijos
- **Frecuencia**: 25% de casos
- **Problema**: Prefijos variables (ALBC, REF, etc.)
- **Solución**: Eliminación prefijos + fuzzy matching

## Reglas de Negocio

1. **Normalización agresiva**: Eliminar todos los caracteres especiales
2. **Búsqueda por sufijo**: Últimos 4-6 dígitos más distintivos
3. **Validación temporal**: ±30 días desde fecha factura
4. **Fallback**: Búsqueda por importe si falla referencia

## Configuración Sistema

```javascript
{
  "proveedor": "PR001147",
  "algoritmo": "standard_normalizado",
  "parametros": {
    "normalizacionNivel": "agresiva",
    "fuzzyThreshold": 0.85,
    "busquedaSufijo": true,
    "ventanaTemporal": 30,
    "fallbackImporte": true
  }
}
```

## Breakthrough: Campo [Nº albarán proveedor]
Con el nuevo campo añadido en ODATA rev1.1, este proveedor pasa de ser el más problemático al más simple, ya que el campo contiene la referencia exacta que aparece en la factura.

## Métricas Específicas
- **Tiempo proceso actual**: 10-15 min/factura
- **Objetivo automatización**: 30 seg/factura
- **Tasa error actual**: 35% (por variaciones)
- **Objetivo error**: menor 2% (con campo nuevo)

---

*Proveedor clave para validar solución de variaciones*