import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC } from "react";
import { IListButton } from "../types.ts";

const TaskListButton: FC<IListButton> = ({ children, primary, disabled }) =>
    <ListItemButton disabled={disabled}>
        <ListItemIcon>
            {children}
        </ListItemIcon>
        <ListItemText primary={primary} />
    </ListItemButton>

export default TaskListButton