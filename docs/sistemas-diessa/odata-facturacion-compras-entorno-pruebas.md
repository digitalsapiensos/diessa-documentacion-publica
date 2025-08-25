---
id: odata-facturacion-compras-entorno-pruebas
title: ODATA para Facturación de Compras - Entorno de Pruebas
sidebar_label: ODATA Facturación Compras
---

# ODATA para Facturación de Compras - Configuración Técnica Completa

## Información General

**Documento base**: SD 253091 - rev1.1  
**Fecha configuración**: 12 junio 2025  
**Responsable técnico**: Andrés Escribano de Mingo (ARES)  
**Entorno**: Navision 2018 CU39 - Pruebas

---

## Configuración de Red y Seguridad

### Restricciones de Acceso
- **IP autorizada única**: `45.130.18.25` 
- **VPS GSC**: Único punto de acceso permitido
- **Firewall**: Configurado por ARES tras gestiones internas
- **Protocolo**: HTTPS con certificado válido

### URLs Base por Entorno

**Entorno de Pruebas**:
```
https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39_PRUEBAS/OData/Company('Diessa')/[ENDPOINT_NAME]
```

**Entorno de Producción**:
```  
https://cloud10.ares-cn.es:18088/Diessa2_Nav2018CU39/OData/Company('Diessa')/[ENDPOINT_NAME]
```

---

## Credenciales de Acceso

### Usuario Correcto (Confirmado por ARES)
```
Usuario: Diessa_WS_basico
Contraseña: 8=oaG14c$U6Sx?U9q0sT7Ag1EA96xf8OxIO5spHt9xorXQX2
```

### Usuarios Incorrectos Iniciales
**Usuario probado inicialmente (ERROR)**:
```
Usuario: CLOUD\DiessaGestion  
Contraseña: g5T490dS
```
**Resultado**: 401 Unauthorized para operaciones de escritura

### Método de Autenticación
- **Tipo**: HTTP Basic Authentication
- **Encoding**: Base64 (usuario:contraseña)
- **Headers requeridos**: `Authorization: Basic [encoded_credentials]`

---

## Endpoints Disponibles y Capacidades

### Endpoints con ESCRITURA (POST/PUT) - Solo 4 Disponibles

#### 1. ODATA_Cab_Compra (Cabeceras de Compra)
```
URL: https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39_PRUEBAS/OData/Company('Diessa')/ODATA_Cab_Compra
Métodos: GET, POST, PUT
Propósito: Crear/modificar cabeceras de pedidos de compra
```

#### 2. ODATA_Lin_Compra (Líneas de Compra)
```
URL: https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39_PRUEBAS/OData/Company('Diessa')/ODATA_Lin_Compra
Métodos: GET, POST, PUT
Propósito: Crear/modificar líneas de pedidos de compra
```

#### 3. ODATA_Cab_Venta (Cabeceras de Venta)
```
URL: https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39_PRUEBAS/OData/Company('Diessa')/ODATA_Cab_Venta
Métodos: GET, POST, PUT  
Propósito: Crear/modificar cabeceras de pedidos de venta
```

#### 4. ODATA_Lin_Venta (Líneas de Venta)
```
URL: https://cloud10.ares-cn.es:18098/Diessa2_Nav2018CU39_PRUEBAS/OData/Company('Diessa')/ODATA_Lin_Venta
Métodos: GET, POST, PUT
Propósito: Crear/modificar líneas de pedidos de venta
```

### Endpoints SOLO LECTURA (GET) - 14 Funcionales

#### Endpoints de Clientes y Ventas
```
ODATA_Cliente_deuda - Estado de deuda por cliente
ODATA_Clientes - Maestro de clientes  
ODATA_Lineas_ofertas_vta - Líneas de ofertas de venta
ODATA_Movs_ptes_cliente - Movimientos pendientes cliente
ODATA_Pedidos_venta - Pedidos de venta
```

#### Endpoints de Productos y Referencias
```
ODATA_CodDiessa_Productos_C - Codificación productos DIESSA
ODATA_Productos - Maestro de productos
ODATA_RefCruz_Productos_K - Referencias cruzadas productos
```

#### Endpoints de Proveedores y Compras  
```
ODATA_Movs_ptes_proveedor - Movimientos pendientes proveedor
ODATA_Proveedores - Maestro de proveedores
```

#### **Endpoints CRÍTICOS para Matching (Proyecto DIESSA)**
```
ODATA_Movs_producto_cpa - Movimientos productos compra ⭐
ODATA_Movs_producto_vta - Movimientos productos venta ⭐
```
**Confirmado por Andrés**: "Contienen la relación entre compras y ventas"

#### Endpoints Contables
```
ODATA_Cuenta_700 - Información cuenta 700
ODATA_Movs_conta - Movimientos contables
```

### Endpoints NO DISPONIBLES (Errores Confirmados)
```
ODATA_Fichajes - HTTP 404 (No encontrado)
ODATA_Lineas_pedidos_vta - HTTP 404 (No encontrado)  
ODATA_Ofertas_no_realizadas - HTTP 400 (Bad Request)
```

---

## Pruebas Técnicas Realizadas (12 Junio 2025)

### Reporte Sistemático de Valentín Ayesa

**Metodología de Pruebas**:
- **Total endpoints probados**: 17
- **Exitosos**: 14 (82.3%)
- **Con errores**: 3 (17.7%)
- **Usuario de pruebas**: `Diessa_WS_basico`
- **Herramienta**: Cliente HTTP personalizado

### Resultados Detallados por Endpoint

#### Endpoints Exitosos (✓)
```
✓ ODATA_Cliente_deuda: OK - Datos de deuda disponibles
✓ ODATA_Clientes: OK - Maestro clientes completo
✓ ODATA_CodDiessa_Productos_C: OK - Codificación funcional
✓ ODATA_Cuenta_700: OK - Datos contables accesibles
✓ ODATA_Lineas_ofertas_vta: OK - Líneas ofertas disponibles  
✓ ODATA_Movs_conta: OK - Movimientos contables funcionales
✓ ODATA_Movs_producto_cpa: OK - CRÍTICO para matching
✓ ODATA_Movs_producto_vta: OK - CRÍTICO para matching
✓ ODATA_Movs_ptes_cliente: OK - Pendientes cliente
✓ ODATA_Movs_ptes_proveedor: OK - Pendientes proveedor
✓ ODATA_Pedidos_venta: OK - Pedidos venta completos
✓ ODATA_Productos: OK - Maestro productos funcional  
✓ ODATA_Proveedores: OK - Maestro proveedores completo
✓ ODATA_RefCruz_Productos_K: OK - Referencias cruzadas
```

#### Endpoints con Errores (✗)
```
✗ ODATA_Fichajes: ERROR HTTP 404 - Endpoint no existe
✗ ODATA_Lineas_pedidos_vta: ERROR HTTP 404 - Endpoint no disponible  
✗ ODATA_Ofertas_no_realizadas: ERROR HTTP 400 - Solicitud incorrecta
```

---

## Operaciones y Métodos HTTP

### Métodos Soportados por Endpoint

**Para Endpoints de ESCRITURA**:
- **GET**: Leer registros existentes
- **POST**: Crear nuevos registros  
- **PUT**: Actualizar registros existentes
- **DELETE**: No documentado/no soportado

**Para Endpoints SOLO LECTURA**:
- **GET**: Único método disponible
- **POST/PUT**: Devuelve Error 500 "The underlying application page is not editable"

### Ejemplos de Errores Comunes

#### Error 500 - Página No Editable
```json
{
  "error": {
    "code": "",
    "message": "An error occurred while processing this request.",
    "innererror": {
      "message": "The underlying application page is not editable.",
      "type": "Microsoft.Dynamics.Nav.Service.ODataServiceProvider.ODataException"
    }
  }
}
```
**Causa**: Intento de POST/PUT en endpoint solo lectura

#### Error 401 - No Autorizado  
```
HTTP 401 Unauthorized
```
**Causa**: Credenciales incorrectas o permisos insuficientes

---

## Limitaciones Técnicas Documentadas

### Schema y Documentación

**Solicitud GSC**: Acceso a schema completo de base datos  
**Respuesta ARES**: "El schema completo no está publicado en OData, según las indicaciones, solo los campos que el usuario maneja en su pantalla"

**Implicaciones**:
- Discovery manual de campos requerido
- No hay documentación automática de relaciones
- Campos disponibles limitados a interfaz usuario Navision

### Acceso Directo a Base Datos

**Solicitud GSC**: Acceso de lectura a servidor SQL Server  
**Justificación**: Mayor eficacia en discovery de tablas y relaciones  
**Estado**: No concedido por ARES
**Alternativa**: Limitado a endpoints OData publicados

### Limitaciones de Escritura

**Confirmado por ARES**: "Los únicos cuatro odata que permiten post son los cuatro nuevos que creamos hace unos días. Todos los anteriores que ya existían en Diessa solo permiten get."

**Impacto**: Capacidad de automatización limitada a 4 endpoints específicos

---

## Información Crítica para Proyecto DIESSA

### Endpoints Clave para Matching Facturas-Albaranes

**Identificados por Andrés Escribano (3 julio 2025)**:

```
ODATA_Movs_producto_vta - Movimientos productos venta
ODATA_Movs_producto_cpa - Movimientos productos compra  
```

**Funcionalidad confirmada**: "Tenéis la relación de compras y ventas de cada referencia que aportan la información que pides"

### Proceso de Trazabilidad PV-PC

**Flujo identificado**:
1. **Pedido de Venta** → Genera referencia PV[número]
2. **Sistema Navision** → Crea automáticamente relación  
3. **Pedido de Compra** → Genera referencia PC[número] vinculada
4. **Consulta via ODATA** → Endpoints movimientos permiten cruzar referencias

### Tabla "Unplanned Demand"

**Consulta GSC**: Acceso a tabla unplanned demand para relaciones PV-PC  
**Respuesta ARES**: "La tabla unplanned demand es interna y no debería hacernos falta para el circuito que queremos conseguir"

**Aclaración técnica**: Navision escribirá indirectamente en esta tabla cuando GSC escriba en líneas de PV o PC

---

## Documentación de Referencia

### Enlaces Oficiales Microsoft
- **Documentación OData Dynamics**: https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/odata

### Archivos Internos Proyecto  
- **PDF técnico**: `ODATA para facturación de compras - SD 253091 - rev1.1.pdf`
- **Fecha documento**: 12 agosto 2025 (rev1.1 con campo crítico añadido)

---

## Contacto Técnico ARES

**Andrés Escribano de Mingo**  
Consultor de Sistemas de Información  
ARES CONOCIMIENTO DE NEGOCIO  
📧 AEscribano@ares-cn.es  
🏢 Paseo de la Castellana, 135, 7ª planta - 28046 Madrid  
🌐 www.ares-cn.es  
📞 Soporte: soporte@ares-cn.es

---

## Notas de Implementación

### Para Desarrolladores GSC
1. **Siempre usar IP autorizada**: 45.130.18.25
2. **Credenciales correctas**: Diessa_WS_basico únicamente
3. **Endpoints escritura**: Limitados a 4 específicos
4. **Matching data**: Priorizar ODATA_Movs_producto_cpa/vta
5. **Error handling**: Implementar manejo específico Error 500/401

### Próximos Pasos Técnicos
1. **Mapeo completo campos** disponibles en endpoints críticos
2. **Pruebas CRUD** en 4 endpoints de escritura  
3. **Desarrollo matching** usando endpoints movimientos productos
4. **Validación trazabilidad** PV-PC en entorno real

---

*Información suministrada por ARES - Configuración técnica confirmada 12 junio 2025*