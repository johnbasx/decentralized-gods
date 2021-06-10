import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" className="bg-black">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
