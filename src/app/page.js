import "@theme/index.scss";
import Header from "@components/home/header/header";
import About from "@components/home/about/about";
import Menu from "@components/home/menu/menu";
import Contact from "@components/home/contact/contact";
import SocialMedia from "@components/home/social-media/social-media";

export default function Home() {
  return (
    <main className="home">
      <Header/>
      <About/>
      <Menu/>
      <Contact/>
      <SocialMedia/>
    </main>
  );
}
