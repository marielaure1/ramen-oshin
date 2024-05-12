import Image from "next/image";
import useMenu from "@components/home/menu/menu.hook";

export default function Menu() {

    const { menuList } = useMenu();
 
    return(
        <section className="menu" id="menu">
            <h2 className="menu-title title-section">Menu</h2>

            <div className="menu-grid">
                {menuList && menuList.map((plat, key) => (
                    <div className="plat" key={key}>
                        <div className="plat-top">
                            <span className="plat-top-flag">{plat.flag}</span>
                            <span className="plat-top-emoji">{plat.emoji}</span>
                        </div>
                        <div className="plat-center">
                            <Image className="plat-center-img" src={plat.img} alt={"Plat"}/>
                        </div>
                        <div className="plat-bottom">
                            <h3 className="plat-bottom-title">{plat.title}</h3>
                            <p className="plat-bottom-text">{plat.text}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}