import styled from "styled-components";
import theme from "../../application/utils/Theme";

const VideoButton = styled.button`
    color: ${props => props.color ? props.color : "rgba(37, 38, 37, 0.8)"};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    gap: 10px;
    width: 65px;
    height: 25px;
    background-color: ${props => props.color ? props.color : "rgba(166, 166, 166, 0.2)"};
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 2px solid ${props => props.color ? props.color : "rgba(166, 166, 166, 0.2)"};

    @media (min-width: ${theme.breakPoint['tablet']}) {
            width: 88px;
            height: 40px;
            font-size: 0.8em; 
            letter-spacing: 0.1em;
        }
`
export default VideoButton;