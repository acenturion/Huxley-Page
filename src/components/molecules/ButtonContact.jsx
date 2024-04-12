
function ButtonContact({className = ''}) {
    return (
        <a href="#contact"
           role="button"
           className={"bg-primary-600 " +
               "rounded-md " +
               "px-3.5 " +
               "py-2.5 " +
               "text-xl " +
               "font-semibold " +
               "text-primary-white " +
               "transition duration-300 flex flex-row gap-2 " +
               "items-center " +
               "justify-center " +
               "hover:bg-primary-500 " +
               className}>
            <span>Contactános</span>
        </a>
    );
}

export default ButtonContact;