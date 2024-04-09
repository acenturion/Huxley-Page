function SectionLayout({children, id, className=''}) {
    return (
        <section id={id} className={"flex flex-col md:flex-row w-full px-2 py-4 md:py-8 md:px-8 lg:px-24 lg:py-16 " + className}>
            {children}
        </section>
    );
}

export default SectionLayout;