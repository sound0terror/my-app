import Quote from "./Quote/Quote";
import './Quotes.css';

const Quotes = ({quotes, deleteQuote, editQuote}) => {
    return (
        <div className="Quotes">
            {quotes.length > 0 ?
                quotes.map(quote => <Quote editQuote={() => {editQuote(quote.id)}} deleteQuote={() => {deleteQuote(quote.id)}} key={quote.id} quote={quote.quote} author={quote.author}/>)
                :
                <h2>Тут пока что ничего нет.</h2>
            }
        </div>
    )
}
export default Quotes;