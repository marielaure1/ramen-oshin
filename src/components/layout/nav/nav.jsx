import Link from "next/link";

export default function Nav() {
    return(
        <nav className="nav">
            <div className="nav-left">
                <Link href={"#accueil"} className="nav-link">Accueil</Link>
                <Link href={"#a-propos"} className="nav-link">A propos</Link>
                <Link href={"#menu"} className="nav-link">Menu</Link>
            </div>

            <div className="nav-center">
                <Link href={"/"} className="logo">Ramen Oshin</Link>
            </div>

            <div className="nav-right">
                <Link href={"#galerie"} className="nav-link">Galerie</Link>
                <Link href={"#contact"} className="nav-link">Contact</Link>
                <Link href={"#suivez-nous"} className="nav-link">Suivez-nous</Link>
            </div>
        </nav>
    )
}