import "@/styles/globals.css";
import Menu from "./components/menu.js";
import Footer from "./components/footer.js";

export default function App({ Component, pageProps }) {
  return <>
  <Menu />
  <Component {...pageProps} />
  <Footer />
  </>
}
