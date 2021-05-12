import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header/Header";
import HomeScreen from "./HomeScreen/HomeScreen";
import MovieScreen from "./MovieScreen/MovieScreen";
import SessionScreen from "./SessionScreen/SessionScreen";
import SuccessScreen from "./SuccessScreen/SuccessScreen";

export default function App() {
    const [chosen, setChosen] = useState({
        posterURL: "",
        movieTitle: "",
        weekdayAndDate: "",
    });

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <HomeScreen setChosen={setChosen} />
                </Route>
                <Route path="/filme/:movieID" exact>
                    <MovieScreen chosen={chosen} setChosen={setChosen} />
                </Route>
                <Route path="/sessao/" exact>
                    <SessionScreen chosen={chosen} />
                </Route>
                <Route path="/sucesso" exact>
                    <SuccessScreen />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
