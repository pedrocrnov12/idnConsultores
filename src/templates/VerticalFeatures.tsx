
import { Section } from '../layout/Section';
import OptionCard from '../cards/cards';
import Ti from '../Ti/ti';
import Home from '../cardsti/cardsti';
import ContactCard from '../contactCard/contac';

const VerticalFeatures = () => (
  <Section
    title="Principales Servicios"
    description=""
  >
    <div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
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
    </div>
        <Ti></Ti>
      <div>
        <Home></Home>
      </div>
      <div>
        
      <ContactCard></ContactCard>
      </div>
  </Section>


  
);

export { VerticalFeatures };
