import React from "react";
import { useState, useEffect } from "react";
import TitleSmall from "../Title/Title_h3";

interface PopUpErrorProps{
    onClose?: () => void
    title: string
}

const PopUpError: React.FC<PopUpErrorProps> = ({onClose, title}) =>{
    const [showPopUp, setShowPopUp] = useState(true);

    useEffect(() =>{
        //Criando um temporizador com 3000 (3 segundos)
        const timer = setTimeout(() => {
            setShowPopUp(false); //Define o estado para fechar o pop-up
        }, 3000)
        
        //Limpando o temporizador se o componente for quebrado antes dos 3 segundos
        return () => clearTimeout(timer);
    }, [onClose]);

    //Se o estado for falso, não abre o popUp, no começo lá está true justamente para chegar abrindo, e depois de 3 segundos ele é setado como falso
    if(!showPopUp) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="p-4 bg-white w-[406px] h-[366px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg">

                <div className="w-[100px] pl-15">
                        <img src="/src/assets/erro.png"/>
                    </div>

                <div className="flex flex-col text-center w-[200px]">
                    <TitleSmall
                        title={title}
                    />
                </div>
            </div>
        </div>
    )
}

export default PopUpError;