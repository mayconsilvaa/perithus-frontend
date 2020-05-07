import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
}
    *:focus{
    outline: 0;
}
    html, body, #root{
    height: 100%;
    width:100%;
    overflow-x:hidden;
}
    body{
    -webkit-font-smoothing: antialiased;
}
    body, input, button{
    font: 14px 'Montserrat', sans-serif !important;
}
    a{
    text-decoration: none;
}
    ul{
    list-style: none;
}
    button{
    cursor: pointer;
}

    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
`;
