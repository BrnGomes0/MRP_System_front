import React, { ChangeEvent } from "react";

interface NumberInputProps{
    value: number; //Valor do input deve ser um número
    onChange: (value: number) => void;
    max?: number;
    min?: number;
    step?: number;
    hint?: string;
}

const InputNumer: React.FC<NumberInputProps> = ({value, onChange, min = 1, max = 100, step = 1, hint }) => {
    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        //Garantir que o valor está dentro do permitido
        if(!isNaN(newValue) && newValue >= min && newValue <= max){
            onChange(newValue);
        }
    };
   
    return(
      <div className="border-2 border-black w-[75px] rounded-md">
        <input type="number" value={value} onChange={handleChange} max={max} min={min} step={step} aria-describedby="hint"/>
      </div>
   ); 
};

export default InputNumer