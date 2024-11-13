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
    display: "block",
    weight: ["300", "400", "700"]
});


// Usage in global CSS
export const globalStyles = `
  :root {
    ${lato.variable}: "Lato", serif;
    ${anton.variable}: 'Anton', sans-serif;
  }
`;

export default function Fonts() {
  return null; // This component is for importing the fonts
}