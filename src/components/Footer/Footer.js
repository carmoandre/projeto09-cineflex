import "./styles.css";

export default function Footer() {
    const movieIMG = "url";
    const movieName = "Enola Holmes";
    const chosenDate = "Quinta-feira - 15:00";
    return (
        <>
            <div className="footer">
                <img url=""></img>
                <div>
                    <p>{movieName}</p>
                    <p>{chosenDate}</p>
                </div>
            </div>
        </>
    );
}
