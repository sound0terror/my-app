import Categories from "../../components/Categories/Categories";
import {useEffect} from 'react';
import {useArray} from "../../hooks/useArray";
import axios from '../../axios-quotes';
import {useHistory} from "react-router";
import Quotes from "../../components/Quotes/Quotes";
import {useLoader} from "../../hooks/useLoader";

const QuotesCollection = (props) => {
    const [categories, setCategories] = useArray([]);
    const [quotes, setQuotes] = useArray([]);

    const spinner = useLoader(axios);
    const history = useHistory();

    useEffect(() => {
        getCategories();
    },[])

    useEffect(() => {
        if(props.match.params.category)
            getQuotes(props.match.params.category);
        else
            getQuotes();
    }, [props.match.params.category])

    const deleteQuote = (id) => {
       axios.delete('/quotes/' + id + ".json").then(res => {
           quotes.removeById(id);
       })
    }
    const getQuotes = (category) => {
        let path = '';
        if(category) path = `?orderBy="category"&equalTo="${category}"`;
        axios.get(`/quotes.json${path}`).then(res => {
            const keys = Object.keys(res.data);
            const quotes = keys.map(key => (
                {
                author: res.data[key].author,
                quote: res.data[key].quote,
                id: key
                }
                ));
            setQuotes(quotes);
        })
    }
    const getCategories = () => {
        axios.get('/categories.json').then(res => { // {name:"", id: ""}
            const keys = Object.keys(res.data);
            const categories = keys.map(key => ({name: res.data[key], id: key}));
            setCategories(categories);
        })
    }

    const editQuote = (quoteId) => {
        history.push("/quotes/" + quoteId + "/edit");
    }
    const changeLocation = (location) => {
        history.push('/quotes/' + location);
    }
    return (
        <>
            {spinner}
            <Categories changeLocation={changeLocation} categories={categories}/>
            <Quotes editQuote={editQuote} deleteQuote={deleteQuote} quotes={quotes}/>
        </>
    )
}

export default QuotesCollection;