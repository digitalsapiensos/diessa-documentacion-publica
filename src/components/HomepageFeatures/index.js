import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentación DIESSA',
    emoji: '🏢',
    description: (
      <>
        Explicación completa de cómo funciona DIESSA internamente: procesos de facturas, 
        albaranes, estructura organizacional y APIs ODATA de Navision.
      </>
    ),
  },
  {
    title: 'Procesos de Negocio',
    emoji: '⚙️',
    description: (
      <>
        Análisis detallado del proceso actual (AS IS) y propuesta de automatización (TO BE)
        con casos específicos de proveedores principales.
      </>
    ),
  },
  {
    title: 'Sistema de Pruebas',
    emoji: '🧪',
    description: (
      <>
        Banco de 15 facturas reales de 6 proveedores con casos de estudio,
        bitácora técnica y resultados de implementación.
      </>
    ),
  },
];

function Feature({emoji, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureEmoji}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}