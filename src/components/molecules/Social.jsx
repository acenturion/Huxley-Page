import Instagram from "../Icons/Instagram.jsx";
import Linkedin from "../Icons/Linkedin.jsx";

function Social({type, href, label}) {
    const Icon = () => {
        if (type === "instagram") return <Instagram className={"w-[40px] p-2"}/>
        if (type === "linkedin") return <Linkedin className={"w-[40px] p-2"}/>
    }
    return (
        <a
            target="_blank"
            rel="noopener"
            href={href}
            aria-label={label}
            className={"w-[48px] h-[48px] bg-primary-600 rounded-lg p-1 hover:bg-primary-500 duration-300"} >
            <Icon />
        </a>
    );
}

export default Social;