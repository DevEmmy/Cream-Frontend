import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    padding: 20px;
    border: 1px solid white;
    border-radius: 10px;    
    
    &:hover{
        border: 1px solid rgb(200,200,200);
    }

    @media (max-width: 700px){
        border: 1px solid rgb(200,200,200);
        padding: 1em;
        margin:0 0  20px;
       
    }

    .profile{
        display: flex;
        gap: 1em;
        align-items: center;

        img{
            width: 48px;
            height: 48px;
            /* object-fit: cover; */
            clip-path: circle();
        }

        h4{
            font-size: 16px;
            font-weight: 500;
        }
    }

    .image{
        position: relative;
        width: 100%;
        height: 200px;
        margin: 10px 0;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 40px 0 40px 0;
        }

        .view{
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 10px 20px;
            border-radius: 0 0 38px 0;
            color: white;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            font-size: 14px;
            cursor: pointer;
        }
    }

    .price{
        font-size: 14px;
        font-weight: 600;
    }

    .title{
        font-size: 16px;
        font-weight: 600;
    }

    .description{
        font-size: 14px;
        font-weight: 400;
        height: 30px;
        display: flex;
    }

    .enquireNow{
        background:  #F2BE5C;
        border-radius: 4px;
        padding: 10px 20px;
        color: white;
        width: fit-content;
        margin: 10px 0;
        cursor: pointer;
        font-size: 14px;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 85%;
    margin: 20px auto;

    @media (max-width: 700px){
        display: block;
        grid-template-columns: none;
        gap: 20px;
        width: 100%;
    }
`