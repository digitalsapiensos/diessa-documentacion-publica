---
id: proceso-to-be
title: Proceso de Negocio Objetivo (TO BE)
sidebar_label: Proceso TO BE
---

# Proceso de Negocio Objetivo (TO BE)

## Visión General

El proceso objetivo automatiza las tareas manuales repetitivas mientras mantiene los puntos de control y validación humana donde aportan valor. La solución se basa en la integración de tecnologías de IA, automatización con n8n y la API de Navision.

## Flujo Automatizado Propuesto

```mermaid
graph TD
    A[Recepción Automática Facturas] --> B[Extracción IA/OCR]
    B --> C[Normalización Datos]
    C --> D[Identificación Albaranes]
    
    D --> E{Búsqueda Automática API}
    E -->|Campo Nº Albarán Proveedor| F[Match Directo]
    E -->|Sin Match Directo| G[Algoritmo Multi-nivel]
    
    G --> H[Fuzzy Matching]
    H --> I[Referencias Cruzadas]
    I --> J[Scoring Combinado]
    
    F --> K{Validación Automática}
    J --> K
    
    K -->|Match > 85%| L[Procesamiento Automático]
    K -->|Match 60-85%| M[Revisión Humana]
    K -->|Match < 60%| N[Excepción Manual]
    
    L --> O[Crear Borrador Factura]
    M --> P{Validación Olga}
    P -->|Aprobado| O
    P -->|Rechazado| Q[Ajuste Manual]
    
    O --> R[Vincular Albaranes]
    R --> S[Actualizar Estados]
    S --> T[Notificación Completado]
    
    N --> U[Cola Trabajo Manual]
    Q --> U
```

