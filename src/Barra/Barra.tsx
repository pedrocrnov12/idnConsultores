import Link from 'next/link';
import { Background } from '../background/Background';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';

const Heros = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />} showMenu={true}>
        <li>
          <Link href="/">
            <a>Servicios</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Acerca De Nosotros</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Casos de éxito</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contactanos</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Heros };
