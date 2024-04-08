import SectionLayout from "../layouts/SectionLayout.jsx";
import map from '../../assets/map.png'

function LocateUs() {
    return (
        <SectionLayout id={"locate-us"} className={"gap-4 lg:justify-center"}>
            <a
                href={"https://maps.app.goo.gl/biiyFGnTCBgZpfWm7"}
                target="_blank"
                rel="noopener"
                className={"w-full max-w-[600px] h-[400px] border border-primary-600 bg-primary-200 overflow-clip shadow-lg"}>
                <img className={"w-full h-full object-cover transition hover:scale-110 focus:scale-105"}
                     alt={"Mapa donde se encuentra Huxley"} src={map}/>
            </a>
            <div className={"text-left p-4"}>
                <div className={"border-b border-primary-600 pb-4 mb-8"}>
                    <h3 className={"text-2xl lg:text-4xl text-secondary-950 pb-4"}>Dirección</h3>
                    <p className={"text-xl lg:text-2xl text-secondary-950 pb-4"}>Av. Suarez 2350, Barracas, CABA.</p>
                </div>
                <div>
                    <h3 className={"text-2xl lg:text-4xl text-secondary-950 pb-4"}>Horarios</h3>
                    <p className={"text-xl lg:text-2xl text-secondary-950 pb-2"}>
                        Lunes a Viernes de <strong>8 a 17:30 Hs</strong>.
                    </p>
                    <p className={"text-xl lg:text-2xl text-secondary-950 pb-2"}>
                        Sábados de <strong>7 a 11:45 Hs</strong>.
                    </p>
                    <p className={"text-xl lg:text-2xl text-secondary-950 pb-4"}>
                        <strong>No se necesita turno para retiro o entrega de contenedores.</strong>
                    </p>
                </div>
            </div>
        </SectionLayout>
    );
}

export default LocateUs;