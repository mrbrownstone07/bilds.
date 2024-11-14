import "./globals.css";

export const metadata = {
	title: "Bilds.",
	description: "",
	// metadataBase: new URL("https://www.bangladeshrisin.com"),
	openGraph: {
	  title: "Bilds.",
	  description: "Empowering Bangladesh's FMCG Industry",
	//   url: "https://www.bangladeshrisin.com",
	  siteName: "Bilds.",
	//   images: [
	// 	{
	// 	  url: "/black-bdrisin-only-hand.svg",
	// 	  width: 1200,
	// 	  height: 630,
	// 	  alt: "Bilds.",
	// 	},
	//   ],
	  locale: "en_US",
	  type: "website",
	},
	twitter: {
	  card: "summary_large_image",
	  title: "Bilds.",
	  description: "Empowering Bangladesh's FMCG Industry",
	//   images: ["/black-bdrisin-only-hand.svg"],
	},
	themeColor: [
	  { media: "(prefers-color-scheme: light)", color: "#a5a4a4" },
	  { media: "(prefers-color-scheme: dark)", color: "#a5a4a4" },
	],
  };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/vercel.svg" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta name="format-detection" content="telephone=no" />
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}
