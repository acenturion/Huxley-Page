import ButtonContact from "../molecules/ButtonContact.jsx";
import bg from '../../assets/h-principal.webp'

function Hero() {
    return (
        <section className={
            'w-full ' +
            'h-[90vh] ' +
            'md:h-[85vh] ' +
            'flex ' +
            'flex-col ' +
            'items-center lg:items-start ' +
            'justify-start ' +
            'gap-16 ' +
            'bg-no-repeat ' +
            'px-4 ' +
            'md:px-24 ' +
            'pt-16 ' +
            'relative ' +
            'bg-[-710px_-15px] ' +
            'lg:bg-[-80px_-15px] ' +
            '2xl:bg-right-top ' +
            '2xl:bg-cover'
        }
                 style={{backgroundImage: `url(${bg})`}}
        >
            <h1 className={"text-5xl md:text-7xl lg:text-8xl xl:text-9xl lg:font-black text-primary-700 font-bold md:px-4 text-center lg:text-left 2xl:pt-16"}>Tu
                depósito de confianza.</h1>
            <ButtonContact className={"lg:hidden md:text-2xl lg:text-3xl lg:font-bold md:py-4 md:px-8 "}/>
        </section>
    );
}

export default Hero;