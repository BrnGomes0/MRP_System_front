import React, { useState } from "react";
import TitleSmall from "../Title/Title_h3";
import SubTitle from "../SubTitle/SubTitle";
import { useEffect } from "react";
import NumberInput from "../NumberInput/NumberInput";
import Button from "../Button/Button";
import axios from "axios";
import PopUpReturn from "../PopUpReturn/PopUpReturn";
import DropDown from "../DropDown/DropDown";

interface PopUpProps{
    onClose?: () => void
}

const PopUp: React.FC<PopUpProps>= ({onClose, }) => {
    const [popUp, setPopUp] = useState<{title: string, imageUrl?: string } | null > (null);
    const [option, setSelectedOption] = useState<"Material A - (Pen)" | "Material B - (Package)">("Material A - (Pen)")
    const [inputValues, setInputValues] = useState<Record<string, string>>({
        materialConsumption: '',
        orderReceived: ''
    })

    const handleMaterialChange = (value : string) =>{
        setSelectedOption(value as "Material A - (Pen)" | "Material B - (Package)");
    }

    const fetchData = async (material: "Material A - (Pen)" | "Material B - (Package)") =>{
        try{
            //pegar o ultimo inventory criado
            const dataInventory = await axios.get("http://localhost:8081/inventory/all")

            console.log("Material do tipo: ", material)
            const filteredMaterials = dataInventory.data.filter((item: any) =>
                item.materialName.toLowerCase() === material.toLowerCase()
            );

            if(filteredMaterials.length > 0){
                const firstMaterial = filteredMaterials[0].inventory_id;

                const urlPutData = await axios.put(`http://localhost:8081/purchaseOrder/updatePurchasingOrder/${firstMaterial}`,{
                    demand: inputValues.materialConsumption,
                    orderReceived: inputValues.orderReceived
                });

                setPopUp({title: "New values updated", imageUrl: "/src/assets/correct.png"})

                setTimeout(() =>{
                    setPopUp(null)
                }, 3000)
            }
        }catch(error){
            setPopUp({title: "Error for put the new values", imageUrl: "/src/assets/erro.png"})

            setTimeout(() =>{
                setPopUp(null)
            }, 3000)
            console.log("Erro: ", error)
        }
    }

    const handleChange = (field: string, value: string) => {
        setInputValues((prevValues) => ({
            ...prevValues, 
            [field]: value
        }));
    }

    const options = ["Material A - (Pen)", "Material B - (Package)"]
    
    return(
        <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="p-4 bg-white w-[406px] h-[430px] rounded-xl flex flex-col justify-center items-center gap-6 shadow-lg">
            <button className="place-self-end font-bold" onClick={onClose}>X</button>
                <div className="flex flex-col text-center">
                    <TitleSmall
                        title="Informations:"
                    />
                    <SubTitle
                        subTitle="Put the new values"
                    />
                </div>
                <div className="flex flex-col">
                    <div>
                        <DropDown
                            label="Material"
                            classname="w-full"
                            placeholder="Select Material"
                            options={options}
                            onSelect={handleMaterialChange}
                        /> 
                    </div>
                    <div>
                        <NumberInput
                            label="Material Consumption"
                            placeholder="0"
                            classname="text-center"
                            style={{width: 165}}
                            value={inputValues.materialConsumption}
                            method={(materialConsumption) => handleChange('materialConsumption', materialConsumption)}
                        />
                    </div>
                    <div>
                        <NumberInput
                            label="Order Received"
                            placeholder="0"
                            classname="text-center"
                            style={{width: 114}}
                            value={inputValues.orderReceived}
                            method={(orderReceived) => handleChange("orderReceived", orderReceived)}
                        />
                    </div>
                </div>
                <div className="pb-6">
                    <Button
                        text="Send"
                        classname="w-[90px] h-[30px]"
                        onClick={() => fetchData(option)}
                    />
                    {popUp &&(
                        <PopUpReturn 
                            title={popUp.title}
                            imageUrl={popUp.imageUrl}
                            />
                    )};

                </div>
            </div>
        </div>
    )
}

export default PopUp;