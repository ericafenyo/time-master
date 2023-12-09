import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children?: ReactNode }) => {
    return (
        <main className="drawer lg:drawer-open bg-slate-100">
            <input id="drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side  bg-white">
                <Sidebar />
            </div>
            <div className="drawer-content">
                <Navbar />
                {children}
            </div>

        </main>
    );
};

export default Layout;
