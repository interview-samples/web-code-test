import styled from 'styled-components';

const Div = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    left: 50%;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);

    p {
        font-size: 2.4rem;
        transform: uppercase;
    }
`;

interface CenterMessageProps {
    message: string,
}

const CenterMessage: React.FC<CenterMessageProps> = ({message}) => {
    return (
        <Div>           
            <p>{message}</p>
        </Div>
    )
}

export default CenterMessage;