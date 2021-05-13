import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";
import SessionSeat from "../SessionSeat/SessionSeat";
import Footer from "../Footer/Footer";

export default function SessionScreen(props) {
    const { chosen, setChosen } = props;
    const { sessionID } = useParams();
    const history = useHistory();
    const [seats, setSeats] = useState(null);
    const [nameInput, setNameInput] = useState("");
    const [cpfInput, setCpfInput] = useState("");
    const [selectedSeats, setSelectedSeats] = useState({
        ids: [],
        numbers: [],
    });

    useEffect(() => {
        const request = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionID}/seats`
        );

        request.then((response) => {
            setSeats(response.data);
        });

        request.catch((response) => {
            alert(
                `Erro ao carregar assentos! Status: ${response.response.status}`
            );
        });
    }, [sessionID]);

    function sendBuyerInfo() {
        if (
            selectedSeats.ids.length === 0 ||
            selectedSeats.numbers.length === 0 ||
            nameInput === "" ||
            cpfInput === ""
        ) {
            alert(
                "Por favor verifique se existem assenstos selecioandos e se suas informações estão corretas."
            );
            return;
        }

        const postableObject = {
            ids: selectedSeats.ids,
            name: nameInput,
            cpf: cpfInput,
        };
        const request = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`,
            postableObject
        );

        request.then((response) => {
            const successInfo = {
                ...chosen,
                sessionSeats: selectedSeats.numbers,
                buyerName: nameInput,
                buyerCPF: cpfInput,
            };
            setChosen(successInfo);
            history.push("/sucesso");
        });

        request.catch((response) => {
            alert(
                `Erro ao tentar reservar assento! Status: ${response.response.status}`
            );
        });
    }

    if (seats === null) {
        return "Loading...";
    }

    return (
        <div className="sessionScreen">
            <div className="title">
                <p>Selecione o(s) assento(s)</p>
            </div>
            <div className="seatOptions">
                {seats.seats.map((seat) => (
                    <SessionSeat
                        key={seat.id}
                        seat={seat}
                        selectedSeats={selectedSeats}
                        setSelectedSeats={setSelectedSeats}
                    />
                ))}
            </div>
            <div className="colorLabels">
                <div>
                    <div className="seat selected"></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className="seat available"></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className="seat unavailable"></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className="inputs">
                <div className="input">
                    <p>Nome do comprador:</p>
                    <input
                        placeholder="Digite seu nome"
                        value={nameInput}
                        onChange={(event) => setNameInput(event.target.value)}
                    ></input>
                </div>
                <div className="input">
                    <p>CPF do comprador</p>
                    <input
                        placeholder="Digite seu CPF"
                        value={cpfInput}
                        onChange={(event) => setCpfInput(event.target.value)}
                    ></input>
                </div>
            </div>
            <button onClick={sendBuyerInfo}>Reservar assento(s)</button>
            <Footer
                posterURL={seats.movie.posterURL}
                title={seats.movie.title}
                weekdayAndHour={`${seats.day.weekday} - ${seats.name}`}
            />
        </div>
    );
}
