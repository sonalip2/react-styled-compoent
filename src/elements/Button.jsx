import styled from 'styled-components';

const Button = styled.button`
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    background: ${ props => props.primary && 'blue' || props.danger && 'red' || 'black' };
    margin:15px;
`;

export default Button;
