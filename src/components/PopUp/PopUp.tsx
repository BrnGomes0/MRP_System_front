import React from "react";
import TitleSmall from "../Title/Title_h3";
import SubTitle from "../SubTitle/SubTitle";
import { useEffect } from "react";
import NumberInput from "../NumberInput/NumberInput";
import Button from "../Button/Button";

interface PopUpProps{
    onClose?: () => void
}

const PopUp: React.FC<PopUpProps>= ({onClose}) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    return(
        <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center">
            <div className="p-2 bg-white w-[400px] h-[300px] rounded-md flex flex-col justify-center items-center gap-6">
            <button className="place-self-end font-bold p-2" onClick={onClose}>X</button>
                <div className="flex flex-col text-center">
                    <TitleSmall
                        title="Value Paper:"
                    />
                    <SubTitle
                        subTitle="Put the value of paper"
                    />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <NumberInput
                        label="Demand of Paper"
                        placeholder="0"
                        classname="w-[126px]"
                    />
                </div>
                <div className="">
                    <Button
                        text="Send"
                        classname="w-[90px] h-[30px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default PopUp;