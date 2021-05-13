import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Footer/Footer";

import "./styles.css";

export default function MovieScreen(props) {
    const { movieID } = useParams();
    const { chosen, setChosen } = props;
    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        const request = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieID}/showtimes`
        );

        request.then((response) => {
            setSessions(response.data);
        });

        request.catch((response) => {
            alert(
                `Erro ao carregar filmes! Status: ${response.response.status}`
            );
        });
    }, [movieID]);

    function setChosenDate(weekday, time) {
        const newChosenData = {
            ...chosen,
            sessionDate: weekday,
            sessionHour: time,
        };
        setChosen(newChosenData);
    }

    if (sessions === null) {
        return "Loading...";
    }

    return (
        <>
            <div className="title">
                <p>Selecione o horário</p>
            </div>
            {sessions.days.map((session) => {
                return (
                    <div key={session.id} className="dayOptions">
                        <p>
                            {session.weekday} - {session.date}
                        </p>
                        <div>
                            {session.showtimes.map((showtime) => {
                                return (
                                    <Link
                                        key={showtime.id}
                                        to={`/sessao/${showtime.id}`}
                                    >
                                        <button
                                            onClick={() =>
                                                setChosenDate(
                                                    session.weekday,
                                                    showtime.name
                                                )
                                            }
                                        >
                                            {showtime.name}
                                        </button>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            <Footer
                posterURL={sessions.posterURL}
                title={sessions.title}
                weekdayAndHour=""
            />
        </>
    );
}
