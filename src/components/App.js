import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header/Header";
import HomeScreen from "./HomeScreen/HomeScreen";
import MovieScreen from "./MovieScreen/MovieScreen";
import SessionScreen from "./SessionScreen/SessionScreen";
import SuccessScreen from "./SuccessScreen/SuccessScreen";

export default function App() {
    const [chosen, setChosen] = useState({
        movieTitle: "",
        sessionDate: "",
        sessionHour: "",
        sessionSeats: "",
        buyerName: "",
        buyerCPF: "",
    });

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <HomeScreen chosen={chosen} setChosen={setChosen} />
                </Route>
                <Route path="/filme/:movieID" exact>
                    <MovieScreen chosen={chosen} setChosen={setChosen} />
                </Route>
                <Route path="/sessao/:sessionID" exact>
                    <SessionScreen chosen={chosen} setChosen={setChosen} />
                </Route>
                <Route path="/sucesso" exact>
                    <SuccessScreen chosen={chosen} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
