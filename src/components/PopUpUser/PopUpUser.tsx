import React from "react";

interface PopUpUserProps{
    closePopUp: () => void;
    openPopUp: boolean
}

const PopUpUser: React.FC<PopUpUserProps> = ({closePopUp, openPopUp}) => {

    return(
        <>
            {openPopUp && (
                <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50">
                <div className="p-4 bg-white w-[406px] h-[366px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg">
                    <div className="p-4 flex-col justify-center items-center text-center">
                        <h1>FUNCIONA FERNANDO O BERNE</h1>
                    </div>
                </div>
                <button onClick={closePopUp}>X</button>    
                </div>
            )}
        </>
    );

}

export default PopUpUser;