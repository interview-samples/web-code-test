import styled from 'styled-components';

const Grid = styled.ul`
    display: grid;
    gap: ${props => props.theme.gridGap};
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    list-style-type: none;

    @media (min-width: 800px) {
        padding-left: 136px;
    }
`;

export default Grid;