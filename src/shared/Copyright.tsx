import {Link, Typography} from "@mui/material";


export default(styles: any) =>
    <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...styles}
    >
        {"Copyright © "}
        <Link color="inherit" href={import.meta.env.VITE_KORZILLA} target="_blank">
            Korzilla
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
    </Typography>