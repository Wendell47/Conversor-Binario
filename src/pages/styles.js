import styled  from "styled-components"

export const Main = styled.div`

max-width: 600px;
height:100vh;
margin-inline: auto;
padding:3rem;
display: flex;

flex-direction: column;

gap: 5rem;
align-items: center;
justify-content: center;



`


export const Content = styled.div`

border-radius: 4rem;
padding: 4rem;
background:var(--bg-dark-900);
border:var(--border-dark);
min-height: 500px;
width:100%;
box-shadow: var(--box-shadow);

color:var(--color);
text-align: center;
h2{
    font-size: 2rem;
    font-weight:600;
     margin-bottom:1.2rem;
}
>p{
    font-size: 1.4rem;
    color:#bdbdbd;
    margin-bottom: 2rem;
}


`
export const ResultContent = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    min-height: 200px;
    width: 100%;  
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

