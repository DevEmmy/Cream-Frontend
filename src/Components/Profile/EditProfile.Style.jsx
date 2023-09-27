import theme from "@/application/utils/Theme";
import styled from "styled-components";

export const EditProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${props => props.padding ? props.padding : "1em"} ;
    gap: ${props => props.gap ? props.gap : "2em"};
    background: ${props => props.background ? props.background : "#f5f5f5"};

    form{
        display: flex;
        flex-direction: column;
    }

    form > label{
        line-height: 30px;
        font-weight: 600;
        opacity: 64%;
        margin-bottom: 0.5em;
    }

    .form2 > form >  label{
        opacity: 64%;
    }

    @media (min-width: ${theme.breakPoint['tablet']}) {
        gap: 5em;
        flex-direction: row;
        padding: 3em;
        background: ${props => props.background ? props.background : "none"};
    }  

    .content-text > h3{
        line-height: 28px;
    }

    .small-text{
        font-size: 13px;
        color: #A6A6A6;
        font-weight: 600;
    }

    .content-text > p{
        opacity: 64%;
        line-height: 25px;
        letter-spacing: 0.01em;
        font-weight: 500;
        white-space: nowrap;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            font-weight: 600;
            line-height: 28px;
            font-size: 18px;
        }
    }

    .input{
        height: 3em;
        border-radius: 4px;
        border: 2px solid #cacbcd;
        margin-bottom: 1em;
        outline: none;
        padding: ${props => props.padding ? props.padding : "10px"};
    }

    .textarea{
        resize: none;
        height: 6em;
        border-radius: 4px;
        outline: none;
        padding: ${props => props.padding ? props.padding : "10px"};
    }

    .select{
        height: 3em;
        border-radius: 4px;
        border: 2px solid #cacbcd;
        /* margin: 1em 0em; */
        outline: none;
    }

    .lock-div{
        display: flex;
        align-items: center;
        gap: 0.5em;
        font-weight: 600;
        opacity: 64%;
        white-space: nowrap;
    }

    .lock-div > label{
        line-height: 30px;
    }

    .btn-flex{
        display: flex;
        white-space: nowrap;
        font-size: 12px;
        align-items: center;
        gap: 1em;
        opacity: 64%;
        /* margin-bottom: ${props => props.marginBottom ? props.marginBottom : "1em"}; */

        @media (min-width: ${theme.breakPoint['tablet']}) {
            font-weight: 500;
            letter-spacing: 0.05em;
            font-size: 13px;
        }
    }

    .upg-btn{
        padding: 4px;
        background: rgba(1, 98, 243, 0.05);
        color:#2301F3;
        border: 2px solid #2301F3;
        border-radius: 4px;
        cursor: pointer;
       

        @media (min-width: ${theme.breakPoint['tablet']}) {
            font-weight: 600;
            padding: 8px;
        }
    }

    .neutral-text{
        opacity: 49%;
        line-height: 25px;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 1em;
    }

    .neutral-field{
        background: #F2F2F2;
        border: 2px solid #F2F2F2;
        outline: none;
    }

    .border {
    background: #ECEDEE;
    width: 100%;
    height: 2px;
    margin-top: 2em;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        margin-top: 3em;
    }
}

    .form2 > h3{
        margin-top: 1.5em;
        line-height: 25px;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            margin-top: 2.5em;
        }
    }

    .dropdown{
        display: flex;
        flex-direction: column;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            flex-direction: row;
            gap: 3em;
        }
    }

    .sub-dropdown{
        display: flex;
        flex-direction: column;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            justify-content: center;
            width: 40%;
        }
    }

    .space{
        margin-top: 1em;
    }
`

export const ContentCard = styled.div`
    height: "125em";
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 4px;
    padding: 1em;
    background: ${props => props.background ? props.background : "#f5f5f5"};

    @media (min-width: ${theme.breakPoint['tablet']}) {
        height: ${props => props.height ? props.height : "110em"};
        padding: 3em;
        width: 100%;
        }
`

export const MidSection = styled.div`
    padding: ${props => props.padding ? props.padding : "1em"} ;
    display: flex;
    gap: 1em;
    align-items: center;
    white-space: nowrap;
    display: ${props => props.display ? props.display : "flex"};

    @media (min-width: ${theme.breakPoint['tablet']}) {
           display: ${props => props.display ? props.display : "flex"};
        }

    p{
        font-size: 13px;
        color: #A6A6A6;
        font-weight: 600;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            font-size: 15px;
            font-weight: 700;
        }
    }

    button{
        padding: 4px;
        background: rgba(1, 98, 243, 0.05);
        color:#2301F3;
        border: 2px solid #2301F3;
        border-radius: 4px;
        cursor: pointer;
       
        @media (min-width: ${theme.breakPoint['tablet']}) {
            font-weight: 600;
            padding: 8px;
        }
    }
`