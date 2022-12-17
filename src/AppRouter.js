import { createBrowserRouter } from "react-router-dom";

import { Inicio } from "./Pages/Inicio";
import { Contato } from "./Pages/Contato";
import { Projetos } from "./Pages/Projetos";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Inicio/>
    },
    {
        path: "projetos",
        element: <Projetos/>
    },
    {
        path: "contato",
        element: <Contato/>
    }
]);