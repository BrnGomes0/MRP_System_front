import React, { useState, useEffect } from "react";

interface DropDownItem{
    id: string;
    name: string;
}

interface DropDownProps{
    id: string;
    title?: string;
    data: DropDownItem[];
    position: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    classname: string;
    selectedId?: string;
    onSelected?: (id: string) => void;
}



const DropDown: React.FC<DropDownProps> = ({
    id,
    title = "Select",
    data,
    position = "bottom-left",
    selectedId,
    onSelected
}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
        selectedId ? data?.find((item) => item.id === selectedId) : undefined
    );  

    const handleChange = (item: DropdownItem) => {
        setSelectedItem(item);
        onSelect && onSelect(item.id);
        setIsOpen(false);
      };

    
    useEffect(() => {
      if (selectedId && data) {
        const newSelectedItem = data.find((item) => item.id === selectedId);
        newSelectedItem && setSelectedItem(newSelectedItem);
      } else {
        setSelectedItem(undefined);
      }
    }, [selectedId, data]);

    

    return(
        <div className="">
            
        </div>
    )
}


export default DropDown