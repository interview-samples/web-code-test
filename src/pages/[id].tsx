import useEffect from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'

import * as queries from '../queries/post-queries';
import Heading from '../components/Heading';
import CenterMessage from '../components/CenterMessage';
import Container from '../components/Container';

export default function BlogDetailPage() {

  const router = useRouter();

  const { loading, error, data } = useQuery<BlogPostDetailResult>(queries.GET_POST_BY_ID,  {
    variables: { id: router.query.id },
  });

  if (loading) return <CenterMessage message="Loading ..." />;
  if (error) return <CenterMessage message="An error has occurred!"/>;

  if (data?.blogPost) {
    const {title, body} = data.blogPost;
    return (
      <Container>
        <Heading>{title}</Heading>
          <p>{body}</p>
      </Container>
    )
  } {
    router.push('/404');
    return null; 
  }
}