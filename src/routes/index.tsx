import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Information from "../pages/information";


const AppRoutes:FC=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/information" element={<Information />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;