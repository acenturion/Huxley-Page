import ButtonContact from "../molecules/ButtonContact.jsx";
import portada from '../../assets/portada.jpg'

import Logo from "../atom/Logo.jsx";

function Hero() {
    return (
        <section className={
            'w-full ' +
            'h-[90vh] ' +
            'max-h-screen ' +
            'flex ' +
            'flex-col ' +
            'items-center md:items-start ' +
            'justify-start lg:justify-center ' +
            'gap-20 ' +
            'bg-no-repeat ' +
            'px-4 ' +
            'md:px-24 ' +
            'pt-16 lg:pt-0 ' +
            'bg-cover ' +
            'md:bg-[length:165%] lg:bg-[length:100%]'
        }
                 style={{backgroundImage: `url(${portada})`}}
        >
            <Logo className={"w-64 lg:w-[350px]"}/>
            <h1 className={"text-5xl md:text-7xl lg:text-8xl lg:font-black text-secondary-50 font-bold text-center md:text-left"}>Tu
                depósito <br/> de confianza.</h1>
            <ButtonContact className={"md:text-2xl lg:text-3xl lg:font-bold md:py-2 md:px-6 lg:py-4 lg:px-6"}/>
        </section>
    );
}

export default Hero;