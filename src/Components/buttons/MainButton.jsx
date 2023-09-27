import styled from "styled-components";
import theme from "../../application/utils/Theme";

const MainButton = styled.button`
  width: ${(props) => (props.width ? props.width : "65px")};
  height: ${(props) => (props.height ? props.height : "25px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "0.9em")};
  line-height: 0.8em;
  color: ${(props) => (props.color ? props.color : theme.textColor)};
  background: ${(props) => (props.background ? props.background : theme.color)};
  border: 2px solid ${(props) => (props.border ? props.border : theme.color)};
  border-radius: 6px;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: center;
  padding: ${(props) => (props.padding ? props.padding : "16px")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0em")};

  @media (min-width: ${theme.breakPoint["tablet"]}) {
    width: ${(props) => (props.width ? props.width : "88px")};
    height: ${(props) => (props.height ? props.height : "40px")};
    font-size: ${(props) => (props.fontSize ? props.fontSize : "0.8em")};
    letter-spacing: 0.1em;
    border-radius: 0.5em;
  }
`;

const MainOutlineButton = styled(MainButton)`
  color: ${(props) => (props.color ? props.color : theme.color)};
  background: rgba(0, 0, 0, 0);
  border-radius: 6px;
`;

export default MainButton;
export { MainOutlineButton };
