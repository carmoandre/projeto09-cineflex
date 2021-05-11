import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home";
import Movie from "./Movie";
import Session from "./Session";
import Success from "./Success/Success";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/filme/(index)" exact component={Movie} />
                <Route path="/sessao(index)" exact component={Session} />
                <Route path="/sucesso" exact component={Success} />
            </Switch>
        </BrowserRouter>
    );
}
