import styled from "styled-components";
import theme from "../../../application/utils/Theme";

export const EstateProperties = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  padding: 0em;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: ${theme.breakPoint["tablet"]}) {
    padding: 2em;
  }
`;

export const PropertyType = styled.div`
  flex: 1 1 25em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.2em;
  margin: 0.5em 0em;
  padding: 1.2em;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (min-width: ${theme.breakPoint["tablet"]}) {
    box-shadow: none;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding-top: 2em;
  width: 100%;
  height: 52px;
`;

export const SearchC = styled(SearchSection)`
  flex: 0 1 20em;
  padding: 0.5em 1em;
  background: rgb(255, 255, 255, 0.7);
  border-radius: 0.5em;
  justify-content: space-between;

  @media (min-width: ${theme.breakPoint["tablet"]}) {
    flex: 0 1 25em;
    padding: 0.5em 1em;
  }
`;

export const EachBuildingContainer = styled.div`
  .upper {
    width: 100%;
    display: flex;
    align-items: center;
    background: black;
    color: white;
    padding: 1em 1em;
    justify-content: space-between;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  }

  .locationIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
  }

  .icon {
    margin-top: -2em;

    @media (min-width: ${theme.breakPoint["tablet"]}) {
      margin-top: 0em;
    }
  }

  .upperContent {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .medias {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  .banner {
    padding: 30px;
    display: grid;
    text-align: center;
    line-height: 2;

    p {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      font-weight: 500;

      @media (min-width: ${theme.breakPoint["tablet"]}) {
        font-weight: 300;
      }
    }
  }

  .mediaType {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5em;
    padding: 0px 6em;
  }

  .imageGallery {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    padding: 2em 2em;
    flex-wrap: wrap;
  }
  .imageGallery > .notFound {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1em;
  }
  .imageGallery > .notFound img {
    width: 20em;
    height: auto;
  }
  .imageGallery > .image {
    flex: 1 1 20em;
    height: 15em;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 640px) {
      flex: 1 1 6em;
      height: 8em;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .imageGallery > .image img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .imgCont {
    width: 100vw;
    height: 250px;

    @media (min-width: ${theme.breakPoint["tablet"]}) {
      width: 50em;
      height: 400px;
    }
  }

  .imgCont > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* .image{ 
        width  : 100%;
        height: 100px; 
        
            @media (min-width: ${theme.breakPoint["tablet"]}) {
            width:18em;
            height:250px; 
        } 
    }        

    .image > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    } */

  .imageFlex {
    display: flex;
    flex: 1 1 6.5em;

    @media (min-width: ${theme.breakPoint["tablet"]}) {
      flex: 0 0 0;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    margin: 50px 72px;
    align-items: center;
    justify-content: space-between;
    gap: 2em;

    @media (min-width: ${theme.breakPoint["tablet"]}) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .listDetails {
      display: grid;
      gap: 20px;
    }

    .yearDetail {
      margin-top: 50px;
    }

    .posterDetails > img {
      width: 300px;
      height: 200px;
      border-radius: 40px 0 40px 0;

      @media (min-width: ${theme.breakPoint["tablet"]}) {
        width: 200px;
        height: 200px;
        border-radius: 48px 0 48px 0;
      }
    }
  }

  .posterDetails {
    display: flex;
    flex-direction: column;
    padding: 30px 60px;
    gap: 20px;
    align-items: center;
    background: rgba(255, 223, 0, 0.1);
    width: 100vw;

    @media (min-width: ${theme.breakPoint["tablet"]}) {
      flex-direction: row;
      padding: 30px 50px;
    }

    .container {
      display: grid;
      gap: 10px;

      .options {
        display: flex;
        gap: 20px;
        /* padding: 0px 20; */

        .option {
          background-color: transparent;
          border: 2px solid #ffdf00;
          border-radius: 8px;
          color: #ffdf00;
          font-size: 12px;
          padding: 5px 10px;
        }

        .solid {
          background-color: #ffdf00;
          color: white;
        }
      }
    }
  }
`;

export const BottomBanner = styled.div`
  background: linear-gradient(90.1deg, #000000 0.09%, rgba(0, 0, 0, 0) 96.23%),
    url(${(prop) => prop.url});
  width: 100%;
  height: 241px;
  margin: 50px 0;
  /* background-position: calc(300px); */
  color: white;
  padding: 72px;
  display: grid;
  /* gap: 20px; */
`;

export const EachContainer = styled.div`
  padding: 100px 0;
  width: 80%;  
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 90%;
    padding: 70px 0;

    h3 {
    }
  }

  .loader{
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
  }

  h4 {
    font-size: 14px;
    font-weight: 600;
  }

  p {
    display: flex;
    gap: 3px;
    font-size: 14px;
  }

  .titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .images {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 70px 0;

    @media (max-width: 700px) {
      padding: 40px 0;
    }

    .image1 {
      width: 100%;
      height: 300px;
      img {
        width: 100%;
        height: 100%;
      }

      @media (max-width: 700px) {
        height: 200px;
      }
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px;
      align-items: center;
      width: 100%;
      height: 200px;

      img {
        width: 100%;
        height: 200px;
      }

      @media (max-width: 700px) {
        height: 100px;
        gap: 6px;

        img {
          height: 100px;
        }
      }
    }

    .viewMedia {
      background: #f2be5c 23.7%;
      border-radius: 4px;
      padding: 10px 20px;
      width: fit-content;
      color: white;
      cursor: pointer;
      font-size: 14px;
    }
  }

  .amenities {
    p {
      padding: 5px 0;
      color: rgb(100, 100, 100);
    }

    padding: 50px 0;
  }

  .description {
    display: ${(props) => (props.display ? props.display : "grid")};
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    @media (max-width: 700px) {
      grid-template-columns: none;
      display: block;
    }

    .details {
      p {
        color: #696969;
        padding: 20px 0;
      }
    }

    .seller {
      .first {
        color: #fff;
        // display: grid;

        .btns {
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 12px;
          margin-top: 30px;

          @media (max-width: 700px) {
            justify-content: start;
            gap: 20px;
          }

          .btn {
            padding: 6px;
            border: 2px solid;
            border-radius: 6px;
            // font-weight: 600;
            cursor: pointer;
          }

          .filled {
            background-color: black;
            border: 2px solid black;
          }
        }
      }

      .container {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        background: #bf7f30;
        backdrop-filter: blur(20px);
        border-radius: 4px;
        padding: 20px;

        @media (max-width: 700px) {
          display: flex;
          flex-direction: column-reverse;
        }

        .second {
          img {
            width: 100%;
            height: 150px;
            border-radius: 24px 0px;
          }
        }
      }
    }
  }

  .delete {
    p {
      color: rgb(100, 100, 100);
    }

    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;

    .actionBtn {
      background: rgb(200, 10, 10);
      border-radius: 10px;
      display: flex;
      gap: 3px;
      color: white;
      padding: 10px;
      width: 100%;
      font-size: 14px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export const PaginationButtons = styled.div`
  width: contain;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;

  .button {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.color};
    color: white;
    width: 2em;
    height: 2em;
    cursor: pointer;
  }
  .disable {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(180, 180, 180);
    color: white;
    width: 2em;
    height: 2em;
    cursor: not-allowed;
  }
  .unselect {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    cursor: pointer;
    transition: 0.3s;
  }
  .unselect:hover {
    background: ${theme.color};
    color: white;
  }
`;
