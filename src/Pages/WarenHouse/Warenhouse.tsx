import React from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import {data_values_materials_A, data_values_materials_B} from "./data"
import Box from "../../components/Box/Box";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
const Warenhouse: React.FC = () => {

    const [search, setSearch] = useState("");
    const [selectedMaterial, setSelectedMaterial] = useState<"A" | "B">("A")


    const filteredData =
    (selectedMaterial === "A" ? data_values_materials_A : data_values_materials_B).filter((item) =>
        search.toLowerCase() === ""
            ? item
            : item.week.toLowerCase().includes(search.toLowerCase())
    );

    const handleMaterialSelect = (material: "A" | "B") => {
        setSelectedMaterial(material);
        setSearch(""); 
    };
    return(
        <section className="pt-[73px] flex flex-col justify-center items-center gap-10 pb-24">
            <div className="p-10 flex flex-col text-center gap-14">
                <div>
                    <TitleBig
                        title="Inventory Control"/>
                    <SubTitle
                        subTitle="See your stock here"/>
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
                <Box classname="w-[1237px] p-4">
                    <div className="max-h-[480px] overflow-y-auto">
                        <table className="font-poppinsFont text-center w-full rounded-xl">
                            <thead className="text-xl bg-neutral-200 sticky top-0 z-10">
                                <tr>
                                    <th className="p-4">Week</th>
                                    <th className="p-4">Material</th>
                                    <th className="p-4">Safety Stock </th>
                                    <th className="p-4">Consumption</th>
                                    <th className="p-4">Inventory</th>
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
                                            <td className="p-4">{item.safety_stock} pcs</td>
                                            <td className="p-4">{item.consumption} pcs</td>
                                            <td className="p-4">{item.inventory} pcs</td>
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
        </section>
    )
}

export default Warenhouse