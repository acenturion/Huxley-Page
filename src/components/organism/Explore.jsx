import {Splide, SplideSlide} from "@splidejs/react-splide";
import {useRef} from "react";

import imgService2 from "../../assets/img/2.webp";
import imgService4 from "../../assets/img/4.webp";
import imgService5 from "../../assets/img/5.webp";
import imgService6 from "../../assets/img/6.webp";
import imgService8 from "../../assets/img/8.webp";
import imgService9 from "../../assets/img/9.webp";
import imgService10 from "../../assets/img/10.webp";
import imgService11 from "../../assets/img/11.webp";
import imgService13 from "../../assets/img/13.webp";
import imgService12 from "../../assets/img/12.webp";
import imgService15 from "../../assets/img/15.webp";
import imgService19 from "../../assets/img/19.webp";
import ControlSlider from "../molecules/ControlSlider.jsx";

const images = [
    { id: 2, url: imgService2 },
    { id: 4, url: imgService4 },
    { id: 5, url: imgService5 },
    { id: 6, url: imgService6 },
    { id: 8, url: imgService8 },
    { id: 9, url: imgService9 },
    { id: 10, url: imgService10 },
    { id: 11, url: imgService11 },
    { id: 12, url: imgService12 },
    { id: 13, url: imgService13 },
    { id: 15, url: imgService15 },
    { id: 19, url: imgService19 },
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
            <div className={"w-full flex flex-row justify-between px-4 md:px-8 lg:px-24 mb-8"} >
                <div>
                    <h2 className={"text-3xl md:text-5xl font-bold text-secondary-950 pb-4 mb-4 text-left"}>Explora Huxley</h2>
                    <p className={"text-xl md:text-2xl text-secondary-950 pb-4 text-left"}>Descubrí las instalaciones y servicios
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
                        <img className={"h-full w-full aspect-[16/9] object-cover object-center"} width={"500"} height={"400"} src={url} alt={"Image "+ id}/>
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