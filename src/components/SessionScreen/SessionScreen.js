import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import "./styles.css";
import SessionSeat from "../SessionSeat/SessionSeat";
import Footer from "../Footer/Footer";
import Inputs from "../Inputs/Inputs";

export default function SessionScreen(props) {
    const history = useHistory();
    const { chosen, setChosen } = props;
    const { sessionID } = useParams();
    const [seats, setSeats] = useState(null);
    const [seatsInfo, setSeatsInfo] = useState([]);
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
                "Por favor verifique se existem assentos selecioandos e se suas informações estão corretas."
            );
            return;
        }

        const postableObject = {
            ids: selectedSeats.ids,
            compradores: seatsInfo,
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
                        seatsInfo={seatsInfo}
                        setSeatsInfo={setSeatsInfo}
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
            <SeatInputs>
                <Input>
                    <p>Nome do comprador:</p>
                    <input
                        placeholder="Digite seu nome"
                        value={nameInput}
                        onChange={(event) => setNameInput(event.target.value)}
                    ></input>
                </Input>
                <Input>
                    <p>CPF do comprador</p>
                    <input
                        placeholder="Digite seu CPF"
                        value={cpfInput}
                        onChange={(event) => setCpfInput(event.target.value)}
                    ></input>
                </Input>
            </SeatInputs>
            {selectedSeats.ids.length === 0
                ? null
                : selectedSeats.ids.map((seatId, index) => (
                      <Inputs
                          key={seatId}
                          id={seatId}
                          index={index}
                          seatsInfo={seatsInfo}
                          setSeatsInfo={setSeatsInfo}
                      />
                  ))}
            <button onClick={sendBuyerInfo}>Reservar assento(s)</button>
            <Footer
                posterURL={seats.movie.posterURL}
                title={seats.movie.title}
                weekdayAndHour={`${seats.day.weekday} - ${seats.name}`}
            />
        </div>
    );
}

const SeatInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 41px;

    input {
        width: 327px;
        height: 51px;
        background: #ffffff;
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        padding-left: 18px;
        font-size: 18px;
    }

    input::placeholder {
        font-style: italic;
        color: #afafaf;
    }
`;

const Input = styled.div`
    margin-bottom: 10px;

    p {
        font-size: 18px;
        margin-bottom: 3px;
    }
`;
