import styled from "styled-components";
import theme from "../../application/utils/Theme";

const PhotoButton = styled.button`
    color: ${props => props.color ? props.color : theme.textColor};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : theme.footerColor};
    width: 65px;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    gap: 10px;
    border-radius: 8px;
    white-space: nowrap;
    font-weight: 700;
    border: 2px solid ${props => props.color ? props.color : theme.footerColor};

    @media (min-width: ${theme.breakPoint['tablet']}) {
            width: 88px;
            height: 40px;
            font-size: 0.8em; 
            letter-spacing: 0.1em;
        }
`;

export default PhotoButton;