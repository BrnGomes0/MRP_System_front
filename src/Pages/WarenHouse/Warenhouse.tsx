import React from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import {data_values_warenhouse} from "./data"
import Box from "../../components/Box/Box";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const Warenhouse: React.FC = () => {

    const [search, setSearch] = useState("");

    const filteredData = data_values_warenhouse.filter((item) =>
        search.toLowerCase() === "" 
            ? item 
            : item.week.toLowerCase().includes(search)
    );

    return(
        <section className="pt-[73px] flex flex-col justify-center items-center gap-10">
            <div className="p-10 flex flex-col text-center gap-14">
                <div>
                    <TitleBig
                        title="Inventory Control"/>
                    <SubTitle
                        subTitle="See your stock here"/>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="p-2">
                    <SearchBar
                        placeholder="Search here..."
                        setSearch={setSearch}
                    />
                </div>
                <Box classname="w-[1237px] p-4">
                    <table className="font-poppinsFont text-center w-full rounded-xl">
                        <thead className="text-xl bg-neutral-200">
                            <tr>
                                <th className="p-4">Week</th>
                                <th className="p-4">Security Stock</th>
                                <th className="p-4">Consumption</th>
                                <th className="p-4">Inicial Inventory</th>
                                <th className="p-4">Final Inventory</th>
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
                                        <td className="p-4">{item.security_stock}</td>
                                        <td className="p-4">{item.consumption}</td>
                                        <td className="p-4">{item.inicial_inventory}</td>
                                        <td className="p-4">{item.final_stock}</td>
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
                </Box>
            </div>
        </section>
    )
}

export default Warenhouse