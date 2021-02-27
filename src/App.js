import './App.css';
import Layout from "./components/UI/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import QuotesCollection from "./containers/QuotesCollection/QuotesCollection";
import QuoteForm from "./containers/QuoteForm/QuoteForm";

function App() {
  return (
    <Layout>
      <Switch>
          <Route path={['/quotes/create', '/quotes/:quoteId/edit']} exact component={QuoteForm}/>
          <Route path={['/', '/quotes', '/quotes/:category']} exact component={QuotesCollection}/>
      </Switch>
    </Layout>
  );
}

export default App;
