import logoImg from '../../assets/logo-huxley.png';

const Logo = ({className}) => (
    <a href="#">
        <img
            src={logoImg}
            alt="Huxley Logo"
            width={"266"}
            height={"66"}
            className={"aspect-auto " + className}
        />
    </a>
);

export default Logo;