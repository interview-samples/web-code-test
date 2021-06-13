import { gql } from '@apollo/client';

export const GET_TOP_POSTS_SORTED_BY_TITLE = gql`
    query Top10BlogsByTitle {
        blogPostCollection(limit: 10, order: title_ASC) {
            items {
                sys {
                    id
                },
                title,
                preface
            }    
        }
    }
`;

export const GET_POST_BY_ID = gql`
    query PostById($id: String!){
        blogPost(id: $id) {
            title,
            body
        }
    }
`;
