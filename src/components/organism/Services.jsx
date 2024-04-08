import imgService15 from "../../assets/img/15.webp";
import imgService16 from "../../assets/img/16.webp";
import imgService1 from "../../assets/img/1.webp";
import imgService3 from "../../assets/img/3.webp";
import ServiceOption from "../molecules/ServiceOption.jsx";
import SectionLayout from "../layouts/SectionLayout.jsx";

const services = [
    {
        "id": "service-1",
        "title": "Deposito",
        "content": [
            "Contamos con un depósito de 28.000 m² en una ubicación estratégica.",
            "Capacidad Total para almacenar 5.000 TEUS. "
        ],
        "url": imgService3,
    },
    {
        "id": "service-2",
        "title": "Logistica",
        "content": [
            "Zonas exclusivas de tránsito y estacionamiento.",
            "Servicios sanitarios exclusivos para choferes. Seguridad física 24hs."
        ],
        "url": imgService1,
    },
    {
        "id": "service-3",
        "title": "Reparaciones",
        "content": [
            "Realizamos trabajos de reparaciones de estructuras, soldaduras, lavado y reparación de la maquinaria en contenedores refrigerados."
        ],
        "url": imgService16,
    },
    {
        "id": "service-4",
        "title": "Transporte",
        "content": [
            "Realizamos traslados de contenedores a todo el país.",
            "Solicita tu cotización online o presencialmente en nuestras oficinas."
        ],
        "url": imgService15,
    }
]

function Services() {
    return (
        <SectionLayout id={"services"} className={"md:flex-wrap"}>
            {services.map(({id, title, content, url}, i) =>
                <ServiceOption
                    key={id}
                    title={title}
                    content={content}
                    url={url}
                    pos={i}
                />
            )}
        </SectionLayout>
    );
}

export default Services;