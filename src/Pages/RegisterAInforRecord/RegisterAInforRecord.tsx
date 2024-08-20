import React from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import Forms from "../../components/Forms/Forms";
import Box from "../../components/Box/Box";
import StaticInput from "../../components/StaticInput/StaticInput";
import NumberInput from "../../components/NumberInput/NumberInput";
import PriceInput from "../../components/PriceInput/PriceInput";
import Button from "../../components/Button/Button";


const RegisterAInforRecord: React.FC = () => {

    

    return(
        <section className="pt-[73px] flex justify-center items-center gap-10">
            <div className="p-10 flex flex-col gap-14 justify-center items-center">
                <div className="text-center">
                   <TitleBig
                       title="Create a Info Record"
                   />
                   <SubTitle
                       subTitle="Info record of material created"
                   />
            </div>
            <Box classname="w-[390px] h-[220px]">
                <Forms>
                   <div className="flex gap-6 justify-center items-center">
                        <StaticInput
                                label="Material"
                                value="Material A - (Pen)"
                                classname="w-[185px]"
                        />
                        <StaticInput
                                label="Material Code"
                                value="1230"
                                classname="w-[104px]"
                        />
                   </div>
                   <div className="flex gap-[10px] justify-center items-center ">
                        <StaticInput
                            label="Supplier Name"
                            value="929028"
                            classname="w-[105px]"
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
                   <div className="flex justify-center items-center p-32">
                            <Button
                                text="Create"
                            />
                        </div>
                </Forms>
            </Box>    
            </div>
        </section>
    )
}

export default RegisterAInforRecord