function NavOption({href, children}) {
    return (
        <a
            className={"hidden md:flex text-primary-600 hover:bg-primary-600 py-2 px-4 lg:text-xl hover:text-secondary-50 rounded-xl duration-300"}
            href={href}>
            {children}
        </a>
    );
}

export default NavOption;