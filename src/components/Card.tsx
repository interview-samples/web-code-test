import styled from 'styled-components';

interface CardProps {
    isLarge: boolean;
}

const Card = styled.li<CardProps>`
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 2px 4px rgba(11, 15, 103, 0.06), 
                0px 4px 12px rgba(11, 15, 103, 0.04);
    grid-column-end: auto;

    @media (min-width: 600px) {
        grid-column-end: ${(props) => props.isLarge ? "span 2" : 'auto'} ;
    }
`;

Card.defaultProps = {
    isLarge: false,
}

export default Card;
