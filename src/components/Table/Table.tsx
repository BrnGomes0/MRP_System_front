import React, { useState } from "react";
import InputText from "../InputText/InputText";
import LabelCreateItem from "../Labels/LabelCreateItem";
import InputNumer from "../InputNumber/InputNumber";

const Table: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [inputValueN, setInputValueN] = useState<number>(1);

     // Função para lidar com mudanças no input
    const handleInputChange = (value: string) => {
    setInputValue(value); // Atualiza o estado com o novo valor
    };

    const handleInputChangeNumber = (value : number) => {
        setInputValueN(value);
    }

    return(
        <div className="border-4 border-gray-400 w-[500px] h-[500px] rounded-xl ml-[500px]">
            <div className="ml-7" style={{display: 'flex', gap: '10px'}}>
                <LabelCreateItem title="Material:"/>
                <div className="ml-56">
                    <LabelCreateItem title="Demand:"/>
                </div>
            </div>
            
            <div className="ml-7" style={{display: 'flex', gap: '10px'}}>
                <InputText value={inputValue} onChange={handleInputChange} style={{ height: '30px'}}/>
                <div className="ml-9">
                    <InputNumer value={inputValueN} onChange={handleInputChangeNumber} min={1} max={100} step={1} hint="Escolha um valor"></InputNumer>
                </div>
            </div>
            

            <div className="ml-7" style={{display: 'flex', gap: '10px'}}>
                <LabelCreateItem title="Material Description:"/>
                <div className="ml-36">
                    <LabelCreateItem title="Safety Stock"/>
                </div>
            </div>

            <div className="ml-7" style={{display: 'flex', gap: '10px'}}>
                <InputText value={inputValue} onChange={handleInputChange} style={{ height: '100px' }}/>
                <div className="ml-9">
                    <InputNumer value={inputValueN} onChange={handleInputChangeNumber} min={1} max={100} step={1} hint="Escolha um valor"/>
                    <div className="mt-3">
                        <LabelCreateItem title="Initial Inventory:"/>
                        <InputNumer value={inputValueN} onChange={handleInputChangeNumber} min={1} max={100} step={1} hint="Escolha um valor"/>
                    </div>
                </div>
            </div>
            <div className="ml-7">
                <div style={{display: 'flex', gap: '10px'}}>
                    <LabelCreateItem title="Lead Time:"/>
                    <div className="ml-52">
                        <LabelCreateItem title="Price:"/>
                    </div>
                </div>
            </div>

            <div className="ml-7" style={{display: 'flex', gap: '10px'}}>
                <InputText value={inputValue} onChange={handleInputChange} style={{ height: '30px'}}/>
                <div className="ml-9">
                    <InputNumer value={inputValueN} onChange={handleInputChangeNumber} min={1} max={100} step={1} hint="Escolha um valor"/>
                </div>
            </div>


            <div className="ml-7" >
                <div style={{display: 'flex', gap: '10px'}}>
                    <LabelCreateItem title="Supplier Code:"/>
                    <div className="ml-4">
                        <LabelCreateItem title="Supplier Name:"/>
                    </div>
                </div>
            </div>

            <div className="ml-8">
                <div style={{display: 'flex', gap: '10px'}}>
                    <InputText value={inputValue} onChange={handleInputChange} style={{ height: '30px', width: '100px', display: 'flex', gap: '10px'}}/>
                    <div className="ml-5">
                        <InputText value={inputValue} onChange={handleInputChange} style={{ height: '30px', width: '100px', display: 'flex', gap: '10px'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table