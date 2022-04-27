import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

:root {
    --primaryPink: #FF577F;
    --primaryPinkFocus: #FF427F;
    --primaryBrownNegative: #59323F;
    --gray4: #121214;
    --gray3: #212529;
    --gray2: #343B41;
    --gray1: #868E96;
    --gray0: #F8F9FA;
    --greenSucess: #3FE864;
    --redFailed: #E83F5B;
}

body {
    background: var(--gray4);
    color: var(--gray0);
    > div {
        display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    }
}

body, button, input {
    font-family: 'Inter';
    font-size: 1rem;
} 

h1, h3 {
    font-family: 'Inter';
    font-weight: 700;
}

h1 {
    font-family: 'Inter';
    font-weight: 600;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}
`;
