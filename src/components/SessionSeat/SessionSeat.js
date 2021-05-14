import { useState } from "react";

export default function SessionSeat(props) {
    const { seat, selectedSeats, setSelectedSeats, seatsInfo, setSeatsInfo } =
        props;
    const availability = seat.isAvailable ? "available" : "unavailable";
    const [selection, setSelection] = useState("");

    function changeSelection() {
        if (selection === "") {
            const oneMoreID = [...selectedSeats.ids, seat.id];
            const oneMoreNumber = [...selectedSeats.numbers, seat.name];
            const newSelectedSeats = { ids: oneMoreID, numbers: oneMoreNumber };
            setSelection("selected");
            setSelectedSeats(newSelectedSeats);
            setSeatsInfo([
                ...seatsInfo,
                { idAssento: seat.id, nome: "", cpf: "" },
            ]);
        } else {
            if (buyerRemoveSeatConfirmation()) {
                return;
            }
            const oneLessID = selectedSeats.ids.filter((id) => id !== seat.id);
            const oneLessNumber = selectedSeats.numbers.filter(
                (number) => number !== seat.name
            );
            const newSelectedSeats = { ids: oneLessID, numbers: oneLessNumber };
            const toRemoveSeatInfo = seatsInfo.filter(
                (e) => e.idAssento !== seat.id
            );
            setSelection("");
            setSelectedSeats(newSelectedSeats);
            setSeatsInfo([...toRemoveSeatInfo]);
        }
    }

    function buyerRemoveSeatConfirmation() {
        let confirmation = false;
        const toEvaluateSeatInput = seatsInfo.find(
            (e) => e.idAssento === seat.id
        );

        if (toEvaluateSeatInput.nome !== "" || toEvaluateSeatInput.cpf !== "") {
            confirmation = !window.confirm(
                "Gostaria de remover o assento e as informações preenchidas?"
            );
        }

        return confirmation;
    }

    return (
        <>
            <div
                className={`seat ${availability} ${selection}`}
                onClick={
                    seat.isAvailable
                        ? changeSelection
                        : () => alert("Esse assento não está disponível")
                }
            >
                {seat.name}
            </div>
        </>
    );
}
