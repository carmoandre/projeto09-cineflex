import Footer from "../Footer/Footer";
import "./styles.css";

export default function SessionScreen(props) {
    const { chosen } = props;

    const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            <div className="title">
                <p>Selecione o(s) assento(s)</p>
            </div>
            <div className="seatOptions">
                {seats.map((number) => (
                    <div key={number} className="seat available">
                        {number}
                    </div>
                ))}
            </div>
            <div className="colorLabels">
                <div>
                    <div className="seat selected"></div>
                </div>
                <div>
                    <div className="seat available"></div>
                </div>
                <div>
                    <div className="seat unavailable"></div>
                </div>
            </div>
            <Footer chosen={chosen} />
        </>
    );
}
