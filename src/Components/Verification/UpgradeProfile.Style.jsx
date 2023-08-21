import styled from "styled-components";
import theme from "../../../application/utils/Theme";

export const Upgrade = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f6f6f6;
  padding: 1em 0em 4em 0em;
  gap: 2em;

  .bck {
    width: 100%;
    padding: 0em 1em;
    .cont {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.7em;
      height: 2.7em;
      border-radius: 1.35em;
      background: transparent;      
      cursor: pointer;
    }
  }

  .head {
    text-align: center;
    padding: 0em 1em;

    .h1 {
      font-weight: 700;
      font-size: 26px;
      color: #000000;
    }
    .h2 {
      font-weight: 400;
      font-size: 15px;
      letter-spacing: 0.0015em;
      color: #696969;
    }

    @media (max-width: 550px) {
      .h1 {
        font-weight: 700;
        font-size: 32px;
        color: #000000;
      }
      .h2 {
        font-weight: 400;
        font-size: 15px;
        letter-spacing: 0.0015em;
        color: #696969;
      }
    }
  }

  .typeBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(197, 197, 198, 0.5);
    border-radius: 4px;
    padding: 2px;
    margin: 0em 1em;
    color: #737373;
    font-weight: 400;
    letter-spacing: 0.0015em;
  
    .selectBtn1 {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 32px;
      background: ${theme.color};
      border-radius: 4px;
      color: #000000;
      font-weight: 600;
      cursor: pointer;
    }
    .selectBtn2 {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 32px;
      background: transparent;
      cursor: pointer;
    }
  }

  .packages {
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    padding-top: 2em;
    flex-wrap: wrap;

    .package {      
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      align-self: stretch;      
      flex: 0 1 25em;
      padding: 1em 1.5em;
      margin: 1.5em;      
      box-shadow: 16px 16px 32px rgba(176, 176, 176, 0.26),
        -16px -16px 32px #ffffff;
      border-radius: 8px;
    }
    .package > .up{      
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;      
      gap: 0.5em;            
    }
    .package > .up > .top {
      font-weight: 600;
      font-size: 20px;      
    }
    .package > .up > .descr {
      display:flex;
      justify-content: center;
      flex-direction: column;
      gap:0.5em;
      font-weight: 400;
      font-size: 13px;   
      height: 220px;
    }
    .package > .up > .pricing {
      font-weight: 400;
      font-size: 16px;
      color: #696969;
      padding: 1em 0em;
    }
    .package > .up > .pricing span {
      font-weight: 600;
      font-size: 35px;      
    }
    .package > .btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 16px;
      background: ${theme.color};
      border-radius: 4px;
      font-weight: 600;
      font-size: 14px;
      color: black;
      cursor: pointer;
    }
  }

  .base {
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    color: #696969;
    padding: 2em 1em;

    span {
      color: ${theme.color};
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
