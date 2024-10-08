import React from "react";
import Line from "../Icons/LineBosch/LineBosch";
import CopyrightIcon from "../Icons/CopyrightIcon/CopyrightIcon";
import SmallLetter from "../SmallLetter/SmallLetter";

const Footer: React.FC = () => {
    return(
        <div className="w-full">
            <div className="w-full h-[1px] bg-gray-400"></div>
            <div className="flex justify-center items-center h-[56px]">
                <CopyrightIcon/>
                <SmallLetter
                    paragraph="Developed by DTA of GS/PSC3"
                    isBold={true}
                />
            </div> 
            <Line/>
        </div>
    )
}

export default Footer