import {Splide, SplideSlide} from "@splidejs/react-splide";
import {useRef} from "react";

import imgService2 from "../../assets/img/2.webp";
import imgService4 from "../../assets/img/4.webp";
import imgService5 from "../../assets/img/5.webp";
import imgService6 from "../../assets/img/6.webp";
import imgService8 from "../../assets/img/8.webp";
import imgService9 from "../../assets/img/9.webp";
import imgService11 from "../../assets/img/11.webp";
import imgService15 from "../../assets/img/15.webp";
import imgService19 from "../../assets/img/19.webp";
import imgNew2 from "../../assets/img/n2.webp";
import imgNew3 from "../../assets/img/n3.webp";
import imgNew4 from "../../assets/img/n4.webp";
import imgNew5 from "../../assets/img/n5.webp";
import imgNew6 from "../../assets/img/n6.webp";
import imgNew7 from "../../assets/img/n7.webp";
import imgNew8 from "../../assets/img/n8.webp";
import imgNew9 from "../../assets/img/n9.webp";


import ControlSlider from "../molecules/ControlSlider.jsx";

const images = [
    {id: 1, url: imgService8},
    {id: 2, url: imgNew2},
    {id: 3, url: imgService2},
    {id: 4, url: imgNew3},
    {id: 5, url: imgService4},
    {id: 6, url: imgNew4},
    {id: 7, url: imgService5},
    {id: 8, url: imgNew5},
    {id: 9, url: imgService6},
    {id: 10, url: imgNew6},
    {id: 11, url: imgService9},
    {id: 12, url: imgNew7},
    {id: 13, url: imgService11},
    {id: 14, url: imgNew8},
    {id: 15, url: imgService15},
    {id: 16, url: imgNew9},
    {id: 17, url: imgService19},
];

function Explore() {

    const sliderRef = useRef(null);

    const handleOnPressLeft = () => {
        sliderRef.current.splide.go("<")
    }

    const handleOnPressRight = () => {
        sliderRef.current.splide.go(">")
    }
    return (
        <section id={"explore"} className={"py-8"}>
            <div className={"w-full flex flex-row justify-between px-4 md:px-8 lg:px-24 mb-8"}>
                <div>
                    <h2 className={"text-3xl md:text-5xl font-bold text-secondary-950 pb-4 mb-4 text-left"}>Explora
                        Huxley</h2>
                    <p className={"text-xl md:text-2xl text-secondary-950 pb-4 text-left"}>Descubrí las instalaciones y
                        servicios
                        disponibles.</p>
                </div>
                <ControlSlider
                    className={"hidden md:flex"}
                    handleOnPressLeft={handleOnPressLeft}
                    handleOnPressRight={handleOnPressRight}
                />
            </div>

            <Splide
                ref={sliderRef}
                className={"flex flex-row"}
                options={{
                    type: 'loop',
                    gap: '16px',
                    arrows: false,
                    fixedWidth: "400px",
                    fixedHeight: "400px",
                    speed: 250,
                }}
            >
                {images.map(({url, id}) => (
                    <SplideSlide key={id}>
                        <img className={"h-full w-full aspect-[16/9] object-cover object-center"} width={"500"}
                             height={"400"} src={url} alt={"Image " + id}/>
                    </SplideSlide>
                ))}
            </Splide>

            <ControlSlider
                className={"md:hidden p-4"}
                handleOnPressLeft={handleOnPressLeft}
                handleOnPressRight={handleOnPressRight}
            />
        </section>
    );
}

export default Explore;