import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
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
        goBackButton: false,
    });

    return (
        <BrowserRouter>
            <Header chosen={chosen} setChosen={setChosen} />
            <Switch>
                <Scrollable>
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
                </Scrollable>
            </Switch>
        </BrowserRouter>
    );
}

const Scrollable = styled.div`
    overflow-y: scroll;
    height: calc(100vh - (67px+117px));
`;
