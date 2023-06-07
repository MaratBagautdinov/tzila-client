import { TZCheckboxGroupProps } from "../types";
import { FC } from 'react'
import {
    FormGroup,
    Checkbox,
    FormControlLabel,
    FormLabel
} from "@mui/material";

const TZCheckboxGroup: FC<TZCheckboxGroupProps> = ({ common, field, disabled, value, handlerSave }) =>
    <FormGroup {...common}>
        <FormLabel component="div" children={<h4>{field.label}</h4>} />
        {field.options?.map(({ value: id, label }) => (
            <FormControlLabel key={id} label={label} control={
                <Checkbox value={id}
                    disabled={disabled}
                    checked={[...value].includes(id)}
                    onChange={(e) => handlerSave(
                        [...value].includes(e.target.value)
                            ? [...value].filter(p => e.target.value !== p)
                            : [...value, e.target.value]
                    )}
                />
            } />
        ))}
    </FormGroup>


export default TZCheckboxGroup