import React, { useState } from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import { data_value_A, data_value_b} from "./data";
import Box from "../../components/Box/Box";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import PopUp from "../../components/PopUp/PopUp";


const Manufacturing: React.FC = () => {
    
    const [search, setSearch] = useState("");
    const [popUp, setPopUp] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState<"A" | "B">("A")

    const filteredData =
    (selectedMaterial === "A" ? data_value_A : data_value_b).filter((item) =>
        search.toLowerCase() === ""
            ? item
            : item.week.toLowerCase().includes(search.toLowerCase())
    );

    const handleMaterialSelect = (material: "A" | "B") => {
        setSelectedMaterial(material);
        setSearch("");
    };

    return (
        <section className="pt-[73px] flex flex-col justify-center items-center gap-10 pb-20">
            <div className="p-10 flex flex-col text-center gap-14">
                <div>
                    <TitleBig title="Purchase control"/>
                    <SubTitle subTitle="See your PO here"/>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                    <div className="flex gap-10">
                        <div className="p-2">
                            <SearchBar
                                placeholder="Search here..."
                                setSearch={setSearch}
                            />
                        </div>
                        <div className="flex justify-center items-center w-[210px] p-2 gap-2">
                            <Button
                                text="Material A"
                                onClick={() => handleMaterialSelect("A")}
                            />
                            <Button
                                text="Material B"
                                onClick={() => handleMaterialSelect("B")}
                            />
                        </div>
                    </div>
                <Box classname="w-[900px] p-4">
                    <div className="max-h-[400px] overflow-y-auto">
                    <table className="font-poppinsFont text-center w-full rounded-xl">
                        <thead className="text-xl bg-neutral-200 sticky top-0 z-10">
                            <tr>
                                <th className="p-4">Week</th>
                                <th className="p-4">Material</th>
                                <th className="p-4">Order Placed</th>
                                <th className="p-4">Order Received</th>
                            </tr>
                        </thead>
                        <tbody className="text-base">
                            {filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <tr
                                        className="border-b last:border-none hover:bg-gray-100 transition-colors"
                                        key={item.id}
                                    >
                                        <td className="p-4">{item.week}</td>
                                        <td className="p-4">{item.material}</td>
                                        <td className="p-4">{item.order_placed} pcs</td>
                                        <td className="p-4">{item.order_received} pcs</td>

                                    </tr>
                                ))
                            ) : (
                                <tr className="border-b last:border-none hover:bg-gray-100 transition-colors">
                                    <td colSpan={8} className="p-4">
                                        No results found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
                </Box>
            </div>
            <div className="p-8">
                <Button
                    text="Run MRP"
                    classname="w-[130px] h-[50px]"
                    onClick={() => setPopUp(true)}
                />
                {popUp && <PopUp onClose={() => setPopUp(false)}/>}
            </div>
        </section>
    );
};

export default Manufacturing;