import { Outlet, Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    
    return(
        <>
            <Header />

            <main>
                <Outlet /> 
                {/* this is where routes will render */}
            </main>

            <Footer />
        </>
    )
}