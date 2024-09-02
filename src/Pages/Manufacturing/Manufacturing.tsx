import React, { useState } from "react";
import TitleBig from "../../components/Title/Title_h1";
import SubTitle from "../../components/SubTitle/SubTitle";
import { data_values } from "./data";
import Box from "../../components/Box/Box";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import PopUp from "../../components/PopUp/PopUp";

const Manufacturing: React.FC = () => {
    
    const [search, setSearch] = useState("");
    const [popUp, setPopUp] = useState(false);

    const filteredData = data_values.filter((item) =>
        search.toLowerCase() === "" 
            ? item 
            : item.order_received.toLowerCase().includes(search)
    );

    return (
        <section className="pt-[73px] flex flex-col justify-center items-center gap-10">
            <div className="p-10 flex flex-col text-center gap-14">
                <div>
                    <TitleBig title="Purchase control" />
                    <SubTitle subTitle="See your PO here" />
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
                                <th className="p-4">Order Received</th>
                                <th className="p-4">Order Placed</th>
                                <th className="p-4"></th>
                                <th className="p-4">Week</th>
                            </tr>
                        </thead>
                        <tbody className="text-base">
                            {filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <tr
                                        className="border-b last:border-none hover:bg-gray-100 transition-colors"
                                        key={item.id}
                                    >
                                        <td className="p-4">{item.order_received}</td>
                                        <td className="p-4">{item.order_placed}</td>
                                        <td className="p-4">{}</td>
                                        <td className="p-4">{item.week}</td>

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
