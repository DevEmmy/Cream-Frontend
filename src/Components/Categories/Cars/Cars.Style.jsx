import styled from "styled-components"
import theme from '../../../application/utils/Theme';

export const Background = styled.div`       
    position:relative;        
    width:100%;
    height:100vh;
    background:rgba(20,20,20);    

    .bgImage{
      width:100%;
      height:100%;            

      img{
        width:100%;
        height:100%;
      }
    }    
`

export const MorePic = styled(Background)`  
    width: 100%;
    height:100px;   
    
    @media (min-width: ${theme.breakPoint['tablet']}) {
        width:18em;
        height:250px; 
    }  
`
export const MoreBg = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;    
    width:100%;
    height:100%;    
    background:rgba(255,255,255,0.5);
    cursor:pointer;
`

export const HeroSection = styled.div`
    position:absolute;    
    top:0;
    background:rgba(0,0,0,0.4);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1em;
    width:inherit;
    height:inherit;    
    padding: 1em;

      .btn{
        margin:2rem 0rem;

        button{
          background: #F2BE5C;
          border-radius: 2px;
          font-size:1rem;
          border:none;
          margin:0rem .5rem;
          width:9rem;
          height:3rem;
          cursor:pointer
        }

        .btn_app{
          color:#F2BE5C;
          border:2px solid;
          background:none;
        }
        
      }

`

export const Seperator = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const Text = styled.div`
    color:${props => props.color ? props.color : theme.textColor};
    font-size:${props => props.fontSize ? props.fontSize : "20px"};
    font-weight:${props => props.fontWeight ? props.fontWeight : ""};    
    margin:${props => props.margin ? props.margin : "0em"}; 
    padding:${props => props.padding ? props.padding : "0em"};  
    text-align: ${props => props.textAlign ? props.textAlign: "start"} ;
    width:${props => props.width ? props.width : ""};

    @media (min-width: ${theme.breakPoint['tablet']}) {
        font-size:${props => props.fontSize ? props.fontSize : "1rem"};
    }

    @media(max-width:650px){
      font-size:${props => props.smFontSize ? props.smFontSize : "16px"};
      text-align:center;
        h3{
          text-align:center;
            font-size:2rem;
        }

        span{
          color:#F2BE5C;
        }
    }
`

export const SearchSection = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: row;
    padding-top: 2em;  
    width:100%; 

`

export const SharedSection = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1em;
    padding-top: 2em;  
    width:100%; 
`


export const SearchC = styled(SearchSection)`    
    padding:0.5em 2em;;
    background:rgb(255,255,255,0.7);
    border-radius: 0.5em;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 85%;
    margin: 0em 0.5em 0em 0.5em;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        flex: 0 1 25em;
        padding:0.5em 1em;
        }
`

export const Input = styled.input`    
    background:transparent;
    outline:None;
    padding:0.5em;    
    border: 2px solid transparent;
    width: 100%;    
`

export const FilterBox = styled(SearchC)`
    flex:0 1 0;
    padding:0.4em;
    background:${theme.color};
    justify-content:center;
    gap:0em;
    width: 50%;

    @media (min-width: ${theme.breakPoint['tablet']}) {
       width: 100%;
        }
`

export const Body = styled.div`    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 4em 2em;    
    gap:3em; 
`

export const CarTypes = styled.div`
    display:flex;
    justify-content:center;  
    align-items:center;  
    gap:1.5em;
    padding:0em;    
    flex-wrap:wrap;
    width:100%;  

    @media (min-width: ${theme.breakPoint['tablet']}) {
      padding:0 0.5em;
    }   
`

export const CarType = styled.div`
    flex: 1 1 25em;    
    display:flex;
    flex-direction:column;    
    justify-content:center;    
    align-items:flex-start;
    gap:0.2em;    
    margin:0.5em 0em;
    padding: 1.2em;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (min-width: ${theme.breakPoint['tablet']}) {
      box-shadow: none;
    }   
`

export const Dealer = styled(SharedSection)`
    padding:0em;
    justify-content:flex-start;
`

export const PicDealer = styled.img`
    width:${props => props.width ? props.width : "2.5em"};
    height:${props => props.height ? props.height : "2.5em"};
    border-radius:${props => props.radius ? props.radius : "2.5em"};    
`

export const PicCar = styled(Background)`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:13em;    
    border-top-left-radius:2em;
    border-bottom-right-radius:2em;
    margin:1em 0em;
    padding:1em 0em 0em 1em;
`

export const Position = styled(Dealer)`
    gap:0.5em;
`

export const TextError = styled.span`
    color: red;
    font-weight: 500;
    opacity: 40%;
    font-size: 10px;
    @media (min-width: ${theme.breakPoint['tablet']}) {
        font-weight: 600;
        font-size: 15px;
    }     
    `

export const Reaction = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:${props => props.width ? props.width : "2em"};
    height:${props => props.height ? props.height : "2em"};
    border-radius:${props => props.radius ? props.radius : "2em"};
    background:rgba(255,255,255,0.4);   
    padding:${props => props.padding ? props.padding : "0em"};
    border-bottom-right-radius:2em;
    cursor:pointer;
`

export const LuxuryLabel = styled(Background)`    
    height:10em;
    background-image:url(${props => props.imageUrl});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat; 
`

export const LuxuryBody = styled(HeroSection)`
    background:rgba(0,0,0,0.7);       
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding:2em 2em;
`

export const Heading = styled.div`
    text-align: center;
   
    .heading{
        padding-top: 2em;
        font-weight: 600;
        font-size: 2em;
        line-height: 60px;
        color:${props => props.color ? props.color : theme.blackBackgroundColor};
    }

    p{
        font-weight: 500;
        color:${props => props.color ? props.color : theme.blackBackgroundColor};
    }
`

export const FormBody = styled.div`
    padding:${props => props.padding ? props.padding : "0em"};

    @media (min-width: ${theme.breakPoint['tablet']}) {
        padding:${props => props.padding ? props.padding : "4em 6em"};
    }

    .register-component{
        margin-top: 2em;
    }

    .seperator
    {
        border: 1px solid rgba(166, 166, 166, 0.4);
        margin-top: 2em;
    }

    .textOpaque{
        font-weight: 300;
        font-size: 0.8em;
    }

    .create{
        padding: 1em 2em;
        border-radius: 4px;
        border: none;
        background: ${theme.blueText};
        color: #fff;
        margin-top: 4em;

        @media (min-width: ${theme.breakPoint['tablet']}) {
          font-size: 17px;
        }  
    }
`

export const FileUploadContainer = styled.section`
  position: relative;
  margin: 10px 0 15px;
  border: 2px dashed lightgray;
  padding: 35px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%
`;

export const FormField = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;

export const InputLabel = styled.label`
  top: -21px;
  font-size: 13px;
  color: black;
  left: 0;
  position: absolute;
`;

export const DragDropText = styled.p`
  font-weight: bold;
  letter-spacing: 2.2px;
  margin-top: 0;
  text-align: center;
`;

export const UploadFileBtn = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #3498db;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 1.1em 2.8em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 6px;
  color: #3498db;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 250ms ease-in-out;
  width: 45%;
  display: flex;
  align-items: center;
  padding-right: 0;
  justify-content: center;

  input{
    opacity: 0;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: #3498db;
    z-index: -1;
    transition: width 250ms ease-in-out;
  }

  i {
    font-size: 22px;
    margin-right: 5px;
    border-right: 2px solid;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 500px) {
    width: 70%;
  }

  @media only screen and (max-width: 350px) {
    width: 100%;
  }

  &:hover {
    color: #fff;
    outline: 0;
    background: transparent;

    &:after {
      width: 110%;
    }
  }

  &:focus {
    outline: 0;
    background: transparent;
  }

  &:disabled {
    opacity: 0.4;
    filter: grayscale(100%);
    pointer-events: none;
  }
`;

export const FilePreviewContainer = styled.article`
  margin-bottom: 35px;

  span {
    font-size: 14px;
  }
`;

export const PreviewList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const FileMetaData = styled.div`
  display: ${(props) => (props.isImageFile ? "none" : "flex")};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  background-color: rgba(5, 5, 5, 0.55);

  aside {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const RemoveFileIcon = styled.i`
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;

export const PreviewContainer = styled.section`
  padding: 0.25rem;
  width: 20%;
  height: 120px;
  border-radius: 6px;
  box-sizing: border-box;

  &:hover {
    opacity: 0.55;

    ${FileMetaData} {
      display: flex;
    }
  }

  & > div:first-of-type {
    height: 100%;
    position: relative;
  }

  @media only screen and (max-width: 750px) {
    width: 25%;
  }

  @media only screen and (max-width: 500px) {
    width: 50%;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
    padding: 0 0 0.4em;
  }
`;

export const ImagePreview = styled.img`
  border-radius: 6px;
  width: 100%;
  height: 100%;
`;