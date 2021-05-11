import { Link } from "react-router-dom";
import "./styles.css";

export default function Success() {
    const movieName = "Enola Holmes";
    const date = "24/06/2021";
    const hour = "15:00";
    const seatNumber = 15;
    const buyerName = "João da Silva Sauro";
    const cpfNumber = "123.456.789-10";

    return (
        <div className="screen">
            <div className="title">
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </div>
            <div className="info">
                <p>Filme e Sessão</p>
                <p>{movieName}</p>
                <p>
                    {date} {hour}
                </p>
            </div>
            <div className="info">
                <p>Ingressos</p>
                <p>Assento {seatNumber}</p>
                <p>Assento {seatNumber + 1}</p>
            </div>
            <div className="info">
                <p>Comprador</p>
                <p>Nome: {buyerName}</p>
                <p>CPF: {cpfNumber}</p>
            </div>
            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
        </div>
    );
}
