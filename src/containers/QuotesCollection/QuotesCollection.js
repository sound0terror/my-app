import Categories from "../../components/Categories/Categories";
import {useEffect, useRef} from 'react';
import {useArray} from "../../hooks/useArray";
import axios from '../../axios-quotes';
import {useHistory} from "react-router";
import Quotes from "../../components/Quotes/Quotes";

const QuotesCollection = (props) => {
    const [categories, setCategories] = useArray([]);
    const [quotes, setQuotes] = useArray([]);

    const isMountedRef = useRef(false);
    const history = useHistory();

    useEffect(() => {
        isMountedRef.current = true;
        if (categories.length === 0) {
            getCategories().catch(e => e);
        }
        return () => {isMountedRef.current = false};
    }, [isMountedRef])

    useEffect(() => {
        isMountedRef.current = true;
        if (props.match.params.category)
            getQuotes(props.match.params.category).catch(e => e);
        else
            getQuotes().catch(e => e);
        return () => {isMountedRef.current = false};
    }, [props.match.params.category, isMountedRef])

    const deleteQuote = (id) => {
        axios.delete('/quotes/' + id + ".json").then(res => {
            quotes.removeById(id);
        })
    }
    const getQuotes = async category => {
        let path = '';
        if (category) path = `?orderBy="category"&equalTo="${category}"`;
        const quotes = await axios.get(`/quotes.json${path}`).then(res => {
            const keys = Object.keys(res.data);
            console.log(keys)
            return keys.map(key => (
                {
                    author: res.data[key].author,
                    quote: res.data[key].quote,
                    id: key
                }
            ));
        })
        console.log(quotes);
        if(isMountedRef.current) setQuotes(quotes);
    }
    const getCategories = async () => {
        let categories = await axios.get('/categories.json').then(res => { // {name:"", id: ""}
            const keys = Object.keys(res.data);
            return keys.map(key => ({name: res.data[key], id: key}));
        })
        if (isMountedRef.current) setCategories(categories);
    }

    const editQuote = (quoteId) => {
        history.push("/quotes/" + quoteId + "/edit");
    }
    const changeLocation = (location) => {
        history.push('/quotes/' + location);
    }
    return (
        <>
            <Categories changeLocation={changeLocation} categories={categories}/>
            <Quotes editQuote={editQuote} deleteQuote={deleteQuote} quotes={quotes}/>
        </>
    )
}

export default QuotesCollection;