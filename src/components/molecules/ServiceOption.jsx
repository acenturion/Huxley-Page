
function ServiceOption({ title, content, url, pos}) {

    const position = pos % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";

    return (
        <div className={"flex justify-center md:w-full md:gap-8 flex-col md:flex-row " + position}>
            <div className={" lg:w-full text-left md:w-1/2 flex flex-col justify-center"}>
                <h2 className={"text-3xl md:text-5xl font-bold text-secondary-950 pb-4 border-b border-primary-600 mb-4"}>{title}</h2>
                {content.map((text, i) => (
                    <p key={i} className={"text-pretty text-xl md:text-2xl text-secondary-950 pb-4"}>{text}</p>
                ))}
            </div>
            <div
                className={"w-full h-[250px] min-h-[250px] md:w-1/2 md:h-[350px] lg:w-2/3 lg:h-[400px]   text-left rounded-2xl bg-primary-600 overflow-clip mb-4"}>
                <img
                    src={url}
                    className={"h-full w-full aspect-[16/9] object-cover transition duration-300 hover:scale-110"}
                    alt={"Foto del servicio " + title}/>
            </div>
        </div>
    );
}

export default ServiceOption;