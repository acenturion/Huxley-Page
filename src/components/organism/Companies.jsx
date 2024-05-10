import hapagLogo from '../../assets/brands/Hapag_lloyd_logo.svg'
import hsLogo from '../../assets/brands/HS_logo.svg'
import maesrkLogo from '../../assets/brands/Maersk_logo.svg'
import mediterraneanLogo from '../../assets/brands/Mediterranean_logo.svg'
import tritonLogo from '../../assets/brands/Triton_logo.svg'
import SectionLayout from "../layouts/SectionLayout.jsx";

function Companies() {
    const brands = [
        {id: 1, name: "Hapag Lloyd", img: hapagLogo},
        {id: 2, name: "Hamburg Sud", img: hsLogo},
        {id: 3, name: "Maesrk", img: maesrkLogo, customClass: "h-full p-4"},
        {id: 5, name: "Triton", img: tritonLogo},
        {id: 4, name: "Mediterranean shipping company", img: mediterraneanLogo, customClass: "h-full p-4 md:p-0"},
    ]
    return (
        <SectionLayout id={"companies"} className={"bg-primary-600 gap-8 md:flex-col lg:flex-row"}>
            <div
                className={"flex flex-col text-center lg:text-left items-center justify-center lg:items-start lg:w-fit text-secondary-50"}>
                <p className={"text-lg md:text-2xl"}>Trabajamos con<br/><span
                    className={"text-2xl md:text-3xl font-semibold text-nowrap"}>Los siguientes clientes</span>
                </p>
            </div>
            <div className={"grid grid-cols-2 gap-4 lg:grid-cols-5 w-full"}>
                {brands.map(brand => {
                    return (
                        <div key={brand.id} className={"w-full h-[100px] flex justify-center items-center object-fill"}>
                            <img
                                 className={"w-full transition hover:scale-110 focus:scale-110 " + brand?.customClass }
                                 alt={brand.name + " logo"} src={brand.img}/>
                        </div>
                    );
                })}
            </div>
        </SectionLayout>
    );
}

export default Companies;