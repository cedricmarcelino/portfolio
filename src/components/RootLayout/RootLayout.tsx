import { ReactElement } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function RootLayout({ children }: { children: ReactElement}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}