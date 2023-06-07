import { Section } from '../layout/Section';
import OptionCard from '../cards/cards';
import Ti from '../Ti/ti';
import Home from '../cardsti/cardsti';
import ContactCard from '../contactCard/contac';
import styles from './VerticalFeatures.module.css';

const VerticalFeatures = () => (
  <Section
    title="Principales Servicios"
    description=""
  >
    <div className={styles.container}>
      <div className={styles.optionCardContainer}>
        <OptionCard
          image="/consultoria.jpeg"
          title="Conocimiento Aplicado"
          sectionId='consultoria'
        />
        <OptionCard
          image="/ti.jpg"
          title="Tecnologias De La Informacion"
          sectionId='tic'
        />
        <OptionCard
          image="/laptop.jpeg"
          title="Hardware"
          sectionId='consultoria'
        />
        <OptionCard
          image="/impresora.jpeg"
          title="Hardware"
          sectionId='consultoria'
        />
      </div>
    </div>
    <Ti />
    <Home />
    <ContactCard />
  </Section>
);

export { VerticalFeatures };
