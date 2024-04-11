import Social from "../molecules/Social.jsx";
import Logo from "../atom/Logo.jsx";
import NavOptions from "../molecules/NavOptions.jsx";

function Footer() {
    return (
        <footer className={"w-100 px-4 lg:px-24 mb-4"}>
            <div className={"w-100 flex flex-row justify-between items-center py-4"}>
                <Logo/>
                <NavOptions id={"footer-nav"} />
            </div>
            <div className={"w-100 border-t border-primary-600 flex flex-row justify-between items-center py-4 lg:py-8"}>
                <div className={"text-secondary-950 text-sm"}>
                    Copyright © Huxley Argentina
                </div>
                <div className={"flex flex-row gap-4"}>
                    <Social href={"https://www.instagram.com/huxley_sa/"} type={"instagram"}/>
                    <Social href={"https://www.linkedin.com/company/huxley-sa"} type={"linkedin"}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;