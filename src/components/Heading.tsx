import styled from 'styled-components';

const Heading = styled.h1`
    align-items: center;
    color: ${({theme}) => theme.palette.blue};
    display: flex;
    font-size: ${({theme}) => theme.fontSizes.headlineSmall};
    font-weight: ${({theme}) => theme.fontWeights.semi};
    margin-bottom: 64px;

    &::after {
        background-color: ${({theme}) => theme.palette.sky};
        content: '';
        flex-grow: 1;
        height: 1px;
        margin-left: 32px; 
    }
`;

export default Heading;