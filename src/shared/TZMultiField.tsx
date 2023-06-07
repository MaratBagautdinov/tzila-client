import { FC } from "react";
import { TZMultiFieldProps } from "../types.ts";
import { Box, Button, Typography } from "@mui/material";
import MultiFieldInput from "./MultiFieldInput.tsx";

const TZMultiField: FC<TZMultiFieldProps> = ({ value, handlerSave, label, disabled }) => {
    const handlerChangeInput = (key: number, val: string) => {
        const fields = [...value]
        fields[key] = val
        handlerSave(fields)
    }

    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "self-start",
        gap: "15px",
        width: "100%",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    }}>
        <Typography component="h6" variant="h6" gutterBottom sx={{ alignSelf: "start" }} children={label} />
        {value.map((input, key) => <MultiFieldInput
            disabled={disabled}
            input={input}
            handlerChangeInput={handlerChangeInput}
            key={key}
            index={key} />)}
        <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button
                variant="contained"
                color="success"
                onClick={() => handlerSave([...value, ''])}
                sx={{ maxWidth: "200px", alignSelf: "start" }}
                children={"Добавить"}
                disabled={disabled}
            />
            <Button
                variant="contained"
                color="error"
                onClick={() => handlerSave([...value].slice(0, -1))}
                sx={{ maxWidth: "200px", alignSelf: "start" }}
                children={"Удалить"}
                disabled={disabled}
            />
        </Box>
    </Box>
}
export default TZMultiField