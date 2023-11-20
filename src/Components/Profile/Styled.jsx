import styled from "styled-components";
import theme from "../../application/utils/Theme";

export const Header = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;

    @media (max-width: 600px) {
      height: 120px;
    }
  }
`;

export const DisplayImage = styled.div`
  .background {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    width: 100%;
    height: 100%;
    z-index: 99;

    .close {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background: black;
      width: 1.5em;
      height: 1.5em;
      border-radius: 1em;
      top: 2em;
      right: 2em;
      color: white;
      cursor: pointer;
    }

    .imageCont {
      flex: 0 1 30em;
      margin: 0em 1em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2em;
      color: white;
    }
    .imageCont > .profileName {
      width: 100%;
      text-align: center;
      font-weight: bolder;
      font-size: 1.2rem;
    }
    .imageCont > .image {
      width: 100%;
      height: 100%;
      height: 70vh;
    }
    .imageCont > .editProfile {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      padding: 0.5em 1em;
      background: white;
      color: black;
      font-weight: bolder;
      cursor: pointer;
      border-radius: 10px;
    }
    .imageCont > .editProfile input {
      position: absolute;
      top: 0.3em;
      left: 0;
      opacity: 0;
      cursor: pointer;
    }
    .imageCont > .image img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  /* grid-template-columns: 1fr 2fr; */
  justify-content: space-between;
  justify-items: center;
  width: 80%;
  margin: 10px auto 0;

  @media (max-width: 600px) {
    width: 96%;
  }

  .profile {
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;

    @media (max-width: 600px) {
      gap: 5px;
      display: grid;
      grid-template-columns: 1fr 3fr 1.8fr;
    }
  }

  .title {
    display: flex;
    flex-direction: column;

    h3 {
      display: flex;
      align-items: center;
      gap: 3px;
      text-transform: capitalize;
    }

    @media (max-width: 600px) {
      h3 {
        font-size: 14px;
        text-overflow: ellipsis;
        width: 50vw;
      }

      p {
        font-size: 10px;
      }
    }
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid white;

    @media (max-width: 600px) {
      width: 60px;
      height: 60px;
    }
  }

  .btns {
    display: flex;
    align-items: center;
    gap: 20px;
    /* color: white; */

    .edit {
      display: flex;
      padding: 10px;
      background: #e1dfdf;
      border: 1px solid #e2e2e2;
      font-size: 14px;
      gap: 5px;
      cursor: pointer;
      border-radius: 6px;

      @media (max-width: 600px) {
        font-size: 12px;
        padding: 7px;
      }
    }

    .upgrade {
      background: #252625;
      color: white;
      padding: 10px;
      font-size: 14px;
      cursor: pointer;

      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`;

export const Bio = styled.p`
  width: 80%;
  margin: 10px auto;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const SavedContainer = styled.div`
  padding:0 10px;

  h1{
    font-size: 20px;
    font-weight: 600;
  }

  p{
    color: rgb(180,180,180);
    font-size: 12px;
  }

  .notFound{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    img{
      width: 60vw;
      height: auto;
    }
  }
`

export const UserDetails = styled.div`
padding: 10px;
font-size: 14px;
  .bio{
    color: rgb(100,100,100);
  }

  .select{
    color: ${theme.color};
  }
`

export const Update = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    width: 96%;
    text-align: center;
    margin: 0 auto;
    padding: 7px;
    background-color: #252625;
    color: white;
    border-radius: 6px;
    font-size: 14px;
  }
`;

export const Switch = styled.div`
  margin: 50px 0;
  .line {
    /* width: 100%; */
    height: 5px;
    background-color: #e2e2e2;
  }

  .options {
    /* display: grid;
        grid-template-columns: repeat(3, 1fr); */
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin: 10px auto;
    font-size: 14px;

    .option {
      background: #e2e2e2;
      color: black;
      width: fit-content;
      padding: 7px 30px;
      border-radius: 6px;
      cursor: pointer;
    }
    .option2 {
      background-color: #252625;
      color: white;
      width: fit-content;
      padding: 7px 30px;
      border-radius: 6px;
    }

    .option:hover {
      background-color: #252625;
      color: white;
      transition: all 0.3s;
    }

    @media (max-width: 600px) {
      width: 100%;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;

      .option {
        padding: 5px 20px;
        font-size: 12px;
        border-radius: 3px;
        /* width: 20%; */
      }
    }
  }
`;

export const Preview = styled.div`
  display: flex;
  height: 100vh;
  background-color: black;
  align-items: center;
  justify-content: center;
  justify-content: center;
  align-content: center;
  align-self: center;
  justify-items: center;

  img {
    margin: auto 0;
    max-height: 100vh;
  }

  .icon {
    position: absolute;
    right: 30px;
    top: 20px;
    background-color: rgba(150, 150, 150);
    clip-path: circle();
    padding: 10px;
  }

  .input {
    position: absolute;
    top: 20px;
    right: 0px;
    width: 20%;

    input {
      width: 70%;
      /* opacity: 0; */
    }
  }
`;

export const Address = styled.div`
  width: 80%;
  /* margin: 10px auto; */

  .address {
    font-weight: 600;
  }

  @media (max-width: 700px) {
    width: 96%;
    font-size: 14px;
  }

  .social {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .website {
    color: #fa5936;
    text-decoration: underline;
    font-weight: 600;
  }
`;

export const UsersListings = styled.div`
  width: 80%;
  margin: 10px auto;

  @media (max-width: 700px) {
    width: 90%;
  }
`;
