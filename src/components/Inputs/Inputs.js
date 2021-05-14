import styled from "styled-components";
import { useState } from "react";

export default function Inputs(props) {
    const { id, index, seatsInfo, setSeatsInfo } = props;
    const [inputObject, setInputObject] = useState({
        idAssento: id,
        nome: "",
        cpf: "",
    });

    const ocupantName = `Nome do ocupante ${index + 1}`;
    const ocupantCPF = `CPF do ocupante ${index + 1}`;

    function setName(event) {
        setInputObject({
            ...inputObject,
            nome: event.target.value,
        });
        updateSeatsInfo();
    }

    function setCPF(event) {
        setInputObject({
            ...inputObject,
            cpf: event.target.value,
        });
        updateSeatsInfo();
    }

    function updateSeatsInfo() {
        //if (seatsInfo.find((e) => e.idAssento === id)) {
        const toUpdate = seatsInfo.filter((e) => e.idAssento !== id);
        setSeatsInfo([...toUpdate, inputObject]);
        //} else {
        // setSeatsInfo([...setSeatsInfo, inputObject]);
        //}
    }
    //criar um estado para gerenciar o objeot individual de cada input por assento
    // depois da um push nesse objeto para uma lista estado e não essas que ja vem
    // por props. Essa devem se removidas, pq serviam a um unico input de nome e cpf
    return (
        <SeatInputs>
            <Input>
                <p>{ocupantName}</p>
                <input
                    placeholder="Digite seu nome"
                    value={inputObject.nome}
                    onChange={(event) => setName(event)}
                ></input>
            </Input>
            <Input>
                <p>{ocupantCPF}</p>
                <input
                    placeholder="Digite seu CPF"
                    value={inputObject.cpf}
                    onChange={(event) => setCPF(event)}
                ></input>
            </Input>
        </SeatInputs>
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
