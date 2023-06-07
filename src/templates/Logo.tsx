import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '150' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img
        src="/png.png" // Reemplaza esta ruta con la ruta o URL del archivo PNG
        alt="Logo"
        width={size}
        height={size}
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
