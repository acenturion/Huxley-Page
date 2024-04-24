function GridImage({alt, src, className}) {
    return (
        <img src={src}
             alt={alt}
             className={"w-full h-full object-cover transition scale-150 hover:scale-[1.6] duration-500 -translate-y-10 -translate-x-1/4 " + className}
        />
    );
}

export default GridImage;