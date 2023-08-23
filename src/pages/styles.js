import styled  from "styled-components"

export const Main = styled.div`

max-width: 600px;
height:100vh;
margin-inline: auto;
padding:2rem;
display: flex;

flex-direction: column;

gap: 4rem;
align-items: center;
justify-content: center;



`


export const Content = styled.div`

border-radius: clamp(2rem, 3vw,4rem);
padding: clamp(2rem, 3vw,4rem);
background:var(--bg-dark-900);
border:var(--border-dark);
min-height: 500px;
width:100%;
box-shadow: var(--box-shadow);

color:var(--color);
text-align: center;


>p{
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    color:#bdbdbd;
    margin-bottom: 2rem;
}

.title{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    > h2{
    font-size: clamp( 1.2rem, 12vw, 1.6rem);
    font-weight:600;
   margin-block: 2rem;
}
>svg{
    font-size: clamp(1.2rem, 12vw, 1.4rem);
    color:#bdbdbd;
}
}

`
export const ResultContent = styled.div`

   
    max-height: 350px;
    overflow-y: auto;
    margin-top: 3rem;
    width: 100%;  
    >h2{
        color:#bdbdbd;
    }
    > p{
        font-size: clamp(2rem, 12vw, 4.4rem);
        font-weight: 600;
        letter-spacing:clamp(1rem, 2vw, 2rem);
        word-break: break-all;
        animation: show 140ms ease-out forwards 100ms ;
        opacity: 0;
    }

    @keyframes show {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

`

export const NoResult = styled.p`

    font-size: 2rem;
    letter-spacing:2rem;
    font-weight: 600;
    color:#828282;
`

