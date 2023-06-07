import { useParams } from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import TaskHeader from "../widgets/TaskHeader.tsx";
import TaskSidebar from "../features/TaskSidebar.tsx";
import TaskSidebarLayout from "../widgets/TaskSidebarLayout.tsx";
import Loading from "../shared/Loading.tsx";
import EditBoard from "../widgets/EditBoard.tsx";
import { Box } from "@mui/material";
import useTZStore from "../TZStore/useTZStore.ts";
import { Toaster } from "react-hot-toast";


export default () => {
    const { getTZ, TZ, status } = useTZStore()
    const { key } = useParams()
    const [open, setOpen] = useState<boolean>(true);
    useEffect(() => {
        getTZ(key)
    }, [key, getTZ])
    switch (status) {
        case "fulfilled": return (
            <ThemeProvider theme={createTheme()}>
                <Box sx={{ display: "flex" }}>
                    <TaskHeader setOpen={setOpen} open={open} status={TZ.status} />
                    <TaskSidebarLayout setOpen={setOpen} open={open}>
                        <TaskSidebar />
                    </TaskSidebarLayout>
                    <EditBoard TZ={TZ} />
                </Box>
            </ThemeProvider>
        );
        case "rejected": return <Toaster />
        case "pending": return <Loading />
    }
}