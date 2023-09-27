import styled from "styled-components";

export const ListingHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .heading {
    margin-top: 6em;
    flex: 0 1 50em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .head1 {
      font-weight: 700;
      text-align: center;
      font-size: 1.5rem;
    }
    .head2 {
      font-weight: 500;
      text-align: center;
      font-size: 1.2rem;
    }
    @media (max-width: 680px) {
      .head1 {
        font-weight: 700;
        text-align: center;
        font-size: 1.2rem;
      }
      .head2 {
        font-weight: 500;
        text-align: center;
        font-size: 1rem;
      }
    }
    select {
      width: 70%;
      margin: 1.5em 1em;
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 2px solid black;
      border-radius: 0.5em;
      cursor: pointer;
      font-weight: bolder;
      font-size: 1rem;
    }
  }
`;
export const ListingForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .form_Content {
    width: 85vw;
    padding: 0.5em;
    margin-top: 2em;

    

    p {
      font-weight: 600;
      margin: 0.5em 0em;
    }
    .numbw {
      width: 100%;
      font-weight: 600;
      color: red;
      font-size: 0.8em;
      margin: -1em 0em 2em 0em;
    }
    .error {
      width: 100%;
      font-weight: 600;
      color: red;
      font-size: 0.8em;
      margin-bottom: 3em;
    }
    .locate {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5em;
      margin-bottom: 2em;
      font-weight: 600;
      cursor: pointer;
    }
    .section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;      
      margin-bottom: 1em;
    }
    .section hr {
      width: 100%;
    }
    #location {
      width: fit-content;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      color: #2301f3;
      cursor: pointer;
    }
    .section p {
      font-weight: 600;
    }
    .section > .sectionHead {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .sectionHead > .browseCont {
      color: white;
      width: 5em;
      padding: 0.3em;
      position: relative;
      background: #2301f3;
      border-radius: 0.5em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sectionHead > .browseCont > .browse {
      position: absolute;
      opacity: 0;
    }
    .section > .chosenImages {
      overflow-x: auto;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1em;
    }
    .section > .chosenImages > .videoCont {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .section > .chosenImages > .imgCont {
      position: relative;
      width: 10em;
      height: 10em;
      border-radius: 0.5em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .chosenImages > .imgCont > .close {
      position: absolute;
      top: 0.5em;
      right: 0.5em;
      background: white;
      border-radius: 0.6em;
      width: 1.2em;
      height: 1.2em;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .chosenImages > .videoCont > .close {
      position: absolute;
      top: 0.5em;
      right: 0.5em;
      background: white;
      border-radius: 0.6em;
      width: 1.2em;
      height: 1.2em;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .chosenImages > .imgCont img {
      width: 10em;
      height: 10em;
      border-radius: 0.5em;
    }
    .section > .clearCont {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .section > .clearCont > .clear {
      padding: 0.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      border-radius: 0.3em;
      color: gray;
      font-weight: bolder;
      font-size: 0.8rem;
      cursor: pointer;
    }
    .section > .base {
      font-size: 0.8rem;
      color: gray;
    }
    .section input {
      width: 100%;
      padding: 1em ;
      padding-left: 1.5em;
      border-radius: 0.5em;
      border: 2px solid black;
    }
    .section > .dashed {
      border: 1px solid black;
      border-style: dashed;
      display: flex;
      justify-content: center;
    }
    .section textarea {
      width: 100%;
      padding: 1em;
      padding-left: 1.5em;
      border-radius: 0.5em;
      border: 2px solid black;
      height: 8em;
      resize: none;
    }
    .section select {
      width: 43em;
      margin: 0.5em 0em;
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 2px solid black;
      border-radius: 0.5em;
      cursor: pointer;
      font-weight: bolder;
      font-size: 0.8rem;
    }
    @media (max-width:640px) {
      .section select {
        width: 95%;
        margin: 0.5em 0em;
        padding: 12px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px solid black;
        border-radius: 0.5em;
        cursor: pointer;
        font-weight: bolder;
        font-size: 0.8rem;
      }
    }
    .section > .OutProp {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1em;
      flex-wrap: wrap;
    }
    .section > .OutProp > .props {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.5em;
      padding: 0.5em 1em;
      background: #dddfe6;
      gap: 0.5em;
      cursor: pointer;
    }
    .NumbB {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 4em;
      flex-wrap: wrap;
      margin-bottom: 2em;
      font-weight: 600;
    }
    .NumbB > .sect {
      flex: 0 1 25em;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1em;
    }
    .rental{
      display:flex;
      justify-content: flex-start;
      align-items: center;
      gap:1em;
    }    
    .rental > .sect{
      flex: 0 1 8em;      
      display:flex;
      justify-content: flex-start;
      align-items: center;            
      gap:1em;
    }   
    .rental > .sect input{
      cursor:pointer;
    }   
    .NumbB > .sec {
      flex: 0 1 35em;
    }
    .NumbB > .sec select {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid black;
      border-radius: 0.5em;
      cursor: pointer;
      font-weight: 600;
      font-size: 1rem;
    }
    .NumbB > .sec input {
      width: 100%;
      padding: 1em;
      padding-left: 1.5em;
      border: 2px solid black;
      border-radius: 0.5em;
    }
    .NumbB > .sect input {
      width: 10em;
      padding: 1em;
      padding-left: 1.5em;
      border: 2px solid black;
      border-radius: 0.5em;
    }
    .NumbB > .sect > .price {
      flex: 0 1 25em;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid black;
      border-radius: 0.5em;
    }
    .NumbB > .sect > .price input {
      width: 65%;
      padding: 1em;      
      border: 0px;
      outline: none;
      font-weight: 600;
    }
    .NumbB > .sect > .price select {
      width: 35%;
      border-left: 2px solid black;
      padding: 1em 0em 1em 1em;
      outline: none;
      border-radius: 0em 0.5em 0.5em 0em;
      font-weight: 600;
      cursor: pointer;
    }
    .NumbB > .disable {
      flex: 0 1 15em;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5em 2em;
      border-radius: 0.5em;
      border: 2px solid #a6a6a6;
      color: #a6a6a6;
    }
    .NumbB > .enable {
      flex: 0 1 15em;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5em 2em;
      border-radius: 0.5em;
      border: 2px solid #2301f3;
      background: #2301f3;
      color: white;
      cursor: pointer;
    }
  }
`;
