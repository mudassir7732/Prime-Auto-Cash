import { FC, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default Layout;