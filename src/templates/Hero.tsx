import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  // Define the animation properties using useSpring
  const animationProps = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    config: {
      tension: 20,
      friction: 20,
    },
  });

  // Set visible to true after the component has mounted to trigger the animation
  React.useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
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

      <Section yPadding="pt-20 pb-3">
        <animated.div style={animationProps}>
          <HeroOneButton
            title={
              <>
                {'Aliado estratégico para innovar en Tu \n'}
                <span className="text-primary-500">Negocio u Organización.</span>
              </>
            }
            description=""
            button={
              <Link href="/">
                <a>
                  <Button xl>Contactanos</Button>
                </a>
              </Link>
            }
          />
        </animated.div>
      </Section>
    </Background>
  );
};

export { Hero };
