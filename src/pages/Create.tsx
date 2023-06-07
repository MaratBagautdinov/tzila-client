import InputOptions from "../shared/FormOptions.tsx";
import { Button, TextField } from '@mui/material'
import useCreateTask from "../hooks/useCreateTask.ts";
import Loading from "../shared/Loading.tsx";
import { useQuery } from "react-query";
import { TOption } from "../types.ts";

export default () => {
    const {
        getter,
        createData,
        setCreateData,
        createTaskHandled,
    } = useCreateTask()
    const tariffs = useQuery<TOption[]>('tariffs', () => getter('get_select_tariffs'))
    const managers = useQuery<TOption[]>('managers', () => getter('get_select_managers'))
    if (tariffs.isLoading || managers.isLoading) return <Loading />
    if (!tariffs.data || !managers.data) return <div>Error</div>

    return <form onSubmit={e => createTaskHandled(e)}>
        <TextField
            margin="normal"
            required
            fullWidth
            name="customer"
            value={createData.companyName}
            label="Компания"
            type="text"
            onChange={(e => setCreateData({ ...createData, companyName: e.target.value }))}
        />
        <InputOptions options={tariffs.data} value={createData.tariffId} title='Выберите тариф'
            handleChange={(e => setCreateData({ ...createData, tariffId: e.target.value }))} />
        <InputOptions options={managers.data} value={createData.managerId} title='Выберите менеджера'
            handleChange={(e => setCreateData({ ...createData, managerId: e.target.value }))} />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >Создать</Button>
    </form>
}