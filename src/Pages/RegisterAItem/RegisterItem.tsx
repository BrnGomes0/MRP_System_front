import React, { useEffect, useState } from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import Box from "../../components/Box/Box";
import Forms from "../../components/Forms/Forms";
import DropDown from "../../components/DropDown/DropDown";
import StaticInput from "../../components/StaticInput/StaticInput";
import NumberInput from "../../components/NumberInput/NumberInput";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import PopUpOk from "../../components/PopUpOk/PopUpOk";
import PopUpError from "../../components/PopUpError/PopUpError";

const RegisterItem: React.FC  = () => {
    const navigate = useNavigate()
    const [popUp, setPopUp] = useState(false);
    const [popUpError, setPopUpError] = useState(false);
    const [popUpErrorText, setPopUpErrorText] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string>('');  
    const [inputValues, setInputValues] = useState<Record<string, string>>({
        demand: '',
        initialInventory: '',
        safetyStock: '',
    });

    const fetchData = async () => {
        //Validação dos dados antes do POST
        if(inputValues.demand != "" && inputValues.initialInventory != "" && inputValues.demand != "0" && inputValues.initialInventory != "0"){
            try{
                    console.log("safety: ", inputValues.safetyStock)
                    //POST para os dados
                    const response = await axios.post("http://localhost:8081/material", {
                        demand: inputValues.demand, //Enviando o valor do input do demand
                        initialInventory: inputValues.initialInventory, //Enviando o valor do initialInventory
                        materialCode: materialsCodes[selectedOption],
                        safetyStock: inputValues.safetyStock
                    });
                    
                    console.log("Dados enviados:", response.data)
                    setPopUp(true)

                    setTimeout(() => {
                        setPopUp(false);
                        navigate("/info_record")
                    }, 3000);
            }catch (error){
                setPopUpErrorText("Erro na conexão do servidor!")
                setPopUpError(true)
                setTimeout(() =>{
                    setPopUpError(false)
                }, 3000);
                console.log("Erro na conexão: ", error)
            }
        }else{
            setPopUpErrorText("A Demand e InicialInventory devem ser maior que 0!")
            console.log("não salvou nada")
            setPopUpError(true)
            setTimeout(() =>{
                setPopUpError(false)
            }, 3000)
           
        }
    }

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
        console.log("Material Selected: ", materialsCodes[selectedOption], "Valores: ", inputValues.input1, inputValues.input2);
    };
 
    const handleChange = (field: string, value: string) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [field]: value
        }));
    }

    return(
        <section className="pt-[73px] flex flex-col justify-center items-center gap-10 pb-[365px]">
            <div className="p-10 flex flex-col gap-14 justify-center items-center">
                <div className="text-center">
                    <TitleBig
                        title="Create a Material"
                        classname="text-center"
                    />
                    <SubTitle
                        subTitle="Fill up the below fields"
                        classname="tex-center"
                    />
                </div>
                <Box classname="w-[380px] h-[210px]">
                    <Forms onSubmit={handleSubmit}>
                        <div className="flex gap-2 ">
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
                        <div className="flex gap-3">
                            <NumberInput
                                label="Demand"
                                placeholder="0"
                                value={inputValues.demand}
                                method={(demand) => handleChange('demand', demand)} //Capturando mudanças
                               
                            />
                            <NumberInput
                                label="Initial Inventory"
                                placeholder="0"
                                classname="w-[112px]"
                                value={inputValues.initialInventory}
                                method={(initialInventory) => handleChange('initialInventory', initialInventory)}
                            />

                            <NumberInput
                                label="Safety Stock"
                                placeholder="0"
                                value={inputValues.safetyStock}
                                method={(safetyStock) => handleChange('safetyStock', safetyStock)}
                            />
                        </div>
                        <div className="flex justify-center items-center p-[130px]">
                            <Button
                                text="Create"
                                onClick={fetchData}
                            />
                            {popUpError && <PopUpError title={popUpErrorText}/>}
                            {popUp && <PopUpOk title="Material Created"/>}
                                                  
                        </div>
                        
                                    
                    </Forms>
                </Box>
            </div>
        </section>
    )
}
 
export default RegisterItem