import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { FC } from "react";
import { TFormOptions } from "../types.ts";

const FormOptions: FC<TFormOptions> = ({ value, title, options, handleChange }) =>
    <FormControl fullWidth required>
        <InputLabel>{title}</InputLabel>
        <Select value={value} label={title} onChange={handleChange}>
            {options.map(o => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}
        </Select>
    </FormControl>

export default FormOptions