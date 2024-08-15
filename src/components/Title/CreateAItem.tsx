import React from "react";

interface TitleProps{
    title: string;
    style?: React.CSSProperties;
}

const CreateAItem: React.FC<TitleProps> = ({ title, style }) =>{
    return(
        <h1 style={style}>{title}</h1>
    )
}

export default CreateAItem