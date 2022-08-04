import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";

export default function TopBar() {
    return (
        <TopWrapper>
            <h1>TrackIt</h1>
            <img src={userDara.image} alt="Sponge Bob" />
        </TopWrapper>
    );
}

const TopWrapper = styled.nav`
    background-color: #126BA5;
    width: 100%;
    height: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    padding: 18px;
    z-index: 1;

    h1 {
        font-family: 'Playball';
        color: #FFFFFF;
        font-size: 40px;
        cursor: pointer;
    }

    img {
        width: 51px; 
        height: 51px;
        border-radius: 50%;
    }
`