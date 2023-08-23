import { styled } from "styled-components";

export const Content = styled.div`
display: flex;
align-items: center;
gap:2rem;

font-size: clamp(1rem, 3vw, 1.5rem);

>svg{
    width: clamp(3rem, 3vw, 4rem);
}

>h1{
    span{
        color:#0088FF;
    }
}

`