import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="¿Siempre Has Querido Abrir Tu Pagina Web?."
      subtitle="Empieza Hoy."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Mas Informacion</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
