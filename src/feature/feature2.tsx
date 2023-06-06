import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSpring, animated } from 'react-spring';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  button: string;
  buttonLink: string; // The URL of the page you want to link to
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const springProps = useSpring({
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    opacity: isHovered ? 2 : 100,
  });

  return (
    <div
      className="mt-20 flex flex-wrap items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'pointer' }}
    >
      <animated.div
        className="w-full sm:w-1/2 text-center sm:px-6"
        style={springProps}
      >
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
        <div className="flex justify-center mt-6 font-bold">
          <Link href={props.buttonLink}>
            <a>{props.button}</a>
          </Link>
        </div>
      </animated.div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
