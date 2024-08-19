import React from "react";
import Line from "../LineBosch/LineBosch";
import CopyrightIcon from "../CopyrightIcon/CopyrightIcon";
import SmallLetter from "../SmallLetter/SmallLetter";

const Footer: React.FC = () => {
    return(
        <div className="w-full pt-12">
            <div className="w-full h-[1px] bg-gray-400"></div>
            <div className="flex justify-center items-center h-[56px]">
                <CopyrightIcon/>
                <SmallLetter
                    paragraph="Developed by GS/PSC3"
                    isBold={true}
                />
            </div> 
            <Line/>
        </div>
    )
}

export default Footer