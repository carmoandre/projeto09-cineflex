import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./styles.css";

export default function Home() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const request = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies"
        );

        request.then((response) => {
            setMovies(response.data);
        });

        request.catch((response) => {
            alert(
                `Erro ao carregar filmes! Status: ${response.response.status}`
            );
        });
    }, []);

    if (movies === null) {
        return "Loading...";
    }

    return (
        <>
            <div className="title">
                <p>Selecione o filme</p>
            </div>
            <div className="movies">
                {movies.map((movie) => {
                    return (
                        <div key={movie.id} className="movie">
                            <Link to={`/filme/${movie.id}`}>
                                <img src={movie.posterURL} />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
