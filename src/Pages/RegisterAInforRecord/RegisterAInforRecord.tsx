import React from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import Forms from "../../components/Forms/Forms";
import Box from "../../components/Box/Box";
import StaticInput from "../../components/StaticInput/StaticInput";
import NumberInput from "../../components/NumberInput/NumberInput";
import PriceInput from "../../components/PriceInput/PriceInput";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";


const RegisterAInforRecord: React.FC = () => {

    const navigate = useNavigate();

    const handleCreateClick = () => {
        navigate("/inventory_management")
    }

    return(
        <section className="pt-[73px] flex justify-center items-center gap-10 pb-[365px]">
            <div className="p-10 flex flex-col gap-14 justify-center items-center">
                <div className="text-center">
                   <TitleBig
                       title="Create a Info Record"
                   />
                   <SubTitle
                       subTitle="Info record of material created"
                   />
            </div>
            <Box classname="w-[400px] h-[240px]">
                <Forms>
                   <div className="flex gap-6 justify-center items-center">
                        <StaticInput
                                label="Material"
                                value="Material A - (Pen)"
                                style={{width: 188}}
                        />
                        <StaticInput
                                label="Material Code"
                                value="1230"
                                style={{width: 104}}
                        />
                   </div>
                   <div className="flex gap-3 justify-center items-center">
                        <StaticInput
                            label="Supplier Code"
                            value="929028"
                            style={{width: 105}}
                        />
                        <PriceInput
                            label="Price"
                            placeholder="0"
                        />
                        <NumberInput
                            label="Lead Time"
                            placeholder="0"
                        />
                   </div>
                   <div className="flex justify-center items-center p-40">
                            <Button
                                text="Create"
                                onClick={handleCreateClick}
                            />
                        </div>
                </Forms>
                
            </Box>    
            </div>
        </section>
    )
}
export default RegisterAInforRecord