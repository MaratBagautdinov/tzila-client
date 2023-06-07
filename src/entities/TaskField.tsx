import { FC } from "react";
import { ITaskField } from "../types.ts";
import TZMultiField from "../shared/TZMultiField.tsx";
import {
    TextField,
    Checkbox,
    FormControlLabel,
    RadioGroup,
    Radio,
} from "@mui/material";
import TZCheckboxGroup from "../shared/TZCheckboxGroup.tsx";


const TaskField: FC<ITaskField> = ({ field, isErr, disabled, handlerSave, setValue, value }) => {
    const common = {
        label: field.label,
        name: field.name,
        required: field.required,
        disabled: disabled,
    }
    switch (field.type) {
        case "TextField": return (
            <TextField
                {...common}
                value={String(value)}
                onBlur={() => handlerSave}
                error={isErr}
                helperText={field.helperText}
                onChange={(e) => setValue(e.target.value)}
            />)
        case "Textarea": return (
            <TextField
                {...common}
                onBlur={() => handlerSave}
                onChange={(e) => setValue(e.target.value)}
                multiline
                error={isErr}
                helperText={field.helperText}
                value={String(value)}
                minRows={3}
            />)
        case "Checkbox": return (
            <FormControlLabel label={field.label} control={
                <Checkbox {...common}
                    value={String(value)}
                    checked={String(value) === "true"}
                    onChange={(e) => handlerSave(e.target.value === "true" ? "false" : "true")}
                />}
            />)
        case "RadioGroup": return (
            <RadioGroup
                {...common}
                value={String(value)}
                onChange={(e) => handlerSave(e.target.value)}
            >
                {field.options?.map((option) => (
                    <FormControlLabel
                        disabled={disabled}
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>)
        case "CheckboxGroup": return (
            <TZCheckboxGroup
                common={common}
                disabled={disabled}
                field={field}
                handlerSave={handlerSave}
                value={value}
            />
        )
        case "MultiField": return (
            <TZMultiField
                disabled={disabled}
                value={[...value]}
                label={field.label}
                handlerSave={handlerSave} />
        )
        default:
            return null
    }
}

export default TaskField