import { SelectChangeEvent } from '@mui/material/Select';
import { ReactNode } from "react";
export const isFieldContainsOptions = {
    "TextField": false,
    "Textarea": false,
    "CheckboxGroup": true,
    "Checkbox": false,
    "RadioGroup": true,
    "MultiField": false,
};
export type TFieldType = keyof typeof isFieldContainsOptions;
export type TStatus = "0" | "1" | "2"
export type TResStatus = "pending" | "fulfilled" | "rejected"

export type TZFieldOptionsItem = {
    label: string
    value: string
}
export type TZFiled = {
    id: string
    helperText: string
    name: string
    label: string
    required: boolean
    type: TFieldType
    value: string | string[]
    priority?: number
    options?: TZFieldOptionsItem[]
    error?: boolean
}
export type TZBlock = {
    id: string
    name: 'О компании'
    | 'Внешний вид сайта'
    | 'Информация для главного баннера'
    | 'Информация для зоны сайта'
    | 'Навигация сайта'
    fields: TZFiled[]
}
export type TZ = {
    blocks: TZBlock[]
    key: string
    status: TStatus
}

export interface ITZStore {
    TZ: TZ,
    status: TResStatus
    auth: string | false
    setAuth: (login: string, password: string)=> void
    getTZ: (keyTZ?: string) => void
    saveField: (value: TZFiled['value'], blockIndex: number, fieldIndex: number) => void
    onSend: () => void
    onCancel: () => void
    onPrint: () => void
    onConfirm: () => void
}

export interface ITaskField {
    field: TZFiled,
    isErr: boolean,
    disabled: boolean,
    setValue: (val: TZFiled['value']) => void
    handlerSave: (val?: TZFiled['value']) => void
    value: TZFiled["value"]
}
export interface TZCheckboxGroupProps {
    common: any
    field: TZFiled,
    disabled: boolean
    handlerSave: ITaskField['handlerSave']
    value: TZFiled['value']
}
export interface ITaskFieldLayout {
    helperText: string
    label: string
    type: TFieldType
    field: TZFiled
    blockIndex: number
    fieldIndex: number
}

export interface IListButton {
    children?: ReactNode,
    disabled: boolean,
    primary: string,
}

export type TOption = { label: string, value: string }

export type TCreateData = {
    tariffId: string
    method: string
    managerId: string
    companyName: string
}

export type TFormOptions = {
    value: string
    options: TOption[]
    title: string
    handleChange: (e: SelectChangeEvent) => void
}

export interface ITaskHeader {
    setOpen: (open: boolean) => void
    status: TStatus
}

export type TTheme = { open?: boolean }

export interface TZMultiFieldProps {
    value: string[]
    label: string
    disabled: boolean
    handlerSave: ITaskField['handlerSave']
}