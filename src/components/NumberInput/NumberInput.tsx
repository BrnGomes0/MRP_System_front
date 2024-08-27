import React from "react";
import Label from "../Label/Label";

interface InputNumberProps{
    classname?: string;
    placeholder: string;
    value?: string;
    label: string;
    method?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Atualizado para ser uma função de callback
}

const NumberInput: React.FC<InputNumberProps> = ({classname, placeholder, value, label, method}) => {

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (["Backspace", "Delete", "ArrowUp", "ArrowDown", "Tab"].includes(event.key)) {
            return;
        }
        event.preventDefault();
    };

    
    return(
        <div className="p-1">
            <Label
                text={label}
            />
            <input
                type="number"
                placeholder={placeholder}
                className={`w-[88px] h-[41px] p-2 border-[1.2px] border-gray-400 rounded-md ${classname}`}
                value={value}
                min="0"
                onChange={method}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}


export default NumberInput

