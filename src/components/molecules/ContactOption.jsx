import Email from "../Icons/Email.jsx";
import Phone from "../Icons/Phone.jsx";

function ContactOption({title, text, type}) {
    const Icon = () => {
        if (type === "email") {
            return <Email className="w-5 h-5 flex-shrink-0 text-secondary-950 fill-primary-600"/>
        }
        if (type === "tel") {
            return <Phone className="w-5 h-5 flex-shrink-0 text-secondary-950 fill-primary-600"/>
        }
    };
    return (
        <div className="flex items-center justify-center space-x-4 text-2xl text-secondary-950">
            <div className="space-y-1">
                <div className={"flex flex-row items-center justify-center gap-2"}>
                    <Icon/>
                    <p className="font-bold lg:text-3xl lg:mb-2">{title}</p>
                </div>
                <p id={"text-contact"} className="text-xl text-secondary-950 lg:text-2xl">{text}</p>
            </div>
        </div>
    );
}

export default ContactOption;