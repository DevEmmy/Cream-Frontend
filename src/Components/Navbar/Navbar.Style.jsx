import styled from 'styled-components'
import theme from '../../application/utils/Theme';

export const Header = styled.div`    
    padding-top:${props => props.paddingTop ? props.paddingTop : "0.5em"};    
    position:${prop => prop.sticky ? prop.sticky : "fixed"};                
    width:100%;
    height:  ${props => props.height ? props.height : "4em"};
    color:${prop => prop.color ? prop.color : theme.textColor};
    background-color: ${(prop) => prop.bg || "rgba(0,0,0,1)"};
    display:flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : "space-around"};
    align-items: ${props => props.alignItems ? props.alignItems : "center"};
    gap:0.2em;
    z-index: ${props => props.z ? props.z : "3"};
    white-space: nowrap;    

    .list-items{
        display: flex;
        align-items: center;
        gap: 1em;
        font-size: 14px;
        line-height: 20px;
        cursor: pointer;
    }

    .list-item2{
        margin-top: 2em;
    }

    .line{
        background-color: gray;
        height: 1px;
        opacity: 0.5;
        margin: 0.5em;
    }

    @media (min-width: ${theme.breakPoint['tablet']}) {
        flex-direction:row;
        align-items:${props => props.alignItems ? props.alignItems : "center"};
        gap:1em;
        margin-top: ${props => props.marginTop ? props.marginTop : "0em"};
    }
 
`

export const UL = styled.ul`    
    font-size:0.8rem;   
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2em;
    font-weight:700;
    list-style-type:None;  
    margin-top: ${props => props.marginTop ? props.marginTop : "0em"};    
    
    
    @media(max-width:480px){
        display:none;
    }
`

export const LI = styled.li`    
    font-weight:light;           
    padding: 1.5em 0em; 
    cursor:pointer;   
    font-size:0.8rem; 
    color:${props => props.color ? props.color : theme.textColor};    
              
    &:hover{
        color:${theme.color};
    }  

    .item-active{
        color:${theme.color};
        border-bottom: 2px solid ${theme.color};
    }
   
`

export const LogoText = styled.div`
    color: ${theme.color};
    font-size: ${props => props.fontSize ? props.fontSize : "0.6rem"}; ;   
    font-weight:500;    
    cursor:pointer;
    padding-left: 2rem;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        color:${prop => prop.color ? prop.color : theme.textColor};
        font-size: ${props => props.fontSize ? props.fontSize : "1rem"}; ;     
        font-weight:700;    
        cursor:pointer;
        padding-left: 0rem;
        }

    @media(max-width:650px){
        float:right;
        font-size:1.2rem;
    }
`

export const Brand = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;

    .dashboard{
        display:none;
    }
 
    .menu-icon{
       cursor: pointer;
   }

   .menu-icon .menu{
        display: block;
   }

    .text{
        font-size:12px;
        opacity: 1;
        letter-spacing: 0.05em;
        font-weight: bold;
        position: relative;
        display: block;
        transform: translateY(-20px);
    }

    @media (min-width: ${theme.breakPoint['tablet']}) {
        display:flex;
        justify-content: center;
        align-items: center;
        gap:1em;    
        font-weight:700;
        cursor: pointer;
        width: 0;
        flex-basis: 25%;
        margin-top: ${props => props.marginTop ? props.marginTop : "0em"};

    .dashboard{
        display:flex;
        justify-content: center;
        align-items: center;
        gap:1em;
        font-weight:700;
        cursor: pointer;
    }

    .menu-icon{
        display: none;
    }

    }
    
    /* @media(max-width:480px){
        .login{
            display:none;
        }

    } */
`

export const Login = styled.div`
    display:none;

    .dashboard{
        cursor:pointer
    }

    @media (min-width: ${theme.breakPoint['tablet']}) {
        display: flex;
        gap: 2em;
        align-items: center;
    }
`

export const ReturnContainer = styled.div`
    width: 100%;
    /* height: 1cm; */
    background-color: ${({ transparent }) => transparent ? "transparent" : "white"};
    /* padding:5px 10px; */
    display: flex;
    align-items: center;
    position: ${({ transparent }) => transparent ? "fixed" : "static"};
    top: 0;
    left: 0;
    right: 0;

    svg path{
        stroke-width:1px;
    }

    .icon{
        padding: 10px;
        clip-path: circle();
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        cursor: pointer;
    }
`