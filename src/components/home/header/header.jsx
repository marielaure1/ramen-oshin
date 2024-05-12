import Image from "next/image";
import Banner from "@img/banner.png";
import Link from "next/link";

export default function Header() {
    return(
        <header className="header" id="header">
            <Image className="header-img" src={Banner} alt="Ramen Oshin" />

            <div className="header-content">
                <h1 className="header-content-title">Ramen Oshin</h1>
                <Link href={"/"} className="header-content-btn btn-primary-fill">01 23 45 67 89</Link>
            </div>
        </header>
    )
}