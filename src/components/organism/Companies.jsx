import hapagLogo from '../../assets/brands/Hapag_lloyd_logo.svg'
import hsLogo from '../../assets/brands/HS_logo.svg'
import maesrkLogo from '../../assets/brands/Maersk_Group_Logo 1.svg'
import mediterraneanLogo from '../../assets/brands/Mediterranean_logo.svg'
import SectionLayout from "../layouts/SectionLayout.jsx";

function Companies() {
    return (
        <SectionLayout id={"companies"} className={"bg-primary-600 gap-4 md:flex-col lg:flex-row"}>
            <div className={"flex flex-col text-center lg:text-left items-center justify-center lg:items-start lg:w-fit text-secondary-50"}>
                <p className={"text-lg md:text-2xl"}>Trabajamos con<br/><span
                    className={"text-2xl md:text-3xl font-semibold text-nowrap"}>Los siguientes clientes</span></p>
            </div>
            <div className={"grid grid-cols-2 items-center justify-items-center gap-4 lg:grid-cols-4 w-full"}>
                <img width={"250"} height={"100"} className={"py-4 transition hover:scale-110 focus:scale-110"}
                     alt={"Hapag company logo"} src={hapagLogo}/>
                <img width={"250"} height={"100"} className={"py-4 transition hover:scale-110 focus:scale-110"}
                     alt={"Hamburg Sud company logo"} src={hsLogo}/>
                <img width={"250"} height={"100"} className={"py-4 transition hover:scale-110 focus:scale-110"}
                     alt={"Maersk company logo"} src={maesrkLogo}/>
                <img width={"250"} height={"100"} className={"py-4 transition hover:scale-110 focus:scale-110"}
                     alt={"mediterranean shipping company logo"} src={mediterraneanLogo}/>
            </div>
        </SectionLayout>
    );
}

export default Companies;