import logoImg from '../../assets/logo-huxley.png';

const Logo = () => (
    <a href="#" className={""}>
        <img
            src={logoImg}
            alt="Huxley Logo"
            width={"190px"}
            height={"90px"}
            className="aspect-[16/9] object-contain"
        />
    </a>
);

export default Logo;