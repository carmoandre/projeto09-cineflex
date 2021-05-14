import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { ArrowBackCircleOutline } from "react-ionicons";

import "./styles.css";

export default function Header() {
    const history = useHistory();
    const location = useLocation();

    return (
        <>
            <GoBackButton location={location}>
                <ArrowBackCircleOutline
                    color={"#e8833a"}
                    height="50px"
                    width="50px"
                    onClick={() => history.goBack()}
                />
            </GoBackButton>
            <div className="header">
                <p>CINEFLEX</p>
            </div>
            <DistanceHeader />
        </>
    );
}

const GoBackButton = styled.div`
    position: absolute;
    display: ${(props) => (props.location.pathname !== "/" ? "block" : "none")};
    top: 8px;
    left: 12px;
    z-index: 3;
`;

const DistanceHeader = styled.div`
    width: 100%;
    height: 67px;
`;
