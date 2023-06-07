import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Create from "../pages/Create.tsx";
import Task from "../pages/Task.tsx";
import { Toaster} from "react-hot-toast";
import {QueryClient, QueryClientProvider} from "react-query";
import Auth from "../features/Auth.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Create/>
    },
    {
        path: '/:key',
        element: <Task/>
    },
    {
        path: '/auth',
        element: <Auth/>
    }
])
const queryClient = new QueryClient();
createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Toaster/>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </StrictMode>,
)

