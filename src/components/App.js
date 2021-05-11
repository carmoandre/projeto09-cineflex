import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Movie from "./Movie/Movie";
import Session from "./Session/Session";
import Success from "./Success/Success";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/filme/" exact>
                    <Movie />
                </Route>
                <Route path="/sessao/" exact>
                    <Session />
                </Route>
                <Route path="/sucesso" exact>
                    <Success />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
