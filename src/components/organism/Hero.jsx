import ButtonContact from "../molecules/ButtonContact.jsx";
import bg from '../../assets/h-principal.webp'

function Hero() {
    return (
        <section className={
            'w-full ' +
            'h-[650px] ' +
            'md:h-screen ' +
            'md:max-h-screen ' +
            'flex ' +
            'flex-col ' +
            'md:items-start ' +
            'justify-center ' +
            'gap-16 ' +
            'bg-no-repeat ' +
            'px-4 ' +
            'md:px-24 ' +
            'bg-cover '
        }
         style={{backgroundImage: `url(${bg})`}}
        >
            <h1 className={"text-5xl md:text-7xl text-primary-600 bg-secondary-50 font-semibold md:font-bold md:px-4 text-center py-4"}>Tu
                depósito de confianza.</h1>
            <ButtonContact className={"md:text-3xl md:font-bold md:py-4 md:px-8"}/>
        </section>
    );
}

export default Hero;