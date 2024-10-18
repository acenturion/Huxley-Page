function ButtonContact({className = ''}) {
    const handleClick = () => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'click', {
                event_category: 'Button',
                event_label: 'Contactanos Button',
                value: 1
            });
        }
    };

    return (
        <a href="#contact"
           role="button"
           onClick={handleClick}
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