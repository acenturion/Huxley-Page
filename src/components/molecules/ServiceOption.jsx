
function ServiceOption({ title, content, url}) {
    return (
        <div className={`flex md:w-full md:gap-8 mb-4 flex-col md:flex-row`}>
            <div className={"text-left md:w-1/2 flex flex-col justify-center"}>
                <h2 className={"text-3xl md:text-5xl font-bold text-secondary-950 pb-4 border-b border-primary-600 mb-4"}>{title}</h2>
                {content.map((text, i) => (
                    <p key={i} className={"text-xl md:text-2xl text-secondary-950 pb-4"}>{text}</p>
                ))}
            </div>
            <div
                className={"text-left h-[300px] md:w-1/2 md:h-[400px] lg:h-[500px] 2xl:h-[720px] rounded-2xl bg-primary-600 overflow-clip mb-4"}>
                <img
                    src={url}
                    className={"h-full w-full aspect-[16/9] object-cover"}
                    alt={"Foto del servicio " + title}/>
            </div>
        </div>
    );
}

export default ServiceOption;