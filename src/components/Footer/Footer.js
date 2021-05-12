import "./styles.css";

export default function Footer(props) {
    const { chosen } = props;
    return (
        <>
            <div className="distanceFooter"></div>
            <div className="footer">
                <div className="poster">
                    <img src={chosen.posterURL} alt=""></img>
                </div>
                <div className="chosenInfo">
                    <p>{chosen.movieTitle}</p>
                    <p>{chosen.weekdayAndDate}</p>
                </div>
            </div>
        </>
    );
}
