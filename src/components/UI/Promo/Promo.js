import PromoImage from '../../../assets/promo.jpg';
import './Promo.css';
const Promo = () => {
    return (
        <div className="Promo">
            <img src={PromoImage} alt="Картинка с котиком" className="Promo-Image"/>
            <div className="Promo-Item">
                <h1 className="Promo-Title">Самый огромный сборник цитат</h1>
                <p className="Promo-Text">Здесь собраны цитаты, со всех просторов интернета. Вы сможете найти цитату на любую тему, начиная спортом и заканчивая научной поэзией.</p>
            </div>
        </div>
    )
}

export default Promo;

