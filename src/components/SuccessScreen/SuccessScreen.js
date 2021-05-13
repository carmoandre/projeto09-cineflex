import { Link } from "react-router-dom";
import "./styles.css";

export default function Success(props) {
    const {
        movieTitle,
        sessionDate,
        sessionHour,
        sessionSeats,
        buyerName,
        buyerCPF,
    } = props.chosen;

    sessionSeats.sort(comparator);

    function comparator(a, b) {
        return a - b;
    }

    return (
        <div className="successScreen">
            <div className="title">
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </div>
            <div className="info">
                <p>Filme e Sessão</p>
                <p>{movieTitle}</p>
                <p>
                    {sessionDate} {sessionHour}
                </p>
            </div>
            <div className="info">
                <p>Ingressos</p>
                {sessionSeats.map((seatNumber) => (
                    <p key={seatNumber}>Assento {seatNumber}</p>
                ))}
            </div>
            <div className="info">
                <p>Comprador</p>
                <p>Nome: {buyerName}</p>
                <p>CPF: {buyerCPF}</p>
            </div>
            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
        </div>
    );
}
