import React from "react";
import SubTitle from "../../components/SubTitle/SubTitle";
import Box from "../../components/Box/Box";
import TitleSmall from "../../components/Title/Title_h3";
import TitleBig from "../../components/Title/Title_h1";
import DescriptionTwoValues from "../../components/DescriptionTwoValues/DescriptionTwoValues";
import SubTitleBold from "../../components/SubTitle/SubTitleBold";
import { useMsal } from "@azure/msal-react";
import { callMsGraph } from "../../sso/MsGraphApiCalls.js";
import { useState, useEffect } from "react";

const UseCase: React.FC = () => {
    const { accounts } = useMsal();
    const [userData, setUserData] = useState<any>(null);
    const [userPhoto, setUserPhoto] = useState<string | null>(null);

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const { graphMeData, blobUrl } = await callMsGraph();
                setUserData(graphMeData);
                setUserPhoto(blobUrl);
            } catch (error) {
                console.error("Erro ao obter dados do Microsoft Graph:", error);
            }
        };
    }, [accounts])

    return(
        <section className="pt-[73px] flex justify-center items-center gap-10 pb-40">
            <div className="p-10 flex flex-col text-center gap-14">
                {userData && (
                    <div className="flex items-center gap-4">
                        <div>
                            <h2>Bem-vindo, {userData}</h2>
                        </div>
                        <div>
                            <img src={userPhoto || ""} alt="Foto do Usuário" className="rounded-full border-2 border-gray-300 w-16 h-16 object-cover"/>
                        </div>
                    </div> 
                )}
                <div>
                    <TitleBig
                        title="About the system"
                    />
                    <SubTitle
                        subTitle="Subtitles about the MRP system"
                    />
                </div>
                <Box classname="w-[484px]">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <TitleSmall title="Supplier Information"/>
                            <DescriptionTwoValues
                                valueBold="Supplier Code Material A (Pen): "
                                valueLight="929028"
                            />
                            <DescriptionTwoValues
                                valueBold="Supplier Code Material B (Package): "
                                valueLight="929029"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <TitleSmall title="Lead Time"/>
                            <DescriptionTwoValues
                                valueBold="Material A (Pen): "
                                valueLight="1 Week"
                            />
                            <DescriptionTwoValues
                                valueBold="Material B (Package): "
                                valueLight="1 Week"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <TitleSmall 
                                title="Material Information"/>
                            <DescriptionTwoValues
                                valueBold="Material Code A (Pen): "
                                valueLight="1230"
                            />
                            <DescriptionTwoValues
                                valueBold="Material Code B (Package): "
                                valueLight="1240"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <TitleSmall 
                                title="Bill of Materials (BOM)"/>
                            <SubTitleBold
                                subTitleBold="Each packaging contains 2 Pens"
                            />
                        </div>
                    </div>
                </Box>
            </div>
        </section>
    )
}

export default UseCase