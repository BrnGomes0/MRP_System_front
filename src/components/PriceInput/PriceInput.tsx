import React, { useState } from "react";
import Label from "../Label/Label";

interface PriceInputProps{
    classname?: string;
    value?: string;
    placeholder: string;
    label: string;
}

const PriceInput: React.FC<PriceInputProps> = ({classname, value, placeholder, label}) => {

    const [price, setPrice] = useState<string>(value || "0,00")

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
    

        const numericValue = inputValue.replace(/\D/g, "");

        
        const formattedValue = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(parseFloat(numericValue) / 100);

        setPrice(formattedValue.replace("R$", "").trim());

    }

    return(
        <div className="p-1">
            <Label
                text={label}
            />
            <input
                type="text"
                placeholder={placeholder}
                className={`w-[88px] h-[41px] p-2 border-[1.2px] border-gray-400 rounded-md ${classname}`}
                value={`R$ ${price}`}
                onChange={handlePriceChange}
            />
        </div>
    )
}

export default PriceInput