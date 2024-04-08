import {Splide, SplideSlide} from "@splidejs/react-splide";
import {useRef} from "react";
import Arrow from "../Icons/Arrow.jsx";

import imgService1 from "../../assets/img/1.webp";
import imgService2 from "../../assets/img/2.webp";
import imgService3 from "../../assets/img/3.webp";
import imgService4 from "../../assets/img/4.webp";
import imgService5 from "../../assets/img/5.webp";
import imgService6 from "../../assets/img/6.webp";
import imgService7 from "../../assets/img/7.webp";
import imgService8 from "../../assets/img/8.webp";
import imgService9 from "../../assets/img/9.webp";
import imgService10 from "../../assets/img/10.webp";
import imgService11 from "../../assets/img/11.webp";
import imgService12 from "../../assets/img/12.webp";
import imgService13 from "../../assets/img/13.webp";
import imgService14 from "../../assets/img/14.webp";
import imgService15 from "../../assets/img/15.webp";
import imgService16 from "../../assets/img/16.webp";
import imgService17 from "../../assets/img/17.webp";

const images = [
    { id: 1, url: imgService1 },
    { id: 2, url: imgService2 },
    { id: 3, url: imgService3 },
    { id: 4, url: imgService4 },
    { id: 5, url: imgService5 },
    { id: 6, url: imgService6 },
    { id: 7, url: imgService7 },
    { id: 8, url: imgService8 },
    { id: 9, url: imgService9 },
    { id: 10, url: imgService10 },
    { id: 11, url: imgService11 },
    { id: 12, url: imgService12 },
    { id: 13, url: imgService13 },
    { id: 14, url: imgService14 },
    { id: 15, url: imgService15 },
    { id: 16, url: imgService16 },
    { id: 17, url: imgService17 }
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
                    <p className={"text-xl md:text-2xl text-secondary-950 pb-4 text-left"}>Descubri las instalaciones y servicios
                        disponibles.</p>
                </div>
                <div className={"text-secondary-950 flex flex-row items-center justify-center gap-4"}>
                    <div
                        onClick={handleOnPressLeft}
                        className={"w-[48px] h-[48px] md:w-[72px] md:h-[72px] border-2 border-primary-600 rounded-xl flex items-center justify-center hover:cursor-pointer hover:bg-primary-600 duration-300"}>
                        <Arrow width={24} height={24}/>
                    </div>
                    <div
                        onClick={handleOnPressRight}
                        className={"w-[48px] h-[48px] md:w-[72px] md:h-[72px] border-2 border-primary-600 rounded-xl flex items-center justify-center hover:cursor-pointer rotate-180 hover:bg-primary-600 duration-300"}>
                        <Arrow width={24} height={24}/>
                    </div>
                </div>
            </div>

            <Splide
                ref={sliderRef}
                className={"flex flex-row"}
                options={{
                    type: 'loop',
                    gap: '16px',
                    arrows: false,
                    fixedWidth: "500px",
                    fixedHeight: "500px",
                    speed: 250,
                }}
            >
                {images.map(({url, id}) => (
                    <SplideSlide key={id}>
                        <img className={"h-full w-full aspect-[16/9] object-cover object-center"} src={url} alt="Image 1"/>
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    );
}

export default Explore;