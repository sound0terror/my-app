import './Spinner.css';

const Spinner = () => {
    return (
        <div className="wrapper">
            <div className="loader">
                <div className="l_main">
                    <div className="l_square"><span/><span/><span/></div>
                    <div className="l_square"><span/><span/><span/></div>
                    <div className="l_square"><span/><span/><span/></div>
                    <div className="l_square"><span/><span/><span/></div>
                </div>
            </div>
        </div>

    )
}
export default Spinner;