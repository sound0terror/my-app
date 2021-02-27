import "./Quote.css";

const Quote = ({quote, author,editQuote, deleteQuote}) => {
    return (
        <blockquote className="Quote">
            <p className="Quote-Text">{quote}</p>
            <cite className="Quote-Author">- {author}</cite>
            <span onClick={deleteQuote} className="Quote-Delete_Button">X</span>
            <button onClick={editQuote} className="Quote-Button">Изменить цитату</button>
        </blockquote>
    )
}

export default Quote;