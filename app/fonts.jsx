// fonts.jsx
import { Lato, Doto, Anton } from "next/font/google";

export const anton = Anton({
    subsets: ["latin"],
    variable: "--font-anton",
    display: "swap",
    weight: ["400"],
  });

export const lato = Lato({
    subsets: ['latin'],
    variable: "--font-lato",
    display: "swap",
    weight: ["400", "300", "700"]
});

export const doto = Doto({
    subsets: ['latin'],
    variable: "--font-doto",
    display: "swap",
    weight: ["400", "300", '900']
});



// Usage in global CSS
export const globalStyles = `
  :root {
    ${lato.variable}: "Lato", serif;
    ${doto.variable}: "Doto", sans-serif;
    ${anton.variable}: 'Anton', sans-serif;
  }
`;

export default function Fonts() {
  return null; // This component is for importing the fonts
}