import React, { useState } from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import Box from "../../components/Box/Box";
import Forms from "../../components/Forms/Forms";
import DropDown from "../../components/DropDown/DropDown";
import StaticInput from "../../components/StaticInput/StaticInput";
import NumberInput from "../../components/NumberInput/NumberInput";



interface RegisterAItemState{
    material: string;
    materialCode: number;
    demand: number;
    initialInventory: number;
    safetyStock: number;
}

const options = ['Material A - (Pen)', 'Material B - (Package)'];

const RegisterItem: React.FC  = () => {
    const [stateInputs, setStateInputs] = useState<RegisterAItemState>({
        material: "",
        materialCode: 0,
        demand: 0,
        initialInventory: 0,
        safetyStock: 0,

    })

    // Method for render state component based user interaction
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStateInputs({
            ...stateInputs,
            [name]: name === "material" ? value : Number(value), // Converte para número, exceto o campo "material"
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(stateInputs);
        // Enviar os dados para o backend ou processá-los
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
                                value={stateInputs.materialCode.toString()}
                            />
                            <DropDown
                                label="Material"
                                classname="w-full"
                                placeholder="Escolha o material"
                                options={options}
                            />
                        </div>
                        <div className="flex gap-2">
                            <NumberInput
                                label="Demand"
                                placeholder="0"
                                value={stateInputs.demand.toString()}
                                onChange={handleChange}
                                
                            />
                            <NumberInput
                                label="Initial Inventory"
                                placeholder="0"
                                classname="w-[110px]"
                                value={stateInputs.initialInventory.toString()}
                                onChange={handleChange}
                            />
                            <NumberInput
                                label="Safety Stock"
                                placeholder="0"
                                value={stateInputs.safetyStock.toString()}
                                method={handleChange}
                            />
                        </div>
                    </Forms>
                </Box>
            </div>
            
        </section>
    )
}

export default RegisterItem 