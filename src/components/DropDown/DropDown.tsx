import React, { useState } from "react";

interface DropDownProps{
    title?: string;
    options: string[];
    classname?: string;
    placeholder?: string;
    onSelect?: (value: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({title, options, placeholder, onSelect, classname}) => {
    const [selectedOption, setSelectedOption] = useState<string>('');  

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
      const newValue = event.target.value;
      setSelectedOption(newValue);
      if (onSelect && newValue){
        onSelect(newValue)
      }
    };

    return(
        <div className="p-1">
            {title}
            <div className={`w-auto h-[40px] p-2 border-[1.2px] border-gray-400 rounded-md text-center ${classname}`}>
            <select id="dropdown" value={selectedOption} onChange={handleChange}>
                <option value="" disabled>
                    {placeholder}
                </option>

                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                  
                ))}
            </select>
            </div>
        </div>
    )
}


export default DropDown