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
            : item.info_record.toLowerCase().includes(search)
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
                                <th className="p-4">Info Record</th>
                                <th className="p-4">Material</th>
                                <th className="p-4">Material Code</th>
                                <th className="p-4">Average Cost</th>
                                <th className="p-4">In Stock</th>
                                <th className="p-4">Value in Stock</th>
                                <th className="p-4">Last Replenishment</th>
                            </tr>
                        </thead>
                        <tbody className="text-base">
                            {filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <tr
                                        className="border-b last:border-none hover:bg-gray-100 transition-colors"
                                        key={item.id}
                                    >
                                        <td className="p-4">{item.info_record}</td>
                                        <td className="p-4">{item.material}</td>
                                        <td className="p-4">{item.material_code}</td>
                                        <td className="p-4">{item.average_cost}</td>
                                        <td className="p-4">{item.in_stock}</td>
                                        <td className="p-4">{item.value_in_stock}</td>
                                        <td className="p-4">{item.last_replenishment}</td>
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