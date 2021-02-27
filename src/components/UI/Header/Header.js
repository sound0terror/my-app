import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            <Logo/>
            <NavigationItems/>
        </header>
    )
}

export default Header;