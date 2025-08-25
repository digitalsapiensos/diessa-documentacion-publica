---
id: como-funciona-diessa
title: Cómo Funciona DIESSA
sidebar_label: Cómo Funciona DIESSA
sidebar_position: 1
---

# Cómo Funciona DIESSA: El Ecosistema de Facturas y Albaranes

*Una guía completa para entender los procesos internos de reconciliación documental*

## PARTE I: FUNDAMENTOS CONCEPTUALES

### Capítulo 1: El Mundo de los Recambios de Vehículo Industrial

DIESSA no es una empresa cualquiera. Con 50 años en el sector del vehículo industrial, se ha consolidado como referente en recambios alternativos de calidad equivalente para camiones y autobuses. Esta longevidad no es casual: refleja la complejidad inherente de un negocio donde cada pieza, cada código, cada proveedor forma parte de un ecosistema intrincado que requiere conocimiento especializado.

**Las dimensiones reales de la operación** revelan la escala del desafío: DIESSA gestiona aproximadamente **180.000 piezas anuales** distribuidas en **25-65 contenedores** importados principalmente desde Shanghai y Taipei. El almacén principal en Alcalá de Henares es **gestionado por Maersk**, cuenta con **3.000 metros cuadrados** de superficie y **12-13 metros de altura**, operando al **85% de su capacidad** y albergando cerca de **5.000 referencias diferentes**.

El universo de piezas que maneja DIESSA es extraordinariamente complejo. Un simple "espejo izquierdo" puede tener decenas de variantes según el modelo de camión (Mercedes Actros, Volvo FH, Scania R-Series), el año de fabricación, e incluso el mercado de destino. Esta complejidad se multiplica cuando se considera que DIESSA no fabrica piezas, sino que las obtiene de una red de más de 50 proveedores especializados, procesando **120 pedidos diarios** en promedio con un equipo de **16 trabajadores operando mayoritariamente en remoto**.

**La distinción crítica**: DIESSA opera como intermediario inteligente entre fabricantes/distribuidores y clientes finales. No es un almacén masivo, sino un orquestador logístico que debe conocer exactamente qué proveedor tiene qué pieza, a qué precio, y en qué plazo de entrega. Esta operación se extiende geográficamente: servicio diario a España y Portugal, y operaciones internacionales en Arabia Saudí y Marruecos mediante envíos directos desde fábricas asiáticas.

### Capítulo 2: La Estructura Organizacional Especializada

Para comprender completamente los procesos de facturas y albaranes, es esencial entender cómo se organiza internamente DIESSA y qué responsabilidades tiene cada área funcional.

#### **El Equipo: 16 Profesionales Especializados**

DIESSA opera con un **equipo de 16 trabajadores** distribuidos principalmente en modalidad remota, cada uno con responsabilidades específicas optimizadas para diferentes aspectos del negocio de recambios. Esta especialización no es accidental: refleja la complejidad operativa que requiere conocimiento profundo en múltiples áreas.

#### **División Funcional por Especialización**

**ÁREA ADMINISTRATIVA - El Motor de la Reconciliación:**

La administración de DIESSA está estructurada para manejar eficientemente dos tipos fundamentalmente diferentes de facturas:

- **Responsable de Facturas de Material**: Gestiona exclusivamente facturas de **piezas físicas** (camiones, autobuses). Esta posición requiere reconciliación constante con albaranes registrados en Navision, procesando 180-200 facturas mensuales de 50-60 proveedores especializados.

- **Responsable de Facturas de Servicios**: Maneja facturas de **servicios generales** (mecánicos, servicios externos, gastos operativos). Su proceso es más directo al no requerir verificación contra recepciones físicas.

- **Supervisión Contable**: Gestiona **casos especiales** (combustibles, alquileres, facturas fuera del circuito automático de Navision). Combina supervisión administrativa con actividad comercial activa.

**ÁREA COMERCIAL - Generadores de Demanda:**

El equipo comercial está distribuido geográficamente para optimizar cobertura de mercados:

- **Comercial Zona Norte**: Especialista en mercado español septentrional con décadas de experiencia
- **Comerciales Remotos**: Personal comercial ubicado estratégicamente en mercados internacionales (Marruecos, otros países)
- **Coordinación Internacional**: Gestión de mercados específicos (Reino Unido, Arabia Saudí)

**ÁREA OPERATIVA - Ejecutores del Flujo:**

- **Gestores de Pedidos**: Personal especializado en convertir oportunidades comerciales en operaciones logísticas concretas. Su función incluye: crear ofertas técnicas → convertir ofertas aceptadas en pedidos de venta → generar pedidos de compra correspondientes → registrar albaranes de recepción.

- **Coordinación Logística**: Gestión de la interface con Maersk para operaciones de almacén y distribución.

### Capítulo 3: El Proceso Central - De la Venta a la Reconciliación

El proceso operativo de DIESSA sigue un patrón específico que está íntimamente vinculado con la estructura de Navision y que explica por qué la reconciliación de facturas es tan compleja.

#### **El Flujo Operativo Estándar**

**PASO 1: GENERACIÓN DE DEMANDA**
Cuando un cliente solicita una pieza específica, el proceso comienza con la **identificación precisa** del componente requerido. Esto no es trivial: un cliente puede solicitar "espejo retrovisor para Mercedes Actros 2015", pero existen múltiples variantes (manual/eléctrico, calefactado/sin calefacción, derecho/izquierdo, diferentes acabados). El comercial debe traducir esta solicitud en códigos específicos del sistema.

**PASO 2: CREACIÓN DE OFERTA EN NAVISION**
Una vez identificada la pieza exacta, se crea una **oferta de venta** en Navision. Esta oferta incluye: código de producto DIESSA, descripción técnica, precio de venta, plazo de entrega estimado, condiciones comerciales. En este punto, el sistema ya está "reservando mentalmente" la necesidad de compra futura.

**PASO 3: CONVERSIÓN A PEDIDO DE VENTA** 
Cuando el cliente acepta la oferta, esta se convierte en **pedido de venta** en Navision. El sistema genera automáticamente un número de referencia PV[número] que será crítico para la trazabilidad posterior.

**PASO 4: EVALUACIÓN DE STOCK Y GENERACIÓN DE PEDIDO DE COMPRA**
Navision evalúa si la pieza está en stock. Si no está disponible (caso más frecuente), **genera automáticamente un pedido de compra** dirigido al proveedor correspondiente. Este pedido recibe un número PC[número] que está matemáticamente vinculado al PV[número] original.

**PASO 5: ENVÍO DE PEDIDO AL PROVEEDOR**
El pedido de compra se envía al proveedor mediante el canal correspondiente (email, portal del proveedor, fax). En este punto, DIESSA está comprometida tanto con el cliente (entrega prometida) como con el proveedor (compra confirmada).

**PASO 6: RECEPCIÓN FÍSICA Y REGISTRO DE ALBARÁN**
Cuando el proveedor envía la mercancía, **Maersk recibe físicamente** los materiales en el almacén de Alcalá de Henares. El personal de DIESSA registra en Navision un **albarán de compra** que documenta qué se ha recibido realmente (cantidades, códigos, estado de los materiales).

**PASO 7: ENVÍO AL CLIENTE Y ALBARÁN DE VENTA**
Una vez verificada la calidad de los materiales recibidos, se procede al **envío al cliente** con el registro correspondiente del **albarán de venta** en Navision. En este punto, el ciclo operativo básico está completo desde la perspectiva del cliente.

**PASO 8: RECEPCIÓN DE FACTURA DEL PROVEEDOR**
Días o semanas después del envío del albarán, **el proveedor envía su factura** a DIESSA. Esta factura puede llegar en formato PDF por email, papel por correo postal, o mediante portales web específicos del proveedor. **Aquí comienza el problema de reconciliación**: la factura del proveedor debe ser verificada contra los albaranes registrados en Navision.

#### **El Desafío de la Reconciliación Manual**

**LA COMPLEJIDAD EXPONENCIAL:**

La persona responsable de facturas de material debe verificar que:
1. **La factura corresponde a albaranes reales** registrados en Navision
2. **Las cantidades facturadas coinciden** con las cantidades recibidas
3. **Los precios facturados** corresponden a los acordados en el pedido original
4. **No hay duplicaciones** (el mismo albarán facturado múltiples veces)
5. **Los códigos de productos** coinciden entre la nomenclatura del proveedor y los códigos internos DIESSA

**EL PROBLEMA DE LAS 196 VARIACIONES:**

Cada proveedor tiene su propio sistema de referencias para identificar productos. Leo Industrial puede llamar "A25-1234" a un albarán, mientras que en Navision está registrado como "ALBARÁN A25-1234" o "A25-001234" o "ALB-A25-1234". Estas variaciones aparentemente menores se convierten en un problema exponencial cuando se multiplican por 50+ proveedores y 180+ facturas mensuales.

## PARTE II: LA REALIDAD OPERATIVA ACTUAL

### Capítulo 4: El Proceso Manual Existente

Para apreciar completamente la dimensión del desafío que enfrenta DIESSA en la reconciliación de facturas, es necesario observar en detalle cómo opera actualmente **Olga**, la responsable de facturas de material.

#### **El Día Típico de Reconciliación**

**MAÑANA (9:00-12:00): RECEPCIÓN Y CLASIFICACIÓN**

Olga comienza cada día revisando **entre 6 y 12 facturas** que han llegado durante las últimas 24 horas mediante email, portales de proveedores, o correo físico. Su primera tarea es **clasificación por urgencia**: facturas con vencimiento próximo (48-72 horas) reciben prioridad absoluta para evitar recargos por mora.

**El proceso de clasificación** no es trivial. Una factura de Leo Industrial puede contener entre 1 y 25 albaranes diferentes, cada uno con múltiples líneas de productos. Olga debe evaluar visualmente si la factura "tiene sentido" basándose en su conocimiento histórico de patrones de pedido del proveedor.

**MEDIODÍA (12:00-15:00): BÚSQUEDA Y VERIFICACIÓN**

Para cada factura, Olga abre **Navision** y realiza búsquedas manuales utilizando:

1. **Búsqueda por número de albarán del proveedor**: Esto requiere múltiples intentos con diferentes variaciones (con/sin espacios, con/sin guiones, con/sin prefijos).

2. **Búsqueda por proveedor y fechas**: Cuando la búsqueda directa falla, Olga filtra todos los albaranes del proveedor en un rango de fechas de ±30 días de la fecha de la factura.

3. **Búsqueda por importe aproximado**: Como último recurso, busca albaranes con importes similares a los líneas de la factura (±10% de tolerancia).

**TARDE (15:00-18:00): RECONCILIACIÓN Y REGISTRO**

Una vez localizados los albaranes correspondientes, Olga debe:

1. **Verificar línea por línea** que los códigos de productos coinciden
2. **Validar cantidades** facturadas vs recibidas
3. **Comprobar precios** unitarios y descuentos aplicados
4. **Crear el borrador de factura** en Navision vinculando cada línea con su albarán correspondiente
5. **Registrar observaciones** sobre discrepancias para resolución posterior

#### **Casos Especiales y Excepciones**

**FACTURAS PARCIALES:**
Frecuentemente, un proveedor envía múltiples albaranes pero factura solo algunos de ellos. Olga debe identificar exactamente qué albaranes están incluidos en cada factura para evitar duplicaciones futuras.

**FACTURAS CONSOLIDADAS:**
Algunos proveedores envían una factura mensual que agrupa múltiples albaranes enviados durante 30 días. Estas facturas pueden incluir hasta 40-50 albaranes diferentes, requiriendo verificación individual de cada uno.

**DISCREPANCIAS DE PRECIO:**
Cuando los precios facturados no coinciden exactamente con los del pedido original (por ajustes posteriores, descuentos aplicados, o errores), Olga debe documentar y resolver cada discrepancia antes de proceder.

**PRODUCTOS NO IDENTIFICADOS:**
Ocasionalmente, el proveedor incluye productos en la factura que no aparecen en los albaranes registrados. Estos casos requieren investigación manual exhaustiva para determinar si se trata de errores del proveedor, omisiones en el registro de albaranes, o productos adicionales no solicitados.

### Capítulo 5: Las Limitaciones del Sistema Actual

#### **Escalabilidad y Sostenibilidad**

El proceso manual actual presenta limitaciones estructurales que afectan tanto la eficiencia operativa como la escalabilidad del negocio:

**DEPENDENCIA DE CONOCIMIENTO TÁCITO:**
El éxito del proceso actual depende enormemente del **conocimiento acumulado de Olga** sobre patrones de comportamiento de cada proveedor. Este conocimiento incluye: formatos típicos de numeración de albaranes, frecuencia de envío de facturas, productos más comunes, rangos de precios esperados. Este conocimiento es **no transferible** y representa un riesgo operativo significativo.

**TIEMPO DE PROCESAMIENTO:**
Una factura simple (1-3 albaranes) requiere **15-25 minutos** de procesamiento manual. Una factura compleja (10+ albaranes) puede consumir **90-120 minutos**. Con 180-200 facturas mensuales, esto representa **40-60 horas mensuales** de trabajo administrativo altamente especializado.

**TASA DE ERROR:**
Aunque Olga es extraordinariamente competente, la revisión manual de miles de líneas de datos inevitablemente introduce errores. Los errores más comunes incluyen: **vinculación incorrecta** de líneas de factura con albaranes, **omisión de descuentos** aplicados por el proveedor, **duplicación accidental** de registros.

**IMPOSIBILIDAD DE AUDITORÍA AUTOMÁTICA:**
El proceso manual actual hace prácticamente imposible auditar sistemáticamente la precisión de la reconciliación. No hay métricas automáticas de: tiempo promedio por factura, tasa de discrepancias por proveedor, identificación de patrones de error.

#### **El Impacto en el Crecimiento del Negocio**

**LIMITACIÓN DE CAPACIDAD:**
El cuello de botella administrativo actual limita la capacidad de DIESSA para: **incrementar el número de proveedores** (cada nuevo proveedor añade complejidad exponencial), **expandir geográficamente** (más mercados implican más facturas), **diversificar productos** (cada nueva línea de producto puede tener patrones de facturación únicos).

**COSTO DE OPORTUNIDAD:**
El tiempo que Olga dedica a reconciliación manual es tiempo que **no puede dedicar a actividades de mayor valor añadido**: análisis de rentabilidad por proveedor, identificación de oportunidades de negociación de precios, optimización de términos de pago, desarrollo de relaciones estratégicas con proveedores.

## PARTE III: LA OPORTUNIDAD DE TRANSFORMACIÓN

### Capítulo 6: Visión del Estado Futuro

El proyecto "DIESSA - Administración con IA" no pretende simplemente automatizar el proceso existente, sino **rediseñar fundamentalmente** la experiencia de reconciliación para crear un sistema que sea:

#### **Inteligente y Adaptativo**

**APRENDIZAJE AUTOMÁTICO DE PATRONES:**
El sistema aprenderá automáticamente los patrones de nomenclatura específicos de cada proveedor, eliminando la dependencia del conocimiento tácito individual. Esto incluye: **normalización automática** de formatos de albarán, **predicción de correspondencias** basada en históricos, **detección de anomalías** en facturas.

**CONTEXTUALIZACIÓN INTELIGENTE:**
El sistema considerará automáticamente el contexto de cada factura: **historial del proveedor**, **patrones estacionales**, **rangos de precios esperados**, **frecuencia típica de facturación**.

#### **Eficiente y Escalable**

**PROCESAMIENTO PARALELO:**
Múltiples facturas podrán ser procesadas simultáneamente, reduciendo el tiempo de procesamiento de 15-25 minutos por factura a **2-3 minutos** por factura, incluyendo validación humana.

**ESCALABILIDAD HORIZONTAL:**
El sistema podrá manejar el crecimiento del negocio sin incremento proporcional de recursos humanos: **100+ proveedores** sin incremento de complejidad, **500+ facturas mensuales** con el mismo equipo administrativo.

#### **Transparente y Auditable**

**TRAZABILIDAD COMPLETA:**
Cada decisión de reconciliación será **completamente trazable**: qué reglas se aplicaron, qué confianza tiene el sistema en cada match, qué intervención humana fue requerida.

**MÉTRICAS AUTOMÁTICAS:**
El sistema generará automáticamente métricas operativas: **tiempo promedio de reconciliación por proveedor**, **tasa de éxito de matching automático**, **tendencias de discrepancias**, **proveedores que requieren mayor atención manual**.

### Capítulo 7: La Implementación Estratégica

#### **Fase 1: Automatización del Matching Básico**

**OBJETIVO**: Automatizar el 70-80% de casos simples (facturas con 1-3 albaranes, formatos estándar, sin discrepancias de precio).

**COMPONENTES**:
- **Extractor de datos de facturas PDF** utilizando visión por computador + LLM
- **Motor de matching** con reglas determinísticas + fuzzy matching
- **Interface de validación** para casos que requieren revisión humana

**RESULTADO ESPERADO**: Reducción del tiempo de procesamiento manual en **60-70%** para casos simples.

#### **Fase 2: Gestión de Casos Complejos**

**OBJETIVO**: Manejar automáticamente facturas consolidadas, parciales, y con discrepancias menores.

**COMPONENTES**:
- **Análisis de patrones avanzado** por proveedor
- **Gestión de discrepancias automática** dentro de tolerancias predefinidas
- **Workflows de escalación** para casos que requieren intervención especializada

**RESULTADO ESPERADO**: Automatización del **85-90%** de todos los casos de reconciliación.

#### **Fase 3: Inteligencia Predictiva**

**OBJETIVO**: Anticipar problemas antes de que ocurran y optimizar relaciones con proveedores.

**COMPONENTES**:
- **Detección de anomalías** en patrones de facturación
- **Alertas proactivas** sobre discrepancias recurrentes
- **Análisis de rentabilidad** por proveedor y producto
- **Recomendaciones de optimización** de procesos

**RESULTADO ESPERADO**: Transformación de reactivo a **proactivo** en la gestión de relaciones con proveedores.

---

*Para información técnica específica sobre APIs y implementación, consulta la sección [Sistemas DIESSA](/docs/sistemas-diessa).*