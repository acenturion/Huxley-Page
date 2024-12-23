import ContactOption from "../molecules/ContactOption.jsx";
import SectionLayout from "../layouts/SectionLayout.jsx";

export default function ContactUs() {
    return (
        <SectionLayout id={"contact"} className={"md:flex-col gap-4"}>
            <div className={"lg:flex-col"}>
                <h2 className={"text-3xl lg:text-5xl font-bold text-secondary-950 pb-4 text-left"}>Contactános</h2>
                <p className={"text-xl lg:text-2xl text-secondary-950 pb-4 text-left"}>Comunicate con nosotros para consultas de operaciones o ventas.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                <ContactOption
                    title={"Teléfono"}
                    text={"(011) 4303-2331"}
                    value={"43032331"}
                    type={"tel"}
                />
                <ContactOption
                    title={"Consultas"}
                    text={"consultas@huxleyargentina.com.ar"}
                    value={"consultas@huxleyargentina.com.ar"}
                    type={"email"}
                />
                <ContactOption
                    title={"Operaciones"}
                    text={"operaciones@huxleyargentina.com.ar"}
                    value={"operaciones@huxleyargentina.com.ar"}
                    type={"email"}
                />
            </div>
        </SectionLayout>
    )
}
