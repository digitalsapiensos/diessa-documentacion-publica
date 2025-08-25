// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Documentación DIESSA',
      items: [
        {
          type: 'doc',
          id: 'proceso-negocio/como-funciona-diessa',
          label: 'Cómo Funciona DIESSA',
        },
        {
          type: 'doc',
          id: 'sistemas-diessa/odata-facturacion-compras-entorno-pruebas',
          label: 'ODATA Facturación Compras - Entorno de Pruebas',
        },
      ],
    },
    {
      type: 'category',
      label: 'Documentación del Proyecto',
      items: [
        {
          type: 'doc',
          id: 'metodo-gsc/documentacion-proyecto',
          label: 'Proyecto Admón con IA',
        },
        {
          type: 'doc',
          id: 'proceso-negocio/proceso-as-is',
          label: 'Proceso AS IS',
        },
        {
          type: 'doc',
          id: 'proceso-negocio/proceso-to-be',
          label: 'Proceso TO BE',
        },
        {
          type: 'doc',
          id: 'metodo-gsc/esquema-factura-compra',
          label: 'Esquema Factura Compra',
        },
        {
          type: 'category',
          label: 'Proveedores',
          items: [
            {
              type: 'doc',
              id: 'proceso-negocio/proveedores',
              label: 'Catálogo de Proveedores',
            },
            {
              type: 'doc',
              id: 'proceso-negocio/proveedores/dieseltechnic',
              label: 'Diesel Technic',
            },
            {
              type: 'doc',
              id: 'proceso-negocio/proveedores/leo-industrial',
              label: 'Leo Industrial SA',
            },
            {
              type: 'doc',
              id: 'proceso-negocio/proveedores/sampa-iberica',
              label: 'Sampa Ibérica S.L.',
            },
          ],
        },
        {
          type: 'doc',
          id: 'metodo-gsc/banco-pruebas',
          label: 'Sistema de Pruebas',
        },
        {
          type: 'doc',
          id: 'metodo-gsc/bitacora-pruebas',
          label: 'Bitácora de Pruebas',
        },
      ],
    },
    {
      type: 'doc',
      id: 'estado-proyecto/linea-temporal',
      label: 'Línea Temporal',
    },
  ],
};

export default sidebars;