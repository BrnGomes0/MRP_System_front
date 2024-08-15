import React from "react";

//Define a interface para as propriedades do botão
interface ButtonProps{
    title: string; //Propriedade que define o texto do botão
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
    return(
        <div className="bg-sky-600 flex justify-center items-center text-white rounded-xl w-[100px] h-[35px]">
            <button onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default Button