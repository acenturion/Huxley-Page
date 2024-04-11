import logoImg from '../../assets/logo-huxley.png';

const Logo = ({className}) => (
    <a href="#">
        <img
            src={logoImg}
            alt="Huxley Logo"
            width={"180px"}
            height={"66px"}
            className={"aspect-auto " + className}
        />
    </a>
);

export default Logo;