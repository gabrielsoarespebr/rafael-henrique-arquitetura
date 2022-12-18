import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./Components/Header";

import {Inicio} from './Pages/Inicio';
import {Projetos} from './Pages/Projetos';
import {Contato} from './Pages/Contato';
import {Erro} from './Pages/Erro';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/projetos" element={<Projetos/>} />
                <Route path="/contato" element={<Contato/>} />
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )

}