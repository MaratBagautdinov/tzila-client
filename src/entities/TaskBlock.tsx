import { FC } from "react";
import { TZBlock } from "../types.ts";
import { Grid, Paper, Typography } from "@mui/material";
import TaskFieldLayout from "../widgets/TaskFieldLayout.tsx";
const TaskBlock: FC<TZBlock & {blockIndex: number}> = ({ blockIndex, name, fields }) =>
    <Grid className={`block-${blockIndex}`} key={blockIndex} item xs={12} md={12} lg={12}>
        <Paper
            sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Typography
                component="h3"
                variant="h6"
                color="primary"
                gutterBottom
            >
                {name}
            </Typography>
            {fields.map((field, key) => field.type &&
                <TaskFieldLayout
                    key={field.id + blockIndex}
                    helperText={field.helperText}
                    label={field.label}
                    type={field.type}
                    fieldIndex={key}
                    blockIndex={blockIndex}
                    field={field} />)}
        </Paper>
    </Grid>
export default TaskBlock