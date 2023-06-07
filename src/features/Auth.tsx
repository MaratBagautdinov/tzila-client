import {Box, Button, TextField} from "@mui/material";
import {FC, useState} from "react";
import useTZStore from "../TZStore/useTZStore.ts";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: '1rem',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: "0px 0px 100px #c0cdf9",
    borderRadius: 2,
    p: 4,
};
const Auth:FC = () => {
    const {setAuth} = useTZStore()
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <Box sx={style}>
            <h2>Авторизация</h2>
            <TextField label={"Логин"} name={"Логин"} value={login} onChange={e=>setLogin(e.target.value)}/>
            <TextField label={"Пароль"} name={"Пароль"} value={password} type={"password"} onChange={e=>setPassword(e.target.value)}/>
            <Button onClick={()=>setAuth(login, password)} children={"Войти"}/>
        </Box>
    )
}
export default Auth