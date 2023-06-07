import { create } from 'zustand'
import { ITZStore, TStatus, TZBlock } from "../types.ts";
import axios from "axios";
import { toast } from "react-hot-toast";

const useTZStore = create<ITZStore>((set, get) => ({
    TZ: {
        blocks: [],
        key: '',
        status: "0"
    },
    auth: localStorage.getItem('auth') || false,
    setAuth:(login, password)=>{
        localStorage.setItem('auth', login)
        set({auth: login})
    },
    status: 'pending',
    getTZ: async (key) => {
        set({ status: "pending", })
        if (key) {
            await axios.post<{ status: TStatus, task: TZBlock[] }>(import.meta.env.VITE_API, {
                key,
                method: 'get_view_tasks'
            })
                .then(({ data: { task, status } }) => {
                    // добавление поля error к всем fields
                    set({
                        status: "fulfilled",
                        TZ: {
                            key,
                            blocks: task,
                            status: status,
                        }
                    })
                })
                .catch(({ response }) => {
                    toast.error(response.data.message)
                    set({ status: "rejected" })
                })
        } else {
            toast.error('Задача не выбрана')
            set({ status: "rejected", })
        }
    },
    saveField: async (value, blockIndex, fieldIndex) => {
        const TZ = get().TZ
        TZ.blocks[blockIndex].fields[fieldIndex].value = value
        const block = get().TZ.blocks[blockIndex]
        const field = get().TZ.blocks[blockIndex].fields[fieldIndex]
        set({TZ})
        if (value.length === 0) {
            toast.error('Значение удалено')
        }
        await axios.post(import.meta.env.VITE_API, {
            key: get().TZ.key,
            block_id: Number(block.id),
            field_id: fieldIndex,
            value,
            method: 'set_value_task'
        }).then(() =>
            toast.success(`Поле ${block.name} -> ${field.name} = ${value} сохранено`)
        ).catch(({ response }) => {
            toast.error(response.data.message)
        })


    },
    onSend: async () => {
        await axios.post(import.meta.env.VITE_API, {
            key: get().TZ.key,
            method: 'complete_task'
        }).then(() => {
            toast.success('onSend')
            set({
                TZ: {
                    ...get().TZ,
                    status: "2"
                }
            })
        })

    },
    onCancel: async () => {
        await axios.post(import.meta.env.VITE_API, {
            key: get().TZ.key,
            method: 'renew_task'
        }).then(() => {
            toast.success('onCancel')
            set({
                TZ: {
                    ...get().TZ,
                    status: "0"
                }
            })
        })

    },
    onPrint: async () => {
        toast.success('onPrint')
    },
    onConfirm: async () => {
        await axios.post(import.meta.env.VITE_API, {
            key: get().TZ.key,
            method: 'review_task'
        }).then(() => {
            toast.success('onConfirm')
            set({
                TZ: {
                    ...get().TZ,
                    status: "1"
                }
            })
        })

    },
}))

export default useTZStore