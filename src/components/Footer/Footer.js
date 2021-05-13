import "./styles.css";

export default function Footer(props) {
    const { posterURL, title, weekdayAndHour } = props;
    return (
        <>
            <div className="distanceFooter"></div>
            <div className="footer">
                <div className="poster">
                    <img src={posterURL} alt=""></img>
                </div>
                <div className="chosenInfo">
                    <p>{title}</p>
                    <p>{weekdayAndHour}</p>
                </div>
            </div>
        </>
    );
}
