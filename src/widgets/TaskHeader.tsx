import {Box, CssBaseline, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import MuiAppBar, {AppBarProps} from "@mui/material/AppBar";
import {FC} from "react";
import {ITaskHeader, TTheme} from "../types.ts";

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps & TTheme>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const TaskHeader:FC<ITaskHeader & TTheme> = ({open, setOpen, status}) =>
    <Box sx={{display: "flex"}}>
        <CssBaseline/>
        <AppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                    pr: "24px", // keep right padding when drawer closed
                    backgroundColor: "green",
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setOpen(!open)}
                    sx={{
                        marginRight: "36px",
                        ...(open && {display: "none"}),
                    }}
                >
                    <Menu/>
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{flexGrow: 1}}
                >
                    Статус: {["Редактируется", "Проверяется", "Принято"][status]}
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
export default TaskHeader