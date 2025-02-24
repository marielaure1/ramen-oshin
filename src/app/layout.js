import "@theme/index.css";

export const metadata = {
  title: "Oshin",
  description: "Oshin est un restaurant de cuisine traditionnelle japonaise situé à Paris.",
  image: "/images/og-image.jpg",
  url: "https://oshin.fr",
  type: "website",
  siteName: "Oshin",
  siteTitle: "Oshin",
  siteDescription: "Oshin est un restaurant de cuisine traditionnelle japonaise situé à Paris.",
  siteUrl: "https://oshin.fr",
  siteImage: "/images/og-image.jpg",
  siteLanguage: "fr",
  siteLocale: "fr_FR",
  authorName: "Oshin",
  authorImage: "/images/author.jpg",
  favicon: "/favicon.ico",
  themeColor: "#000000",
  backgroundColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="css/animate.css"/>
      </head>
      <body className="body">
        {children}
      </body>
    </html>
  );
}
