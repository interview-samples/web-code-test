import { useQuery } from '@apollo/client';
import * as queries from '../queries/post-queries';

import BlogPostSummary from '../components/BlogPostSummary';
import Card from '../components/Card';
import CenterMessage from '../components/CenterMessage';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Heading from '../components/Heading';

export default function BlogListingPage() {

  const { loading, error, data } = useQuery<BlogPostSummaryResults>(queries.GET_TOP_POSTS_SORTED_BY_TITLE);

  if (loading) return <CenterMessage message="Loading ..." />;
  if (error) return <CenterMessage message="An error has occurred!"/>;

  const posts = data?.blogPostCollection
      .items.map<BlogPostSummaryResult>(post => ({ id: post.sys.id, title: post.title, preface: post.preface })) || [];

  return (
    <Container>
      <Heading>From the blog</Heading>
      <Grid>
        {posts.map((post, idx) => {
          const isLarge = idx === 0;
          return (
            <Card key={post.id} isLarge={isLarge}>
              <BlogPostSummary post={post} isLarge={isLarge} />
            </Card>
          );
        })}
      </Grid>
    </Container>
  )
}
