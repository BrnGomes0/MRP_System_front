import React from "react";

interface ButtonProps{
    text: string;
    onClick?: () => void;
    classname?: string;
}

const Button: React.FC<ButtonProps> = ({text, onClick, classname}) => {
    return(
        <div className={`bg-[#245EA4] text-white w-[100px] h-[40px] text-center flex justify-center items-center font-poppinsFont rounded-lg ${classname}`}>
            <button onClick={onClick} className="w-[100px] h-[40px]" type="submit">
                {text}
            </button>
        </div>
    )
}

export default Button