import React, { ChangeEvent } from "react";

interface StringInputProps{
    value: string;
    onChange: (value: string) => void; //Função chamada quando o valor do input muda
    style?: React.CSSProperties;
}

const InputText: React.FC<StringInputProps> = ({value, onChange, style}) => {
    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        //Garantir que o valor é uma string
        if (typeof newValue === 'string'){
            onChange(newValue);
        }
    }

    return(
        <div>
            <input className="border-2 border-black rounded-md w-[250px]" type="text" value={value} onChange={handleChange} style={style}/>
        </div>
    );       
};

export default InputText