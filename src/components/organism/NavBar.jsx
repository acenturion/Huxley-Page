import Logo from "../atom/Logo.jsx";
import NavOptions from "../molecules/NavOptions.jsx";

function NavBar() {
    return (
        <header id={"navbar"} className={"w-full h-16 sm:h-[90px] px-4 lg:px-24 py-4 flex items-center justify-between z-50 bg-secondary-50"}>
            <Logo/>
            <NavOptions id={"header-nav"}/>
        </header>
    );
}

export default NavBar;
