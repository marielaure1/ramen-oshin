import Nav from "@components/layout/nav/nav";
import Footer from "@components/layout/footer/footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="css/animate.css"/>
      </head>
      <body>
          <Nav/>
            {children}
          <Footer/>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
          <script>
            new WOW().init();
          </script>

        </body>
    </html>
  );
}
