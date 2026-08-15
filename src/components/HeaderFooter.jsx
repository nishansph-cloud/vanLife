import { Outlet, Link } from "react-router-dom"

export default function Header() {

    return(
        <>
            <header>
                <Link className="home" to="/">#Vanlife</Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </header>

            <main>
                <Outlet /> 
                {/* this is where routes will render */}
            </main>

            <footer>
                &copy;2026 
                <Link to="/">#VANLIFE</Link>
            </footer>
        </>
    )
}