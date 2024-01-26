import { ReactElement, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ROUTE } from "@/constants/enum";
import Menu from "../Menu/Menu";

export default function RootLayout({ children, path }: { children: ReactElement, path: ROUTE}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>  
            {isOpen
            ? 
                <Menu setIsOpen={setIsOpen} isOpen={isOpen}/> 
            :
                <>
                    <Header path={path} setIsOpen={setIsOpen} isOpen={isOpen}/>
                    {children}
                    <Footer/>
                </>
            }
        </>
    )
}