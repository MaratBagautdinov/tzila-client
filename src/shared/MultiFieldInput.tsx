import {TextField} from "@mui/material";
import {FC, useState} from "react";

const MultiFieldInput:FC<{ index:number, input:string, handlerChangeInput: (index: number, val: string) => void, disabled: boolean}> = ({index,handlerChangeInput, input, disabled})=>{
    const [val, setVal] = useState(input);
    return <TextField
        key={index}
        name={String(index)}
        value={val}
        onBlur={(e)=>handlerChangeInput(index, e.target.value)}
        onChange={e=>setVal(e.target.value)}
        disabled ={disabled}
    />
}

export default MultiFieldInput