import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Information from "../pages/information";
import Layout from "../components/layout";


const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/information" element={<Layout><Information /></Layout>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;