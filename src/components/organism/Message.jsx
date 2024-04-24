import SectionLayout from "../layouts/SectionLayout.jsx";

function Message() {
    return (
        <SectionLayout className={"bg-primary-600 py-8 gap-8 md:grid md:grid-cols-2"}>
            <div className={"text-xl lg:text-3xl"}>
                <p>
                    Lunes a Viernes de <span className={"font-bold"}>8 a 17:30 Hs.</span>
                </p>
                <p>
                    Sábados de <span className={"font-bold"}>7 a 11:45 Hs.</span>
                </p>
            </div>
            <div className={"text-xl font-bold lg:text-3xl"}>
                <p>No se necesita turno para retiro o entrega de contenedores.</p>
            </div>

        </SectionLayout>
    );
}

export default Message;