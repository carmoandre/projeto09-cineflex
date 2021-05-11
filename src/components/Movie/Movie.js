import "./styles.css";
import { Link } from "react-router-dom";

export default function Movie() {
    const dateOne = {
        title: "Quinta-feira - 24/06/2021",
        sessionsTimes: ["15:00", "19:00"],
    };
    const dateTwo = {
        title: "Sexta-feira - 24/06/2021",
        sessionsTimes: ["15:00", "19:00"],
    };
    return (
        <>
            <div className="title">
                <p>Selecione o horário</p>
            </div>
            <div className="dayOptions">
                <p>{dateOne.title}</p>
                <div>
                    <Link to="/sessao/">
                        <button>{dateOne.sessionsTimes[0]}</button>
                    </Link>
                    <Link to="/sessao/">
                        <button>{dateOne.sessionsTimes[1]}</button>
                    </Link>
                </div>
            </div>
            <div className="dayOptions">
                <p>{dateTwo.title}</p>
                <div>
                    <Link to="/sessao/">
                        <button>{dateTwo.sessionsTimes[0]}</button>
                    </Link>
                    <Link to="/sessao/">
                        <button>{dateTwo.sessionsTimes[1]}</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
