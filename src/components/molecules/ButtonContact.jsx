import Phone from "../Icons/Phone.jsx";

function ButtonContact({className = ''}) {
    return (
        <a href="#contact"
           className={"bg-primary-600 " +
               "rounded-md " +
               "px-3.5 " +
               "py-2.5 " +
               "text-sm " +
               "font-semibold " +
               "text-white " +
               "shadow-sm " +
               " transition duration-300 flex flex-row gap-2 " +
               "items-center " +
               "justify-center " +
               "hover:bg-primary-500 " +
               className}>
            <Phone className={"w-5 h-5"}/>
            <span>Contactanos</span>
        </a>
    );
}

export default ButtonContact;