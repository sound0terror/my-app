import axios from "../../axios-quotes";
import {useState, useEffect, useRef} from 'react';
import './QuoteForm.css';
import {useHistory} from "react-router";
import {useLoader} from "../../hooks/useLoader";

const QuoteForm = (props) => {
    const history = useHistory();
    const isMountedRef = useRef(false);
    const spinner = useLoader(axios);
    const [inputValues, setInputValues] = useState({
        quote: "",
        author: "",
        category: "famous-people"
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        isMountedRef.current = true;
        getCategories();
        if (props.match.params.quoteId) getQuoteInfo()
        return () => {isMountedRef.current = false};
    }, [isMountedRef])

    const getQuoteInfo = () => {
        axios.get(`/quotes/${props.match.params.quoteId}.json`).then(res => {
            const quote = res.data;
            if(isMountedRef.current) setInputValues(quote);
        })
    }
    const editQuote = (e) => {
        e.preventDefault();
        axios.put(`/quotes/${props.match.params.quoteId}.json`, inputValues).then(res => {
            console.log(res);
            history.push('/quotes');
        });
    }
    const sendQuote = (e) => {
        e.preventDefault();
        axios.post('/quotes.json', inputValues).then(res => {
            history.push('/quotes');
        });
    }
    const inputChangeHandler = (e) => {
        setInputValues({...inputValues, [e.target.name]: e.target.value});
    }
    const getCategories = () => {
        axios.get('/categories.json').then(res => {
            const keys = Object.keys(res.data);
            const categories = keys.map(key => ({name: res.data[key], id: key}));
            if(isMountedRef.current)
                setCategories(categories);
        });
    }
    const chooseAction = e => {
        if (props.match.params.quoteId) editQuote(e);
        else sendQuote(e);
    }
    return (
        <form onSubmit={chooseAction}>
            <div className="Form">
                {spinner}
                <div className="form-left-decoration"/>
                <div className="form-right-decoration"/>
                <div className="circle"/>
                <div className="form-inner">
                    <h3>{props.match.params.quoteId ? 'Именить цитату' : 'Создать новую цитату'}</h3>
                    {/*Вот тут была ошибка value должен быть не только у option-ов, но и у самого select-а*/}
                    <select onChange={inputChangeHandler} value={inputValues.category} name="category" id="category">
                        {categories.map(category => <option value={category.id}
                                                            key={category.id}>{category.name}</option>)}
                    </select>
                    <label htmlFor="Form-Author">
                        <input onChange={inputChangeHandler}
                               value={inputValues.author}
                               name="author"
                               type="text"
                               placeholder="Введите автора"
                               id="Form-Author"/>
                    </label>
                    <label htmlFor="Form-Quote">
                        <textarea onChange={inputChangeHandler}
                                  value={inputValues.quote}
                                  name="quote"
                                  id="Form-Quote"
                                  placeholder="Введите цитату"
                                  rows="3"/>
                    </label>
                    <button
                        className="Form-Button">{props.match.params.quoteId ? 'Именить цитату' : 'Сохранить цитату'}</button>
                </div>
            </div>
        </form>
    )
}
export default QuoteForm;