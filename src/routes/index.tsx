import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../components/layout";
import Information1 from "../pages/information1";


const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/information1" element={<Layout><Information1 /></Layout>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;