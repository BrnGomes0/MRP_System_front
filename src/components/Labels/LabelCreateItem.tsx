import React from "react";

interface LabelProps{
    title: string
}

const LabelCreateItem: React.FC<LabelProps> = ({title}) => {
    return(
        <div>
            <label>{title}</label>
        </div>
    )
}

export default LabelCreateItem