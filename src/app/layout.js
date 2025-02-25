import "@theme/index.css";

export const metadata = {
  title: "Oshin",
  description: "Oshin est un restaurant de cuisine traditionnelle japonaise situé à Paris.",
  // image: "/images/og-image.jpg",
  url: "https://oshin.marie-laure-edjour.com",
  type: "website",
  siteName: "Oshin",
  siteTitle: "Oshin",
  siteDescription: "Oshin est un restaurant de cuisine traditionnelle japonaise situé à Paris.",
  siteUrl: "https://oshin.marie-laure-edjour.com",
  // siteImage: "/images/og-image.jpg",
  siteLanguage: "fr",
  siteLocale: "fr_FR",
  authorName: "Oshin",
  // authorImage: "/images/author.jpg",
  favicon: "/favicon.ico",
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
