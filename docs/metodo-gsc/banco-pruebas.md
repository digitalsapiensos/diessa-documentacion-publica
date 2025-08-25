---
sidebar_position: 4
sidebar_label: Sistema de Pruebas
---

# Sistema de Pruebas

:::info Fuente de los Datos
Facturas reales proporcionadas por **Olga Manzano (DIESSA)** el 6 de agosto de 2025 para pruebas del sistema de automatización. Estas facturas contienen **comentarios internos** de Olga explicando casos específicos y problemas identificados.

**Email original**: *"Buenas tardes Valentín, te envío algunos ejemplos de facturas que he hecho reales en el sistema de pruebas de varios proveedores, he ido poniendo comentarios dentro de las facturas."*
:::

## Proveedores y Volumen de Facturas

### Distribución por Proveedor

| Proveedor | Código | Facturas | Observaciones |
|-----------|--------|----------|---------------|
| **SAMPA** | PR002415 | 5 facturas | Proveedor con albaranes por email |
| **LEO Industrial** | PR001147 | 2 facturas | Segundo proveedor en volumen |
| **NRF España** | PR001359 | 2 facturas | Casos específicos documentados |
| **DENAPARTS** | PR000564 | 2 facturas | Proveedor con particularidades |
| **ELMER** | PR000644 | 3 facturas | Múltiples casos de estudio |
| **POLIPLAS** | PR002304 | 1 factura | Caso específico |

### **Total**: 15 facturas reales con comentarios de proceso

---

## Facturas Disponibles para Pruebas

### **SAMPA (PR002415) - 5 Facturas**

| Archivo | Descripción | Link |
|---------|-------------|------|
| **2536003821.PDF** | Factura SAMPA - Caso estándar | [Ver Factura](/assets/2536003821.PDF) |
| **2536003822.PDF** | Factura SAMPA - Variación formato | [Ver Factura](/assets/2536003822.PDF) |
| **2536004233.pdf** | Factura SAMPA - Caso complejo | [Ver Factura](/assets/2536004233.pdf) |
| **2536004234.pdf** | Factura SAMPA - Múltiples albaranes | [Ver Factura](/assets/2536004234.pdf) |
| **2536004235.pdf** | Factura SAMPA - Caso especial | [Ver Factura](/assets/2536004235.pdf) |

### **LEO Industrial (PR001147) - 2 Facturas**

| Archivo | Descripción | Link |
|---------|-------------|------|
| **F25-2985.pdf** | Factura LEO - Formato estándar | [Ver Factura](/assets/F25-2985.pdf) |
| **F25-3108.pdf** | Factura LEO - Caso con comentarios | [Ver Factura](/assets/F25-3108.pdf) |

### **NRF España (PR001359) - 2 Facturas**

| Archivo | Descripción | Link |
|---------|-------------|------|
| **FA 2502720.pdf** | Factura NRF - Caso documentado | [Ver Factura](/assets/FA%202502720.pdf) |
| **FA 2502805.pdf** | Factura NRF - Variación proceso | [Ver Factura](/assets/FA%202502805.pdf) |

### **DENAPARTS (PR000564) - 2 Facturas**

| Archivo | Descripción | Link |
|---------|-------------|------|
| **FA 2502866.pdf** | Factura DENAPARTS - Caso estándar | [Ver Factura](/assets/FA%202502866.pdf) |
| **factura 2568 dd 22-05-2025.pdf** | Factura DENAPARTS - Con fecha específica | [Ver Factura](/assets/factura%202568%20dd%2022-05-2025.pdf) |

### **ELMER (PR000644) - 3 Facturas**

| Archivo | Descripción | Link |
|---------|-------------|------|
| **FV25001730(12-5-2025).pdf** | Factura ELMER - Mayo 2025 | [Ver Factura](/assets/FV25001730(12-5-2025).pdf) |
| **FV25001731(12-5-2025).pdf** | Factura ELMER - Secuencial Mayo | [Ver Factura](/assets/FV25001731(12-5-2025).pdf) |
| **V125005518.PDF** | Factura ELMER - Formato especial | [Ver Factura](/assets/V125005518.PDF) |

### **POLIPLAS (PR002304) - 1 Factura**

| Archivo | Descripción | Link |
|---------|-------------|------|
| **V125006205.PDF** | Factura POLIPLAS - Caso único | [Ver Factura](/assets/V125006205.PDF) |

---

## Casos de Estudio Documentados

### Características de las Facturas

#### **Variaciones de Formato Identificadas**
- **Numeración**: Diferentes sistemas de numeración por proveedor
- **Fechas**: Formatos variables (dd-mm-yyyy, dd/mm/yyyy, etc.)
- **Códigos producto**: Referencias propias vs códigos DIESSA
- **Estructuras**: Facturas simples vs complejas con múltiples albaranes

#### **Comentarios Internos de Olga**
Cada factura contiene **comentarios específicos** de Olga explicando:
- **Problemas encontrados** en el matching
- **Soluciones aplicadas** manualmente
- **Casos especiales** que requieren atención
- **Patrones identificados** por proveedor

---

## Uso para Desarrollo y Pruebas

### **Objetivos del Banco de Pruebas**

1. **Validar algoritmos de matching** con casos reales
2. **Probar extracción de datos** de PDFs variados
3. **Verificar handling de excepciones** documentadas por Olga
4. **Calibrar tolerancias** del sistema de matching fuzzy

### **Casos de Prueba Prioritarios**

#### **Alta Prioridad**
- **SAMPA** (5 facturas): Mayor volumen, casos variados
- **LEO** (2 facturas): Segundo proveedor en importancia

#### **Media Prioridad**  
- **ELMER** (3 facturas): Casos secuenciales para validar continuidad
- **NRF/DENAPARTS** (2 c/u): Casos específicos documentados

#### **Baja Prioridad**
- **POLIPLAS** (1 factura): Caso único para validación final

### **Métricas de Éxito Esperadas**

| Métrica | Objetivo | Basado en |
|---------|----------|-----------|
| **Matching automático** | ≥85% | Variaciones identificadas |
| **Extracción datos** | ≥95% | Facturas estándar |
| **Detección excepciones** | 100% | 8 escenarios Olga |
| **Tiempo procesamiento** | ≤2 min/factura | vs 15-45 min manual |

---

:::note Próximos Pasos
Con este banco de pruebas se puede validar el algoritmo de matching desarrollado y calibrar las tolerancias del sistema antes del despliegue en producción con los ~180-200 facturas mensuales reales.
:::

Este banco de pruebas representa el **material fundamental** que Olga preparó para avanzar en la validación técnica del proyecto.