import styled from 'styled-components';
import theme from '../../application/utils/Theme';

const DisableButton = styled.button`   
  width: ${props => props.width ? props.width : "65px"};
    height: ${props => props.height ? props.height : "25px"};
    font-weight: 700;
    font-size: ${props => props.fontSize ? props.fontSize : "0.9em"};
    line-height: 0.8em;
    color: ${props => props.color ? props.color : theme.textColor};
    background-color: ${props => props.background ? props.background : theme.neutralColor};
    border: 2px solid ${props => props.border ? props.border : theme.neutralColor};
    border-radius: 6px;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${props => props.padding ? props.padding : "16px"} ;
    margin-top:${props => props.marginTop ? props.marginTop : "0em"};   
    /* cursor:pointer;  */
    outline   :none ;

    @media (min-width: ${theme.breakPoint['tablet']}) {
            width: ${props => props.width ? props.width : "88px"};
            height: ${props => props.height ? props.height : "40px"};
            font-size: ${props => props.fontSize ? props.fontSize : "0.8em"};
            letter-spacing: 0.1em;    
            border-radius: 0.5em;    
        }
`;

export default DisableButton;
