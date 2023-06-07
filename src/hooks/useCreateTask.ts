import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {TCreateData} from "../types.ts";
import axios from "axios";

export default () => {
    const [createData, setCreateData] = useState<TCreateData>({method: 'create_task', tariffId: '', companyName: '', managerId: ''})
    const getter = async (method: string) =>
        (await axios.post(import.meta.env.VITE_API,
            {method: method})).data


    const navigate = useNavigate();
    const createTaskHandled = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post<{ key: string }>(import.meta.env.VITE_API, createData)
            .then(res => {
                navigate(`/${res.data.key}`);
            })
    }
    return {createData, getter, setCreateData, createTaskHandled}
}