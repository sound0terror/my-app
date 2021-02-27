import Header from "../Header/Header";
import Promo from "../Promo/Promo";

const Layout = props => (
    <>
        <Header/>
        <Promo/>
        <main className="Layout-Content">
            {props.children}
        </main>
    </>
);
export default Layout;