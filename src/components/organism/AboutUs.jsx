import imgService17 from "../../assets/img/17.webp";
import imgService7 from "../../assets/img/7.webp";
import imgService14 from "../../assets/img/20.webp";
import SectionLayout from "../layouts/SectionLayout.jsx";
import GridImage from "../atom/GridImage.jsx";

function AboutUs() {
    return (
        <SectionLayout id={"about-us"} className={"lg:gap-8 md:flex-col lg:flex-row"}>
            <div className={"lg:w-1/2"}>
                <h2 className={"text-3xl md:text-5xl font-bold text-secondary-950 pb-4 mb-4 text-left"}>Sobre
                    nosotros</h2>
                <div className={"text-pretty text-left flex flex-col justify-start "}>
                    <p className={"text-xl lg:text-2xl text-secondary-950 pb-4 leading-relaxed"}>Somos una empresa con <span
                        className={"font-bold"}>amplia experiencia</span> en el rubro de almacenamiento, transporte,
                        logística, reparación.</p>
                    <p className={"text-xl lg:text-2xl text-secondary-950 pb-4 leading-relaxed"}>Contamos con <span
                        className={"font-bold"}>atención personalizada</span> para
                        todos nuestros clientes.</p>
                    <p className={"text-xl lg:text-2xl text-secondary-950 pb-4 leading-relaxed"}>Nuestro mayor capital es la <span
                        className={"font-bold"}>calidad humana</span> de todos nuestros trabajadores.</p>
                    <p className={"text-xl lg:text-2xl text-secondary-950 pb-4 leading-relaxed"}>Tenemos atención rápida y
                        directa <span
                            className={"font-bold"}>sin intermediarios</span>, realizamos presupuestos en el acto.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:gap-4 lg:w-1/2 h-[450px] md:h-[600px] rounded-2xl overflow-clip">
                <div className="grid grid-rows-2 gap-2 lg:gap-4 object-cover">
                    <div className={"overflow-clip"}>
                        <GridImage src={imgService7} alt="Imagen 1"/>
                    </div>
                    <div className={"overflow-clip"}>
                        <GridImage src={imgService14} alt="Imagen 2"/>
                    </div>
                </div>
                <div className={"bg-secondary-300 overflow-clip"}>
                    <GridImage src={imgService17} alt="Imagen 3"/>
                </div>
            </div>
        </SectionLayout>
    );
}

export default AboutUs;