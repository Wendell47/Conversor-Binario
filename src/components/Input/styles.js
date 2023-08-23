import styled  from "styled-components";

export const Content = styled.div`
background: var(--bg-dark-800);
border-radius: 3rem;
padding: 2rem;
display:flex;
align-items: center;


> input{
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color:#bdbdbd;
    font-size: 2rem;
    font-weight: 600;
    &::placeholder{
        color: #999;
    }
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
}

> button{
    border-radius: 2rem;
    background: #0088FF;
    border: none;
    color:white;
    padding: 2rem;
    display: flex;
    cursor: pointer;
    box-shadow: 0px 8px 16px -4px #0088FF;

    font-size: 2rem;
    transition: 140ms ease-out;

    &:hover{
        background: #0077EE;
        box-shadow: 0px 8px 20px -2px #0088FF;
    }

    &:active{
        scale: 0.97;
        opacity:0.7;
        
        //animation: rotate 140ms ease-in  forwards ;
    }

    @keyframes rotate {
     0%{
        rotate: 0deg;
     }   

     100%{
        rotate: 360deg;
     }
    }
}
`

