import QuotesLogo from '../../../assets/Logo.png';
import {NavLink} from "react-router-dom";
import "./Logo.css";

const Logo = () => {
    return (
        <NavLink to="/" className="LogoLink">
            <img src={QuotesLogo} alt="логотип сайта" className="LogoLink_img"/>
        </NavLink>
    )
}

export default Logo;