import {NavLink} from "react-router-dom";
import './NavigationItem.css';

const  NavigationItem = ({to, exact, children}) => {
    return (
        <li className="NavigationItems-Item">
            <NavLink activeStyle={{ color: 'red' }} className="NavigationItems-Link" to={to} exact={exact}>{children}</NavLink>
        </li>
    )
}

export default NavigationItem;