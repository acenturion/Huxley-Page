import SectionLayout from "../layouts/SectionLayout.jsx";
import Container1 from "../Icons/Container1.jsx";
import Container2 from "../Icons/Container2.jsx";
import Container3 from "../Icons/Container3.jsx";

function ContainersType() {
    return (
        <SectionLayout
            className={"bg-primary-600 text-primary-white md:flex-col"}>
            <h2 className={"text-3xl md:text-4xl font-bold pb-4 mb-4 text-center"}>Tipos de contenedores y dimensiones.</h2>
            <div className={"text-center md:text-left md:justify-between md:items-center md:grid md:grid-cols-3 md:gap-8"}>
                <div className={"flex flex-col gap-4 justify-start items-center py-8"}>
                    <Container3/>
                    <p className={"text-xl font-semibold"}>Contenedores Dry en 20´ y 40´</p>
                </div>
                <div className={"flex flex-col gap-4 justify-start items-center py-8"}>
                    <Container2/>
                    <p className={"text-xl font-semibold"}>Contenedores Open Top en 20´ y 40´</p>
                </div>
                <div className={"flex flex-col gap-4 justify-start items-center py-8"}>
                    <Container1/>
                    <p className={"text-xl font-semibold"}>Contenedores Flatrack, Isotanques y Reefers en 20´ y 40´</p>
                </div>
            </div>
        </SectionLayout>
    );
}

export default ContainersType;