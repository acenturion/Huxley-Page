import Arrow from "../Icons/Arrow.jsx";

function ControlSlider({handleOnPressLeft, handleOnPressRight, className}) {
    return (
        <div className={"flex text-secondary-950 flex-row items-center justify-center gap-4 " + className}>
            <div
                onClick={handleOnPressLeft}
                className={"w-[48px] h-[48px] md:w-[72px] md:h-[72px] border-2 border-primary-600 rounded-xl flex items-center justify-center hover:cursor-pointer hover:bg-primary-400 transition duration-300"}>
                <Arrow width={24} height={24}/>
            </div>
            <div
                onClick={handleOnPressRight}
                className={"w-[48px] h-[48px] md:w-[72px] md:h-[72px] border-2 border-primary-600 rounded-xl flex items-center justify-center hover:cursor-pointer  hover:bg-primary-400 transition duration-300 rotate-180"}>
                <Arrow width={24} height={24}/>
            </div>
        </div>
    );
}

export default ControlSlider;