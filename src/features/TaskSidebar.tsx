import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import {FC} from "react";
import SendIcon from "@mui/icons-material/Send";
import PrintIcon from "@mui/icons-material/Print";
import useTZStore from "../TZStore/useTZStore.ts";

const TaskSidebar: FC = () => {
    const {TZ, onSend, onPrint, onCancel, onConfirm, auth} = useTZStore()
    return (
        <>
            <ListItemButton disabled={false} onClick={onPrint}>
                <ListItemIcon>
                    <PrintIcon/>
                </ListItemIcon>
                <ListItemText primary="Распечатать"/>
            </ListItemButton>
            {!auth && TZ.status === "0" && (
                <ListItemButton onClick={onSend}>
                    <ListItemIcon>
                        <SendIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Отправить"}/>
                </ListItemButton>
            )}
            {TZ.status === "1" && (
                <ListItemButton onClick={onCancel}>
                    <ListItemIcon>
                        <EditIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Отменить"/>
                </ListItemButton>
            )}
            {auth && TZ.status === "1" && <ListItemButton onClick={onConfirm}>
                <ListItemIcon>
                    <CheckCircleOutlineIcon/>
                </ListItemIcon>
                <ListItemText primary="Подтвердить"/>
            </ListItemButton>}
        </>
    );
};

export default TaskSidebar;
