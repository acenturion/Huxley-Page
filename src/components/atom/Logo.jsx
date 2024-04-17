import logoImg from '../../assets/logo-huxley.png';

const Logo = ({className}) => (
    <a href="#" aria-label={"Logo huxley S.A"}>
        <img
            src={logoImg}
            alt="Huxley Logo"
            width={"288"}
            height={"66"}
            className={"aspect-[288/66] " + className}
        />
    </a>
);

export default Logo;