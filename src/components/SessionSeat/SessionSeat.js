import { useState } from "react";

export default function SessionSeat(props) {
    const { seat, selectedSeats, setSelectedSeats } = props;
    const availability = seat.isAvailable ? "available" : "unavailable";
    const [selection, setSelection] = useState("");

    function changeSelection() {
        if (selection === "") {
            setSelection("selected");
            const oneMoreID = [...selectedSeats.ids, seat.id];
            const oneMoreNumber = [...selectedSeats.numbers, seat.name];
            const newSelectedSeats = { ids: oneMoreID, numbers: oneMoreNumber };
            setSelectedSeats(newSelectedSeats);
        } else {
            setSelection("");
            const oneLessID = selectedSeats.ids.filter((id) => id !== seat.id);
            const oneLessNumber = selectedSeats.numbers.filter(
                (number) => number !== seat.name
            );
            const newSelectedSeats = { ids: oneLessID, numbers: oneLessNumber };
            setSelectedSeats(newSelectedSeats);
        }
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
