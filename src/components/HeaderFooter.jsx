import { Outlet, Link } from "react-router-dom"

export default function Header() {

    return(
        <>
            <header>
                <Link className="home" to="/">#Vanlife</Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link>Van</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                &copy;2026 #VANLIFE
            </footer>
        </>
    )
}