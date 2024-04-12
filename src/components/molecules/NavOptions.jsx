import NavOption from "../atom/NavOption.jsx";
import ButtonContact from "./ButtonContact.jsx";

function NavOptions({id}) {
    return (
            <nav id={id}
                 className={"flex flex-row items-center justify-end gap-4"}>
                <NavOption href={"#about-us"}>
                    Nosotros
                </NavOption>
                <NavOption href={"#services"}>
                    Servicios
                </NavOption>
                <NavOption href={"#locate-us"}>
                    Ubicacion
                </NavOption>
                <ButtonContact className={"text-sm lg:text-xl"}/>
            </nav>
    );
}

export default NavOptions;