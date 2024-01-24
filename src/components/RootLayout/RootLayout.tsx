import { ReactElement } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ROUTE } from "@/constants/enum";

export default function RootLayout({ children, path }: { children: ReactElement, path: ROUTE}) {
    return (
        <>
            <Header path={path}/>
                {children}
            <Footer/>
        </>
    )
}