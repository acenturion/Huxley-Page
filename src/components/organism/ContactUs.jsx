import ContactOption from "../molecules/ContactOption.jsx";
import SectionLayout from "../layouts/SectionLayout.jsx";

export default function ContactUs() {
    return (
        <SectionLayout id={"contact"} className={"md:flex-col"}>
            <div className={"lg:flex-col mb-8"}>
                <h2 className={"text-3xl lg:text-5xl font-bold text-secondary-950 pb-4 mb-4 text-left"}>Contactanos</h2>
                <p className={"text-xl lg:text-2xl text-secondary-950 pb-4 text-left"}>Ponte en contacto con nuestro equipo para consultas de operaciones o ventas.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
                <ContactOption
                    title={"Telefono"}
                    text={"(011) 4303-2331"}
                    type={"tel"}
                />
                <ContactOption
                    title={"Móvil"}
                    text={"+54 9 11-5301-6754"}
                    type={"tel"}
                />

                <ContactOption
                    title={"Consultas"}
                    text={"consultas@huxleyargentina.com.ar"}
                    type={"email"}
                />
                <ContactOption
                    title={"Operaciones"}
                    text={"operaciones@huxleyargentina.com.ar"}
                    type={"email"}
                />
            </div>

        </SectionLayout>
    )
}
