import React from "react";
import { useEffect, useState} from "react";
import TitleSmall from "../Title/Title_h3";

interface PopUpProps{
    onClose?: () => void
    title: string
    imageUrl?: string;
    className?: string;
}

const PopUpOk: React.FC<PopUpProps> = ({onClose, title, imageUrl, className}) =>{
    const [showPopUp, setShowPopUp] = useState(true);

    useEffect(() => {
        //Criando um temporizador com 3000 (3 segundos)
        const timer = setTimeout(() =>{
            setShowPopUp(false); //Define o estado para fechar o pop-up
        }, 3000); 

        //Limpando o temporizador se o componente for quebrado antes dos 3 segundos
        return () => clearTimeout(timer);
    }, [onClose]);

    //Se o estado for falso, não abre o popUp, no começo lá está true para abrir, e depois ali dos 3 segundos, vira falso de novo
    if(!showPopUp) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="p-4 bg-white w-[406px] h-[366px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg">
                <div className="flex flex-col text-center">
                    <div>
                        {imageUrl && (
                            <img src={imageUrl} alt="Popup Image" className={className || "w-[100px] h-25"}/>
                        )}
                    </div>

                    <div>
                        <TitleSmall
                            title={title}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PopUpOk;