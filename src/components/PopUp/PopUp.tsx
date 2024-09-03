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
        <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="p-4 bg-white w-[406px] h-[366px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg">
            <button className="place-self-end font-bold" onClick={onClose}>X</button>
                <div className="flex flex-col text-center">
                    <TitleSmall
                        title="Informations:"
                    />
                    <SubTitle
                        subTitle="Put the new values"
                    />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <NumberInput
                            label="Material Consumption"
                            placeholder="0"
                            classname="w-[165px] text-center"
                        />
                    </div>
                    <div>
                        <NumberInput
                            label="Order Received"
                            placeholder="0"
                            classname="w-[114px] text-center"
                        />
                    </div>
                </div>
                <div className="pb-6">
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