import { ReactNode } from 'react';
import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul className="navbar flex items-center font-medium text-xl text-gray-800">
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }

        /* Add the hover animation */
        .navbar :global(a:hover) {
          position: relative;
        }

        .navbar :global(a:hover::after) {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background-color: black;
          transform: scaleX(0);
          transition: transform 0.3s ease-in-out;
        }

        .navbar :global(a:hover::after) {
          transform: scaleX(1);
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
