import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: ${props => props.input ? 'column' : ''};
    margin: 10px;
    justify-content: ${props => props.input ? 'space-around' : ''};
    width: ${props => props.input ? '400px' : ''};
    justify-content: ${props => props.input ? '' : 'center'};
    align-items: ${props => props.input ? '' : 'center' };
    height: ${props => props.input ? '' : '100vh' } ;
`;

export default Div;
