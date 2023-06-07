import {Divider, Drawer, IconButton, List, ListItem, ListItemText, Toolbar} from "@mui/material";
import {ChevronLeft} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import {FC, ReactNode} from "react";
import {TTheme} from "../types.ts";
const Draw = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "open"})(({ theme, open }) =>
    ({
        "& .MuiDrawer-paper": {
            position: "relative",
            whiteSpace: "nowrap",
            width: 240,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: "border-box",
            ...(!open && {
                overflowX: "hidden",
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up("sm")]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }));
const TaskSidebarLayout:FC<{children?: ReactNode, setOpen: (open: boolean)=> void } & TTheme>= ({children, open,setOpen})=>
 <Draw variant="permanent" open={open}>
    <Toolbar
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
        }}
    >
        <IconButton onClick={() => setOpen(!open)}>
            <ChevronLeft/>
        </IconButton>
    </Toolbar>
    <Divider/>
    <List component="nav">
        {children}
        <Divider sx={{my: 1}}/>
        <ListItem>
            <ListItemText primary={``}/>
        </ListItem>
    </List>
</Draw>;

export default TaskSidebarLayout