import Email from "../Icons/Email.jsx";
import Phone from "../Icons/Phone.jsx";
import Whatsapp from "../Icons/Whatsapp.jsx";

const icons = {email: Email, tel: Phone, whatsapp: Whatsapp};
const hrefs = {
    email: (v) => "mailto:" + v,
    tel: (v) => "tel:" + v,
    whatsapp: (v) => "https://wa.me/" + v,
};

function ContactOption({title, items}) {
    return (
        <div className="flex items-center justify-center text-secondary-950">
            <div className="space-y-1">
                <p className="font-semibold text-xl lg:text-3xl lg:mb-2 text-center">{title}</p>
                {items.map(({text, value, type}) => {
                    const Icon = icons[type];
                    const external = type === "whatsapp";
                    return (
                        <div key={value} className="flex flex-row items-center justify-center gap-2">
                            <Icon className="w-5 h-5 flex-shrink-0 text-secondary-950 fill-primary-600"/>
                            <a href={hrefs[type](value)}
                               {...(external && {target: "_blank", rel: "noopener noreferrer"})}
                               className="text-lg text-secondary-950 lg:text-2xl cursor-pointer">{text}</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ContactOption;
