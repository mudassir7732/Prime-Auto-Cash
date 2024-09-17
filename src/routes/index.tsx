import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../components/layout";
import Information1 from "../pages/information1";


const AppRoutes: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/information1" element={<Layout><Information1 /></Layout>} />
            </Routes>
        </Router>
    )
}
export default AppRoutes;