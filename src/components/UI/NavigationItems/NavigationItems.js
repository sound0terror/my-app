import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
    return (
        <nav className="NavigationItems">
            <ul className="NavigationItems-List">
                <NavigationItem exact to='/quotes'>Quotes</NavigationItem>
                <NavigationItem to='/quotes/create'>Submit new quote</NavigationItem>
            </ul>
        </nav>
    )
}

export default NavigationItems;