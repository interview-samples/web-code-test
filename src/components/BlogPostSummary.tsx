import Link from 'next/link';
import styled from 'styled-components';

interface BlogPostSummaryProps {
    isLarge: boolean;
}

const A = styled.a<BlogPostSummaryProps>`
    border-radius: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    padding: 32px;    
    height: 100%;

    &:hover {
        box-shadow: 
            0px 4px 24px rgba(11, 15, 103, 0.2), 
            0px 2px 4px rgba(11, 15, 103, 0.06), 
            0px 4px 12px rgba(11, 15, 103, 0.04);           

    }  

    &:focus, &:focus-within {
        border: 2px solid #5045CD;
        box-shadow: 0px 4px 24px rgba(11, 15, 103, 0.2), 
                    0px 2px 4px rgba(11, 15, 103, 0.06), 
                    0px 4px 12px rgba(11, 15, 103, 0.04);
    }

    h2 {
        color: ${({theme}) => theme.palette.blue};
        font-size: ${({isLarge, theme}) => isLarge ? theme.fontSizes.headline : theme.fontSizes.headlineSmall};
        font-weight: ${({theme}) => theme.fontWeights.bold};
        line-height: ${({isLarge}) => isLarge ? '3.325rem' : '2.793rem'};
        margin-bottom: 0.8rem;
    }

    p {
        color: ${({theme}) => theme.palette.black};
        flex-grow: 1;
        font-size: ${({isLarge}) => isLarge ? '1.8rem' : 'inherit'};
        line-height: ${({isLarge}) => isLarge ? '2.7rem' : 'inherit'};
        margin-bottom: 1.6rem;
    }

    span {
        align-self: flex-end;
        color: ${({theme}) => theme.palette.sky};
    }
`;

A.defaultProps = {
    isLarge: false,
}


const BlogPostSummary: React.FC<{ isLarge: boolean, post: BlogPostSummaryResult }> = ({ isLarge, post: { id, title, preface } }) => {
    return (
        <Link href={`/${id}`} passHref>
            <A isLarge={isLarge}>
                <h2>{title}</h2>
                <p>{preface}</p>
                <span>→</span>
            </A>
        </Link>
    )
}
BlogPostSummary.defaultProps = {
    isLarge: false,
}


export default BlogPostSummary;