import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "@/pages/index";
import NotFound from "./NotFound/NotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default  AppRoutes;