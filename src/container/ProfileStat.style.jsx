import styled from "styled-components"

export const List = styled.div`
    width: 80%;
    margin: 20px auto;
    
`

export const MiddleContainer = styled.div`

.lines{
    /* position: absolute; */
    width:100%;
    height:0px;
    /* left:3px;
    top:450px; */
    border:4px solid rgba(166, 166, 166, 0.2);
    transform: rotate(-0.26deg);
}

.middle_btn{
    margin:10px 100px;
    display:flex;
    /* position:absolute;
    top:535px;
    left:165px; */
    padding: 10px 0;

    button{
        padding: 12px 24px;
        width: 140px;
        height: 48px;
        border-radius: 4px;
        margin-right:40px;   
        border:none;
        font-style: normal;
        font-weight: 500;
        font-size:13px;
        line-height:24px;
    }

    .list{
        color:white;
        background:black;
        cursor: pointer;
    }

}

.lines2{
    /* position: absolute; */
    width:100%;
    height:0px;
    /* left:3px;
    top:650px; */
    border:4px solid rgba(166, 166, 166, 0.2);
    transform: rotate(-0.26deg);
}

`

export const Overview = styled.div`
/* margin-top:-365px; */
display:flex;
/* margin-left: 160px; */


.account{

    .overview-div{
        display: flex;
        gap: 1em;
        align-items: center;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size:14px;
        color: #737373;
    }

    .block{
       width: 20px;
       height: 20px;
       margin-top: 7px;
    }

    h3{
        margin-top:10px;
        font-style: normal;
        font-weight: 600;
        font-size:20px;
        line-height: 20px;
        letter-spacing: 0.005em;
        color: #000000;
    }

    div{
        position: relative;
    }


    input{
        margin-top:20px;
        width:150px;
        height:38px;
        border:1px solid gray;
        border-radius:3px;
        font-style: normal;
        font-weight: 400;
        font-size:12px;
        box-sizing:border-box;
        padding:0px 35px;
        line-height: 20px;
        letter-spacing: 0.005em;
        color: #000000;
    }

    .minus_icon{
        font-size:12px;
        position:absolute;
        top:30px;
        left:10px;

        @media(min-width:768px){
           
        }
    }

    .down_icon{
        font-size:12px;
        position: absolute;
        top:30px;
        right:10px;
        

    }


}

.box{
    display:flex;
    margin-left:15em;
    position: absolute;
}

.page{
    display: flex;
    /* margin-right:5px;
    margin-top:30px; */
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding:24px 25px;
    gap: 28px;
    width:50%;
    height:120px;
    background:rgba(242, 242, 242, 0.5);
    border-radius: 8px 0px 0px 8px;

    h6{
        padding:0;
        font-style: normal;
        font-weight:600;
        font-size:12px;
        line-height: 20px;
        letter-spacing: 0.005em;
        color: #000000;
    }

    p{
        margin-top:10px;
        font-style: normal;
        font-weight: 500;
        line-height:20px;
        letter-spacing: 0.005em;
        font-size:14px;
        width:100%;
    }

    span{
        margin-right:5px;
        font-size:30px;
        color: #2301F3;
    }

    div{
        display:flex;
    }

    .d{
        margin-left:110px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top:10px;
        padding:5px;
        gap:4px;
        width:auto;
        height: 36px;
        background: rgba(62, 199, 59, 0.15);
        border-radius: 24px;

        p{
            margin:0px;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #0A4509;
        }
    }


}


@media(max-width:850px){
    display:block;
    margin:-450px 50px;
    
    .account{
        margin-left:-20px;
    
        p{
            display:none;
        }

        input{
            margin-bottom:10px;
            font-size:13px;
        }

        .block{
            margin:0vh 10px;

        }
    
        h3{
            margin-top:2px;
            font-size:20px;
            line-height: 20px;
            letter-spacing: 0.005em;
            color: #000000;
        }

        .minus_icon{
        }
    
        .down_icon{
            right:58%;
        }
    
    
    }
    
    .box{
        display:flex;
        margin-left:-30px;
    }
    
    .page{
        margin-right:5px;
        margin-top:0px;
        padding: 24px 32px;
        gap: 28px;
        width:180px;
        height:90px;
    
        h6{
            margin-top:5px;
            margin-bottom:-20px;
        }
    
        p{
            margin-top:10px;
            margin-left:-20px;
            width:100px;
            font-size:12px;
        }
    
        span{
            margin-right:5px;
            font-size:26px;
        }
    
        div{
            box-sizing:border-box;
            display:flex;
            margin-top:2px; 
        }
    
        .d{
            margin-top:10px;
            flex-direction: row;
            align-items: center;
            padding: 8px 16px 8px 10px;
            gap:4px;
            width:58px;
            height:23px;
            background: rgba(62, 199, 59, 0.15);
            border-radius: 24px;
            margin-left:0px;

            .arrow{
                font-size:12px;
            }
    
            p{
                margin-right:14px;
                font-size:11px;
                width:10px;
            }
        }
    
    
    }

}


`

export const Post = styled.div`
   /* margin:15em 120px; */
   display:flex;
   margin: 50px 0;

   h3{
    font-style: normal;
    /* font-weight:600; */
    font-size:20px;
    /* line-height: 36px; */
    color: #000000;
    /* margin:-100px -40px; */

  
   }

   .min-post{
    display:flex;
    width:190px;
    /* margin:15px 25px; */

    p{
        font-style: normal;
        font-weight:600;
        font-size: 16px;
        line-height:24px;
        color: #000000;
        padding:5px 10px;
      
        
    }

    .S2{
        width:35px;
        height:35px;
        border-radius:50%;
        object-fit:cover;
    }
   }


   .Bg{
       
        position:absolute;
        margin:0px 20px;
        width:290px;
        height:160px;
        border-radius: 40px 0px;
        background-position:center;
        background-size:cover;
        
        .love{
            position: absolute;
            display:flex;
            justify-content:center;
            align-items:center;
            width:30px;
            height:30px;
            left: 23px;
            top: 18px;
            border-radius:50%;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
        }

        button{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 8px 16px;
            gap:10px;
            position: absolute;
            width:110px;
            height:30px;
            left:180px;
            top:130px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 0px 0px 48px 0px;
            font-style: normal;
            font-weight: 500;
            font-size:14px;
            line-height: 24px;
            color: #FFFFFF;
            border:none;
            cursor: pointer;
        }
   }

   h4{
    font-style: normal;
    font-weight:600;
    font-size:15px;
    line-height: 30px;
    color: #000000;
    padding:166px 20px;
   }

   h5{
    font-style: normal;
    font-weight:500;
    font-size:13px;
    line-height: 27px;
    color: #000000;
    margin:-170px 19px;
   
   }

   .location{
    display:flex;
    margin:180px 15px;

    p{
        left:25px;
        margin-top:-7px;
        font-style: normal;
        font-weight: 300;
        font-size:11px;
        line-height: 18px;
        color: #000000;
        width:280px;
        height: 36px;
        margin-left:5px;
    }

   }



.b{
    display:flex;
    position:absolute;
    top:670px;


    button{
        margin-top:0px;
        margin-left:15px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        gap: 10px;
        width:140px;
        height:50px;
        background: #F2F2F2;
        border-radius: 4px;
        font-style: normal;
        font-weight:600;
        font-size:14px;
        line-height:24px;
        text-align: center;
        color: rgba(37, 38, 37, 0.95);
        border:none;
    
    }
}


.posts{
    // margin-right:100px;
}


.second{
}

       // MEDIA QUERRY


@media(max-width:850px){
    margin-top:650px;
    display:block;
    height:200px;


    h3{
        font-size:18px;
        margin:50px;
    }   
    
       .min-post{
        margin:25px -60px;
 
    
            p{
               font-weight:500;
            }

        }
    
    
       .Bg{
            margin:0px 20px;
            left:20px;
        }
    
       h4{
        margin-left:-90px;
       }
    
       h5{
        font-weight:600;
        font-size:13px;
        margin-left:-70px;
       
       }
    
       .location{
        margin-left:-70px;
        display:flex;
        width:300px;
        margin:180px 15px;
        margin-left:-70px;
    
        p{
            margin-top:-7px;
            font-size:10px;
        }
    
       }
    
    
    
    .b{
        display:flex;
        position:absolute;
        top:1210px;
        left:20px;
    }
    
    .second{
        display:none;
    }
}

`