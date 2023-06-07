import { FC, useEffect, useState } from "react";
import { Box, FormControl, FormHelperText } from "@mui/material";
import { ITaskFieldLayout, TZFiled } from "../types.ts";
import TaskField from "../entities/TaskField.tsx";
import useTZStore from "../TZStore/useTZStore.ts";

const TaskFieldLayout: FC<ITaskFieldLayout> = (props) => {
    const { TZ: { status }, saveField } = useTZStore()

    const [value, setValue] = useState<TZFiled['value']>(props.field.value)
    const [isFieldErr, setFieldErr] = useState<boolean>(false)
    useEffect(() => {
        setValue(props.field.value)
    }, [props.field.value, setValue])

    useEffect(() => {
        setFieldErr(props.field.required && value?.length === 0)
    }, [value, setFieldErr, props.field.required])

    const handlerSave = (val: TZFiled['value'] = value) => {
        saveField(val, props.blockIndex, props.fieldIndex)
    }

    return (
        <Box sx={{ minWidth: 250, marginTop: "10px", marginBottom: "10px" }}>
            <FormControl fullWidth>
                <FormHelperText
                    children={props.helperText}
                    sx={{
                        margin: "15px 0 15px 0",
                        fontSize: "14px",
                    }} />
                <TaskField isErr={isFieldErr} value={value} setValue={setValue} field={props.field} disabled={status !== "0"} handlerSave={handlerSave} />
            </FormControl>
        </Box>
    )
}
export default TaskFieldLayout