import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import HomeScreen from "./HomeScreen/HomeScreen";
import MovieScreen from "./MovieScreen/MovieScreen";
import SessionScreen from "./SessionScreen/SessionScreen";
import SuccessScreen from "./SuccessScreen/SuccessScreen";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <HomeScreen />
                </Route>
                <Route path="/filme/:movieID" exact>
                    <MovieScreen />
                </Route>
                <Route path="/sessao/" exact>
                    <SessionScreen />
                </Route>
                <Route path="/sucesso" exact>
                    <SuccessScreen />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
