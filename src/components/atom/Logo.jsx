import logoImg from '../../assets/logo-huxley.png';

const Logo = ({width, height}) => (
    <a href="#" className={""}>
        <img
            src={logoImg}
            alt="Huxley Logo"
            width={width}
            height={height}
            className="aspect-[16/9] object-contain"
        />
    </a>
);

export default Logo;