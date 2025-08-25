---
sidebar_position: 2
sidebar_label: ODATA Facturación SD 253091
---

# ODATA para Facturación de Compras SD 253091

:::info Fuente de la Documentación
Esta documentación ha sido proporcionada por **ARES** como parte del proyecto de integración API Navision.

📄 **Documento original**: [ODATA para facturación de compras - SD 253091 - rev1.1](/assets/20250812_1406%20-%20ODATA%20para%20facturación%20de%20compras%20-%20SD%20253091%20-%20rev1.1.pdf) *(haz click para abrir en nueva pestaña)*
:::

## Objetivo

Definición del funcionamiento de los **siete endpoints ODATA** destinados al proyecto de facturación de compras en DIESSA.

## Conceptos Iniciales

### URLs Base

Todos los endpoints comparten una URL base común, diferente para cada entorno:

**🧪 Entorno de Pruebas:**
```
https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39_PRUEBAS/ODataV4/Company('Diessa')/<nombre_metodo>
```

**🏭 Entorno de Producción:**
```
https://cloud10.ares-cn.es:18088/Diessa2_Nav2018CU39/ODataV4/Company('Diessa')/<nombre_metodo>
```

### Endpoints Disponibles

El parámetro `<nombre_metodo>` debe ser sustituido por uno de estos endpoints:

- `ODATA_Lin_Pedido_Compra`
- `ODATA_Lin_Albaran_Compra`
- `ODATA_Cab_Borrador_Fra_Compra`
- `ODATA_Lin_Borrador_Fra_Compra`
- `ODATA_RefCruz_Productos_C`
- `ODATA_RefCruz_Productos_M`
- `ODATA_RefCruz_Productos_K`

### Metadatos del Servicio

Puedes consultar el esquema completo de los servicios ODATA en:

**🧪 Metadatos Pruebas:**
```
https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39_PRUEBAS/ODataV4/$metadata
```

**🏭 Metadatos Producción:**
```
https://cloud10.ares-cn.es:18088/Diessa2_Nav2018CU39/ODataV4/$metadata
```

## Reglas Generales del Circuito de Compras

El proceso de compras en DIESSA sigue **obligatoriamente** la siguiente secuencia:

**Pedido → Albarán → Borrador de Factura → Factura Registrada**

### 📋 **Pedido**
- Un pedido puede contener **varias líneas**
- Cada línea especifica la **cantidad** de un producto o servicio que se está comprando
- Desde cada línea de pedido se pueden generar **uno o varios albaranes de compra**
- La línea del pedido muestra:
  - **Qué parte de la cantidad pedida** ha sido ya recibida
  - **Qué parte de la cantidad pedida** ha sido ya facturada

### 📦 **Albarán**
- Un albarán puede contener **varias líneas del mismo pedido**
- Cada línea de albarán puede recibir una **cantidad parcial** de la cantidad total prevista en la línea del pedido
- Al generar un albarán, el pedido **se actualiza** con la cantidad recibida
- La línea del albarán muestra **qué parte de la cantidad recibida** ha sido ya facturada
- **🚨 RESTRICCIÓN CRÍTICA**: Un albarán **solo se puede facturar una vez**. El ERP no permite volver a facturar un albarán que ya está marcado como facturado

### 🧾 **Borrador de Factura**
- Una factura tiene **cabecera y líneas**
- Cada línea de la factura normalmente está **relacionada con una línea de albarán**
- **Caso menos habitual**: También puede haber líneas de factura que **no estén relacionadas** con ninguna línea de albarán
- Cada línea de factura puede facturar una **cantidad parcial** de la cantidad total prevista en la línea del albarán

### ✅ **Factura Registrada**
- El borrador de factura de compra deberá ser **registrado** una vez que esté completo y sea validado por el responsable
- **El proceso de registro NO se hace mediante web services** sino que lo hace el usuario desde Navision
- Una vez que el borrador de factura es registrado:
  - Se **elimina** de borradores de factura
  - **Pasa al histórico** de facturas de compra
  - Al registrar una factura, se **actualiza la cantidad facturada** en el albarán y en el pedido

---

## 1. ODATA_Lin_Pedido_Compra

### Características
- **Uso**: Consultar líneas de pedidos de compra
- **Lectura**: ✅ Sí
- **Inserción/Modificación/Eliminación**: ❌ No
- **Filtros**: Permitido en todas las columnas

### Clave Principal
`[Tipo documento]`, `[Nº documento]`, `[Nº Línea]`

### Columnas Detalladas

| Campo | Descripción |
|-------|-------------|
| **Tipo documento** | Siempre es igual a "Pedido" |
| **Nº documento** | Identifica al pedido de compra. Relacionado con `ODATA_Lin_Albaran_Compra.[Nº pedido]` |
| **Nº línea** | Identifica una línea del pedido de compra. Relacionado con `ODATA_Lin_Albaran_Compra.[Nº línea pedido]` |
| **Tipo** | En DIESSA puede tomar los valores:<br/>• **"Producto"**: si se trata de compra de materiales físicos objeto del negocio<br/>• **"Cuenta"**: si se trata de servicios u otros materiales que no son para controlar stock tales como material de oficina |
| **Nº** | **Si Tipo = "Producto"**: contiene el código del producto que se está comprando. Normalmente comienza por **C** aunque en casos menos habituales podría comenzar por **K** o **M**<br/>**Si Tipo = "Cuenta"**: contiene un número de cuenta contable. Lo habitual es que comience por **6** |
| **Descripción** | Informativo, explica el producto o servicio que se está comprando |
| **Cód. almacén** | **Si Tipo = "Producto"**: indica en qué almacén físico entrará el material cuando se reciba<br/>**Si Tipo = "Cuenta"**: este campo permanece vacío |
| **Cantidad** | Cantidad total comprada. En DIESSA es suficiente con utilizar la cantidad sin indicar unidad de medida. **Si Tipo = "Cuenta"** la cantidad normalmente es **1** |
| **Coste unit. directo** | Precio de compra unitario bruto, antes de descuentos y de IVA |
| **% Descuento línea** | Porcentaje de descuento expresado en tanto por ciento que se aplicará sobre el campo `[Coste unit. directo]` para obtener el precio unitario neto antes de IVA |
| **Grupo contable IVA negocio** | Sirve para clasificar al proveedor en lo que respecta al cálculo del IVA. Se hereda del proveedor |
| **Grupo contable IVA prod.** | Sirve para clasificar al producto o servicio en lo que respecta al cálculo del IVA. Se hereda del producto o cuenta contable |
| **Cantidad recibida** | **Informativo**. Indica qué parte del campo `[Cantidad]` ha sido ya recibida mediante albaranes de compra. Puede haber varios albaranes que sumarán la cantidad recibida del pedido |
| **Cantidad facturada** | **Informativo**. Indica qué parte del campo `[Cantidad]` ha sido ya facturado mediante facturas registradas. Puede haber varias facturas que sumarán la cantidad facturada del pedido |
| **Compra a-Nº proveedor** | Heredado de la cabecera del pedido, indica el código de proveedor al que se compra el producto o servicio |
| **Pago-a Nº proveedor** | Heredado de la cabecera del pedido, indica el código de proveedor que facturará el producto o servicio. Normalmente este proveedor es igual al del campo anterior |

---

## 2. ODATA_Lin_Albaran_Compra

### Características
- **Uso**: Consultar líneas de albaranes de compra
- **Lectura**: ✅ Sí
- **Inserción/Modificación/Eliminación**: ❌ No
- **Filtros**: Permitido en todas las columnas

### Clave Principal
`[Nº Documento]`, `[Nº Línea]`

### Columnas Detalladas

| Campo | Descripción |
|-------|-------------|
| **Nº documento** | Identifica al albarán de compra. Relacionado con `ODATA_Lin_Borrador_Fra_Compra.[Nº albarán compra]` |
| **Nº línea** | Identifica una línea del albarán de compra. Relacionado con `ODATA_Lin_Borrador_Fra_Compra.[Nº línea albarán compra]` |
| **Tipo** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Nº** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Descripción** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Cód. almacén** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Cantidad** | Indica qué parte de la cantidad total de la línea del pedido ha sido recibida en este albarán. **Una línea de pedido se puede recibir en varios albaranes** |
| **Coste unit. directo** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **% Descuento línea** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Grupo contable IVA negocio** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Grupo contable IVA prod.** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Cantidad recibida no facturada** | Parte de la cantidad de esta línea que está **pendiente de ser facturada** por el proveedor. Es la cantidad que se puede llevar a borradores de factura de compra |
| **Cantidad facturada** | Parte de la cantidad de esta línea que **ya ha sido facturada** por el proveedor |
| **Nº pedido** | Identifica de qué pedido de compra procede esta línea de albarán. Relacionado con `ODATA_Lin_Pedido_Compra.[Nº documento]` |
| **Nº línea pedido** | Identifica de qué línea del pedido de compra procede esta línea de albarán. Relacionado con `ODATA_Lin_Pedido_Compra.[Nº línea]` |
| **Compra a-Nº proveedor** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Pago-a Nº proveedor** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **🔑 Nº albarán proveedor** | **CAMPO CLAVE AÑADIDO EN REV 1.1** - Número del albarán del proveedor tal como figura en la cabecera del albarán. Este número es el mismo para todas las líneas que coincidan en `[Nº documento]` |

:::tip Campo Crítico Añadido en Rev 1.1
El campo **[Nº albarán proveedor]** fue añadido específicamente para resolver el problema de las **196 variaciones de formato** identificadas en el proyecto. Este campo permite el matching automático entre facturas y albaranes.
:::

---

## 3. ODATA_Cab_Borrador_Fra_Compra

### Características
- **Uso**: Consultar y editar cabeceras de borradores de facturas
- **Lectura**: ✅ Sí
- **Inserción/Modificación/Eliminación**: ✅ Sí
- **Filtros**: Permitido en todas las columnas

### Clave Principal
`[Tipo documento]`, `[Nº]`

### Campos de Cabecera

| Campo | Descripción |
|-------|-------------|
| **Tipo documento** | Siempre es igual a "Factura" |
| **Nº** | Identifica al borrador de factura |
| **Compra a-Nº proveedor** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Pago-a Nº proveedor** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Fecha emisión documento** | Fecha en que el proveedor emite su factura |
| **Fecha registro** | Fecha en que DIESSA contabiliza la factura del proveedor. **Debe ser mayor o igual** que `[Fecha emisión documento]` |
| **Fecha vencimiento** | Fecha prevista para el pago según aparezca en la factura del proveedor. **Si no se rellena**, Navision propone la fecha según las reglas de pago configuradas para el proveedor |
| **Nº factura proveedor** | Número de factura que el proveedor pone en su documento. **Es muy importante** que este dato quede exactamente igual que esté en la factura del proveedor, **incluyendo símbolos o espacios**. **No puede haber dos facturas del mismo proveedor y año** con el mismo número |
| **Texto de registro** | Descripción de la operación. Normalmente se utiliza un texto fijo como **"compra de productos"** o **"compra de servicios"** |
| **Grupo contable IVA negocio** | Misma explicación que en ODATA_Lin_Pedido_Compra |

---

## 4. ODATA_Lin_Borrador_Fra_Compra

### Características
- **Uso**: Consultar y editar líneas de borradores de facturas
- **Lectura**: ✅ Sí
- **Inserción/Modificación/Eliminación**: ✅ Sí
- **Filtros**: Permitido en todas las columnas

### Clave Principal
`[Tipo documento]`, `[Nº documento]`, `[Nº línea]`

### Campos Detallados

| Campo | Descripción |
|-------|-------------|
| **Tipo documento** | Siempre es igual a "Factura" |
| **Nº documento** | Identifica al borrador de factura |
| **Nº línea** | Identifica una línea del borrador de factura |
| **Tipo** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Nº** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Descripción** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Cód. almacén** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Cantidad** | Cantidad que el proveedor está facturando. **Si esta línea procede de un albarán**, esta cantidad puede ser como máximo igual a `ODATA_Lin_Albaran_Compra.[Cantidad recibida no facturada]`. **Si hay varios borradores** que apuntan a la misma línea de albarán, **la suma no debe superar** la cantidad recibida no facturada |
| **Coste unit. directo** | **Heredado del albarán**, pero si se modifica en la factura **el importe que finalmente se aplicará es el de la factura** |
| **% Descuento línea** | **Heredado del albarán**, pero si se modifica en la factura **el importe que finalmente se aplicará es el de la factura** |
| **Grupo contable IVA negocio** | **Se hereda de la cabecera** del borrador de factura |
| **Grupo contable IVA prod.** | Misma explicación que en ODATA_Lin_Pedido_Compra |
| **Compra a-Nº proveedor** | **Se hereda de la cabecera** del borrador de factura |
| **Pago-a Nº proveedor** | **Se hereda de la cabecera** del borrador de factura |
| **Nº albarán compra** | Identifica qué albarán está liquidando esta línea de factura. Relacionado con `ODATA_Lin_Albaran_Compra.[Nº documento]` |
| **Nº línea albarán compra** | Identifica qué línea de albarán está liquidando esta línea de factura. Relacionado con `ODATA_Lin_Albaran_Compra.[Nº línea]` |

---

## 5. ODATA_RefCruz_Productos_C

### Características
- **Uso**: Consultar referencias cruzadas de productos "no originales" con código que empieza por **C** (excepto CZ)
- **Lectura**: ✅ Sí
- **Inserción/Modificación/Eliminación**: ❌ No
- **Filtros**: Permitido en todas las columnas

### Clave Principal
`[Cód. Producto]`, `[Referencia cruzada]`

### Campos Detallados

| Campo | Descripción |
|-------|-------------|
| **Cód. Producto** | Código del producto de DIESSA. Relación con:<br/>• `ODATA_Lin_Pedido_Compra.[Nº]`<br/>• `ODATA_Lin_Albaran_Compra.[Nº]`<br/>• `ODATA_Lin_Borrador_Fra_Compra.[Nº]` |
| **Referencia cruzada** | Referencia del proveedor sin símbolos (puntos, guiones eliminados) |
| **Cód. Proveedor** | Código del proveedor. Relación con campos en:<br/>• **ODATA_Lin_Pedido_Compra**: `[Pago-a Nº proveedor]`, `[Compra a-Nº proveedor]`<br/>• **ODATA_Lin_Albaran_Compra**: `[Pago-a Nº proveedor]`, `[Compra a-Nº proveedor]`<br/>• **ODATA_Cab_Borrador_Fra_Compra**: `[Pago-a Nº proveedor]`, `[Compra a-Nº proveedor]`<br/>• **ODATA_Lin_Borrador_Fra_Compra**: `[Pago-a Nº proveedor]`, `[Compra a-Nº proveedor]` |
| **Sustituido/Obsoleto** | Indica si la referencia es antigua |

---

## 6. ODATA_RefCruz_Productos_M

### Características
- **Uso**: Similar a "ODATA_RefCruz_Productos_C" pero para productos "marca" con código que empieza por **M** (excepto MZ)
- **Lectura**: ✅ Sí
- **Inserción/Modificación/Eliminación**: ❌ No
- **Filtros**: Permitido en todas las columnas

### Clave Principal
`[Cód. Producto]`, `[Referencia cruzada]`

### Campos

| Campo | Descripción |
|-------|-------------|
| **Cód. Producto** | Misma explicación que en ODATA_RefCruz_Productos_C |
| **Referencia cruzada** | Misma explicación que en ODATA_RefCruz_Productos_C |
| **Cód. Proveedor** | Misma explicación que en ODATA_RefCruz_Productos_C |
| **Sustituido/Obsoleto** | Misma explicación que en ODATA_RefCruz_Productos_C |

---

## 7. ODATA_RefCruz_Productos_K

### Características
- **Uso**: Similar a "ODATA_RefCruz_Productos_C" pero para productos "original" con código que empieza por **K** (excepto KZ)
- **Endpoint preexistente**: Ya estaba en uso en DIESSA, no diseñado específicamente para este proyecto
- **Lectura**: ✅ Sí
- **Inserción/Modificación/Eliminación**: ❌ No
- **Filtros**: Permitido en todas las columnas **EXCEPTO** `[Cód. Diessa]` y `[Cód. Categoría producto]`

### Clave Principal
`[Cód. Producto]`, `[Referencia cruzada]`

### Campos Completos

| Campo | Descripción | Uso en Proyecto |
|-------|-------------|-----------------|
| **Cód. Producto** | Misma explicación que en ODATA_RefCruz_Productos_C | ✅ **Utilizado** |
| **Referencia cruzada** | Misma explicación que en ODATA_RefCruz_Productos_C | ✅ **Utilizado** |
| **Cód. Diessa** | Columna no utilizada para el proyecto "Facturación de Compras" | ❌ Sin filtro |
| **Cód. Categoría producto** | Columna no utilizada para el proyecto "Facturación de Compras" | ❌ Sin filtro |
| **Cód. Proveedor** | Misma explicación que en ODATA_RefCruz_Productos_C | ✅ **Utilizado** |
| **Precio fabricante (bruto) EUR** | Columna no utilizada para el proyecto "Facturación de Compras" | ❌ No utilizada |
| **Precio fabricante (bruto) USD** | Columna no utilizada para el proyecto "Facturación de Compras" | ❌ No utilizada |
| **Sustituido/Obsoleto** | Misma explicación que en ODATA_RefCruz_Productos_C | ✅ **Utilizado** |
| **Fecha alta referencia** | Columna no utilizada para el proyecto "Facturación de Compras" | ❌ No utilizada |
| **Creado por usuario** | Columna no utilizada para el proyecto "Facturación de Compras" | ❌ No utilizada |

:::note Endpoint Preexistente
Este endpoint tiene más columnas que los dos anteriores porque no fue diseñado específicamente para este proyecto, sino que ya estaba en uso en DIESSA. Las columnas similares a "ODATA_RefCruz_Productos_C" y "ODATA_RefCruz_Productos_M" pueden usarse para el proyecto actual.
:::

---

## Cambios en Revisión 1.1

### Mejoras Implementadas

1. **🆕 Campo añadido**: `[Nº albarán proveedor]` en `ODATA_Lin_Albaran_Compra`
2. **🆕 Nuevos endpoints**: `ODATA_RefCruz_Productos_C` y `ODATA_RefCruz_Productos_M`
3. **📖 Documentación**: Descripción completa del endpoint existente `ODATA_RefCruz_Productos_K`

### Impacto en el Proyecto

El campo **[Nº albarán proveedor]** representa el **breakthrough técnico** que permite:
- Matching automático entre facturas y albaranes
- Resolución de las 196 variaciones de formato
- Elevación de la probabilidad de éxito del proyecto del 45% al 85%

---

:::note Información Técnica Adicional
Para detalles técnicos específicos, configuración de filtros, o información sobre campos adicionales, consulta el documento PDF original o contacta con el equipo técnico de ARES.
:::