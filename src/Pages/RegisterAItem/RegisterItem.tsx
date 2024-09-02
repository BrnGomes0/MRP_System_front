import React, { useState } from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import Box from "../../components/Box/Box";
import Forms from "../../components/Forms/Forms";
import DropDown from "../../components/DropDown/DropDown";
import StaticInput from "../../components/StaticInput/StaticInput";
import NumberInput from "../../components/NumberInput/NumberInput";
import Button from "../../components/Button/Button";
 
const RegisterItem: React.FC  = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');  
    const [inputValues, setInputValues] = useState<Record<string, string>>({
        Demand: '',
        Initial_Inventory: '',
        Safety_Stock: '',
    });
 
    const options = ['Material A - (Pen)', 'Material B - (Package)'];
 
    const materialsCodes: Record<string, string> = {
        "Material A - (Pen)": "1230",
        "Material B - (Package)": "1240",
    }
 
    const handleSelect = (value: string) => {
        setSelectedOption(value);
    };
 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(inputValues);
    };
 
    const handleButtonSubmit = () => {
        console.log("Material Selected: ", selectedOption, "Valores: ", inputValues.input1, inputValues.input2, inputValues.input3);
    };
 
    const handleChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) =>{
        setInputValues(prevState => ({
            ...prevState,
            [id]: event.target.value
        }));
    };
   
 
    return(
        <section className="pt-[73px] flex flex-col justify-center items-center gap-10">
            <div className="p-10 flex flex-col gap-14 justify-center items-center">
                <div className="text-center">
                    <TitleBig
                        title="Create a Material"
                        classname="text-center"
                    />
                    <SubTitle
                        subTitle="Create a material, following the labels"
                        classname="tex-center"
                    />
                </div>
                <Box classname="w-[380px] h-[200px]">
                    <Forms onSubmit={handleSubmit}>
                        <div className="flex gap-2">
                            <StaticInput
                                label="Material Code"
                                value={materialsCodes[selectedOption] || "0"}
 
                            />
                            <DropDown
                                label="Material"
                                classname="w-full"
                                placeholder="Select Material"
                                options={options}
                                onSelect={handleSelect}
                            />
                        </div>
                        <div className="flex gap-2">
                            <NumberInput
                                label="Demand"
                                placeholder="0"
                                value={inputValues.input1}
                                method={handleChange('input1')}
                               
                            />
                            <NumberInput
                                label="Initial Inventory"
                                placeholder="0"
                                classname="w-[110px]"
                                value={inputValues.input2}
                                method={handleChange('input2')}
                            />
                            <NumberInput
                                label="Safety Stock"
                                placeholder="0"
                                value={inputValues.input3}
                                method={handleChange('input3')}
                            />
                        </div>
                        <div className="flex justify-center items-center p-28">
                            <Button
                                text="Create"
                                onClick={handleButtonSubmit}
                            />
                        </div>
                    </Forms>
                </Box>
            </div>
           
        </section>
    )
}
 
export default RegisterItem