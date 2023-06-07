import { Box, Container, Grid, Toolbar } from "@mui/material";
import Copyright from "../shared/Copyright.tsx";
import { FC } from "react";
import { TZ } from "../types.ts";
import TaskBlock from "../entities/TaskBlock.tsx";

const EditBoard: FC<{ TZ: TZ }> = ({ TZ }) =>
    <Box
        component="main"
        sx={{
            backgroundColor: ({ palette: { mode, grey } }) =>
                grey[mode === "light" ? 100 : 900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
        }}
    >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

                {TZ.blocks.map((block, key) =>
                    <TaskBlock
                        key={block.id}
                        blockIndex={key}
                        {...block}
                    />
                )}

            </Grid>
            <Copyright sx={{ pt: 4 }} />
        </Container>
    </Box>

export default EditBoard